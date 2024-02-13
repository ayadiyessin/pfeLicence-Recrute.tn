var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");
var form_7 = document.querySelector(".form_7");
var form_8 = document.querySelector(".form_8");
var form_9 = document.querySelector(".form_9");
var form_10 = document.querySelector(".form_10");
var form_11 = document.querySelector(".form_11");
var form_12 = document.querySelector(".form_12");


var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");
var form_7_btns = document.querySelector(".form_7_btns");
var form_8_btns = document.querySelector(".form_8_btns");
var form_9_btns = document.querySelector(".form_9_btns");
var form_10_btns = document.querySelector(".form_10_btns");
var form_11_btns = document.querySelector(".form_11_btns");
var form_12_btns = document.querySelector(".form_12_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .default-btn");
var form_2_back_btn = document.querySelector(".form_2_btns .btnBACK");
var form_2_next_btn = document.querySelector(".form_2_btns .default-btn");
var form_3_back_btn = document.querySelector(".form_3_btns .btnBACK");
var form_3_next_btn = document.querySelector(".form_3_btns .default-btn");
var form_4_back_btn = document.querySelector(".form_4_btns .btnBACK");
var form_4_next_btn = document.querySelector(".form_4_btns .default-btn");
var form_5_back_btn = document.querySelector(".form_5_btns .btnBACK");
var form_5_next_btn = document.querySelector(".form_5_btns .default-btn");
var form_6_back_btn = document.querySelector(".form_6_btns .btnBACK");
var form_6_next_btn = document.querySelector(".form_6_btns .default-btn");
var form_7_back_btn = document.querySelector(".form_7_btns .btnBACK");
var form_7_next_btn = document.querySelector(".form_7_btns .default-btn");
var form_8_back_btn = document.querySelector(".form_8_btns .btnBACK");
var form_8_next_btn = document.querySelector(".form_8_btns .default-btn");
var form_9_back_btn = document.querySelector(".form_9_btns .btnBACK");
var form_9_next_btn = document.querySelector(".form_9_btns .default-btn");
var form_10_back_btn = document.querySelector(".form_10_btns .btnBACK");
var form_10_next_btn = document.querySelector(".form_10_btns .default-btn");
var form_11_back_btn = document.querySelector(".form_11_btns .btnBACK");
var form_11_next_btn = document.querySelector(".form_11_btns .default-btn");
var form_12_back_btn = document.querySelector(".form_12_btns .btnBACK");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");


  
	
form_1_next_btn.addEventListener("click",
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				var request = new XMLHttpRequest()
				// Open a new connection, using the GET request on the URL endpoint
				request.open('GET', 'http://192.168.43.96:3000/demandeurs', true)
				request.onload = function()
				{
					// Begin accessing JSON data here
					var data = JSON.parse(this.response)
					console.log(data);
					var valiemail=true;
					data.forEach(i => {
						if(i.EMAIL_DEM==document.getElementById("EMAIL_DEM").value){
							valiemail=false;
						}
					})
					if (valiemail){
						form_1.style.display = "none";
						form_2.style.display = "block";

						form_1_btns.style.display = "none";
						form_2_btns.style.display = "flex";

						form_2_progessbar.classList.add("active");
					}else{
						Swal.fire({
							title:'cette e-mail existe déjà !',
							icon:'warning',
							showConfirmButton:false,
							timer:1800
						})
					}
				}
				request.send();
			}
		})

		$('#form1').validate({

		rules: {
			EMAIL: {
			required: true,
			email: true,
			},
			PSW: {
			required: true,
			minlength: 5,
			},
			CPSW: {
				required: true,
				equalTo: "#form1 input[name='PSW']",
			},
		},
		messages: {
			EMAIL: {
			required: "Veuillez saisir une adresse e-mail",
			email: "S'il vous plaît, mettez une adresse email valide"
			},
			PSW: {
			required: "Veuillez saisir un mot de passe",
			minlength: "Votre mot de passe doit comporter au moins 5 caractères",
			password: "Au moins une lettre minuscule + Au moins une lettre majuscule + Au moins un chiffre"
			},
			CPSW: {
				
				required: "Veuillez saisir un mot de passe de confirmation",
				equalTo:"Entrez à nouveau la même valeur s'il vous plait.",
				password:"Entrez à nouveau la même valeur s'il vous plait.",
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
		jQuery.validator.addMethod(
		"password",
		function(value, element) {
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/.test(value);
		},),
		jQuery.validator.addMethod(
		"email",
		function(value, element) {
		return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
		},)
	})
);

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click",
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				form_2.style.display = "none";
				form_3.style.display = "block";
			
				form_3_btns.style.display = "flex";
				form_2_btns.style.display = "none";
			
				form_3_progessbar.classList.add("active");
			}
		})

		$('#form2').validate({

		rules: {
			NOM: {
				required: true,
			},
			PRE: {
				required: true,
			},
			SexeDem: {
				required: true,
			},
			DatNais: {
				required: true,
			},
			NumTel: {
				required: true,
				num: true,
				number: true,
			},
			PhotoDem: {
				required: true,
				accept: "image/*",
			},
		},
		messages: {
			NOM: {
				required: "Veuillez saisir votre nom"
			},
			PRE: {
				required: "Veuillez saisir votre prénom"
			},
			SexeDem: {
				required: "Veuillez choisir un sexe"
			},
			DatNais: {
				required: "Veuillez saisir une date de naissance"
			},
			NumTel: {
				required: "Veuillez saisir un numéro de téléphone",
				num: "Le téléphone doit comporter 8 chiffres et ne débute pas par 0 ou 1 ",
				number:"Contient que chiffres "
			},
			PhotoDem: {
				required: "Veuillez choisir une photo",
				accept:"extension image"
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
		jQuery.validator.addMethod(
		"num",
		function(value, element) {
			return /^[2-9][0-9].{6}$/.test(value);
		},)
	})
);

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", 
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				form_3.style.display = "none";
				form_4.style.display = "block";

				form_4_btns.style.display = "flex";
				form_3_btns.style.display = "none";

				form_3_progessbar.classList.add("active");
				document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Information Personnelle"><i class="ri-draft-line" ></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil"><i class="flaticon-user-1"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
			}
		})

		$('#form3').validate({

		rules: {
			SpeciaDem: {
				required: true,
			},
			permisDem: {
				required: true,
			},
			typPermisDem: {
				required: true,
			},
			SalMinDem: {
				required: true,
			},
			DescDem: {
				required: true,
			},
		},
		messages: {
			SpeciaDem: {
				required: "Veuillez saisir une spécialité"
			},
			permisDem: {
				required: "Veuillez choisir un état de permis"
			},
			typPermisDem: {
				required: "Veuillez choisir un type de permis"
			},
			SalMinDem: {
				required: "Veuillez saisir un salaire minimum"
			},
			DescDem: {
				required: "Veuillez saisir une description sur son profil"
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
	})
);

form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_4_btns.style.display = "none";
	form_3_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Connexion"><i class="ri-lock-line" ></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Information Personnelle"><i class="ri-draft-line" ></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil"><i class="flaticon-user-1"></i></p>`;
});

form_4_next_btn.addEventListener("click",
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				form_4.style.display = "none";
				form_5.style.display = "block";
			
				form_5_btns.style.display = "flex";
				form_4_btns.style.display = "none";
			
				form_3_progessbar.classList.add("active");
				document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil"><i class="flaticon-user-1"></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
			}
		})

		$('#form4').validate({

		rules: {
			AdressDem: {
				required: true,
			},
			CPDem: {
				required: true,
				numCP: true,
			},
			VilleDem: {
				required: true,
			},
			paysDem: {
				required: true,
			},
		},
		messages: {
			AdressDem: {
				required: "Veuillez saisir votre adresse"
			},
			CPDem: {
				required: "Veuillez saisir le code postal",
				numCP: "Le code postal doit comporter 4 chiffres"
			},
			VilleDem: {
				required: "Veuillez choisir votre ville"
			},
			paysDem: {
				required: "Veuillez saisir votre pays"
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
		jQuery.validator.addMethod(
		"numCP",
		function(value, element) {
			return /^([0-9].{3})+$/.test(value);
		},)
	})
);

form_5_back_btn.addEventListener("click", function(){
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_5_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Information Personnelle"><i class="ri-draft-line" ></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil"><i class="flaticon-user-1"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
});

form_5_next_btn.addEventListener("click", function(){
	var testExp =true;
	if((document.getElementById("DAT_DEB_EXP").value!="")&&(document.getElementById("DAT_FIN_EXP").value!="")){
		if(document.getElementById("DAT_FIN_EXP").value <document.getElementById("DAT_DEB_EXP").value){
			testExp=false;
		}
	}
	if(testExp){
		form_5.style.display = "none";
		form_6.style.display = "block";

		form_6_btns.style.display = "flex";
		form_5_btns.style.display = "none";

		form_3_progessbar.classList.add("active");
		document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
		document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
		document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
	}else{
		Swal.fire({
			title:'le date début est supérieur à la date fin',
			icon:'warning',
			showConfirmButton:false,
			timer:1800
		})
	}

});

form_6_back_btn.addEventListener("click", function(){
	form_5.style.display = "block";
	form_6.style.display = "none";

	form_6_btns.style.display = "none";
	form_5_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil"><i class="flaticon-user-1"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
});

form_6_next_btn.addEventListener("click", 
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				var InputDip = document.getElementById("form6").getElementsByTagName("input");
				var SelectDip = document.getElementById("form6").getElementsByTagName("select");
				console.log(InputDip);
				console.log(SelectDip);
				var AjoutDip = 0;
				var selDIP = 0;
				var testNomDIP = true;
				// Open a new connection, using the GET request on the URL endpoint
				var requestD = new XMLHttpRequest();
				requestD.open('GET', "http://192.168.43.96:3000/diplomes", true);
				requestD.onload = function()
				{
					
					// Begin accessing JSON data here
					var dataD = JSON.parse(this.response);
					for(var di=0;di<InputDip.length-4;di++){
						console.log(testNomDIP);
						if(SelectDip[selDIP].value=="1"){
							dataD.forEach(nd =>{
								if(InputDip[di].value==nd.TYPE_DIP){
									testNomDIP = false;
								}
							})
							if(di == AjoutDip){
								AjoutDip+=5;
								selDIP+=1;
							}
						}else{
							if(di == AjoutDip){
								AjoutDip+=4;
								selDIP+=1;
							}
						}
						console.log(testNomDIP);
					}
					if(testNomDIP){
						if(document.getElementById("DAT_DEB_DIP").value > document.getElementById("DAT_FIN_DIP").value){
							Swal.fire({
								title:'le date début est supérieur à la date fin',
								icon:'warning',
								showConfirmButton:false,
								timer:1800
							})
						}else{
		
							form_6.style.display = "none";
							form_7.style.display = "block";
		
							form_7_btns.style.display = "flex";
							form_6_btns.style.display = "none";
		
							form_3_progessbar.classList.add("active");
							document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
							document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
							document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
						}
					}else{
						Swal.fire({
							title:"L'autre diplôme existe déja!!",
							icon:'warning',
							showConfirmButton:false,
							timer:1800
						})
					}
				}
				requestD.send();
			}
		})

		$('#form6').validate({

		rules: {
			TypDip: {
				required: true,
			},
			autDIP: {
				required: true,
			},
			NomEcolDip: {
				required: true,
			},
			SpecDip: {
				required: true,
			},
			DatDebDip: {
				required: true,
			},
			DatFinDip: {
				required: true,
			},
		},
		messages: {
			TypDip: {
				required: "Veuillez choisir un type de diplôme"
			},
			autDIP: {
				required: "Veuillez saisir une autre type de diplôme"
			},
			NomEcolDip: {
				required: "Veuillez saisir le nom de l'école"
			},
			SpecDip: {
				required: "Veuillez saisir la spécialité de diplôme"
			},
			DatDebDip: {
				required: "Veuillez saisir une date début de diplôme"
			},
			DatFinDip: {
				required: "Veuillez saisir une date fin de diplôme"
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
	})
);

form_7_back_btn.addEventListener("click", function(){
	form_6.style.display = "block";
	form_7.style.display = "none";

	form_7_btns.style.display = "none";
	form_6_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Adresse"><i class="ri-map-pin-line"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
});

form_7_next_btn.addEventListener("click", function(){
	var testFor =true;
	if((document.getElementById("DAT_DEB_FOR").value!="")&&(document.getElementById("DAT_FIN_FOR").value!="")){
		if(document.getElementById("DAT_FIN_FOR").value <document.getElementById("DAT_DEB_FOR").value){
			testFor=false;
		}
	}
	if(testFor){
		form_7.style.display = "none";
		form_8.style.display = "block";

		form_8_btns.style.display = "flex";
		form_7_btns.style.display = "none";

		form_3_progessbar.classList.add("active");
		document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
		document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
		document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
	}else{
		Swal.fire({
			title:'le date début est supérieur à la date fin',
			icon:'warning',
			showConfirmButton:false,
			timer:1800
		})
	}
			
});

form_8_back_btn.addEventListener("click", function(){
	form_7.style.display = "block";
	form_8.style.display = "none";

	form_8_btns.style.display = "none";
	form_7_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Expérience"><i class="flaticon-layers"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
});

form_8_next_btn.addEventListener("click", function(){
	form_8.style.display = "none";
	form_9.style.display = "block";

	form_9_btns.style.display = "flex";
	form_8_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
	document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
			
});

form_9_back_btn.addEventListener("click", function(){
	form_8.style.display = "block";
	form_9.style.display = "none";

	form_9_btns.style.display = "none";
	form_8_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Diplôme"><i class="ri-nurse-line"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
});

form_9_next_btn.addEventListener("click", function(){
	var testProj =true;
	if((document.getElementById("DAT_DEB_PROJ").value!="")&&(document.getElementById("DAT_FIN_PROJ").value!="")){
		if(document.getElementById("DAT_FIN_PROJ").value <document.getElementById("DAT_DEB_PROJ").value){
			testProj=false;
		}
	}
	if(testProj){
		form_9.style.display = "none";
		form_10.style.display = "block";

		form_10_btns.style.display = "flex";
		form_9_btns.style.display = "none";

		form_3_progessbar.classList.add("active");
		document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
		document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
		document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Vie Associative"><i class="ri-service-line"></i></p>`;
	}else{
		Swal.fire({
			title:'le date début est supérieur à la date fin',
			icon:'warning',
			showConfirmButton:false,
			timer:1800
		})
	}	
			
});

form_10_back_btn.addEventListener("click", function(){
	form_9.style.display = "block";
	form_10.style.display = "none";

	form_10_btns.style.display = "none";
	form_9_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formation"><i class="flaticon-mortarboard"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
});

form_10_next_btn.addEventListener("click", function(){
	var testVA =true;
	if((document.getElementById("DAT_DEB_VA").value!="")&&(document.getElementById("DAT_FIN_VA").value!="")){
		if(document.getElementById("DAT_FIN_VA").value <document.getElementById("DAT_DEB_VA").value){
			testVA=false;
		}
	}
	if(testVA){
		form_10.style.display = "none";
		form_11.style.display = "block";

		form_11_btns.style.display = "flex";
		form_10_btns.style.display = "none";

		form_3_progessbar.classList.add("active");
		document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
		document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Vie Associative"><i class="ri-service-line"></i></p>`;
		document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Langues & Compétences"><i class="ri-medal-line"></i></p>`;
	}else{
		Swal.fire({
			title:'le date début est supérieur à la date fin',
			icon:'warning',
			showConfirmButton:false,
			timer:1800
		})
	}
			
});

form_11_back_btn.addEventListener("click", function(){
	form_10.style.display = "block";
	form_11.style.display = "none";

	form_11_btns.style.display = "none";
	form_10_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Certifications"><i class="ri-file-mark-line"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Vie Associative"><i class="ri-service-line"></i></p>`;
});

form_11_next_btn.addEventListener("click", 
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				form_11.style.display = "none";
				form_12.style.display = "block";

				form_12_btns.style.display = "flex";
				form_11_btns.style.display = "none";

				form_3_progessbar.classList.add("active");
				document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Vie Associative"><i class="ri-service-line"></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Langues & Compétences"><i class="ri-medal-line"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Qualités & Centres D'interêts"><i class="ri-award-line"></i></p>`;
			}
		})

		$('#form11').validate({

		rules: {
			langSelect: {
				required: true,
			},
			autreNomLang: {
				required: true,
			},
			NivLangOFF: {
				required: true,
			},
			compSelect: {
				required: true,
			},
			autreNomComp: {
				required: true,
			},
			NivCompOFF: {
				required: true,
			},
		},
		messages: {
			langSelect: {
				required: "Veuillez choisir une langue"
			},
			autreNomLang: {
				required: "Veuillez saisir une autre langue"
			},
			NivLangOFF: {
				required: "Veuillez choisir un niveau de langue"
			},
			compSelect: {
				required: "Veuillez choisir une compétence"
			},
			autreNomComp: {
				required: "Veuillez saisir une autre compétence"
			},
			NivCompOFF: {
				required: "Veuillez choisir un niveau de compétence"
			}
		},
		errorElement: 'span',
		errorPlacement: function (error, element) {
			error.addClass('text-danger');
			element.closest('.form-group').append(error);
		},
		highlight: function (element) {
			var msgClasses = "h4";
			$(element).addClass(msgClasses);
		},
		unhighlight: function (element) {
			var msgClasses = "h4 tab";
			$(element).removeClass("h4");
			$(element).addClass(msgClasses);

		}

		});
	})
);

form_12_back_btn.addEventListener("click", function(){
	form_11.style.display = "block";
	form_12.style.display = "none";

	form_12_btns.style.display = "none";
	form_11_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Projets"><i class="flaticon-trophy"></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Vie Associative"><i class="ri-service-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Langues & Compétences"><i class="ri-medal-line"></i></p>`;
});


