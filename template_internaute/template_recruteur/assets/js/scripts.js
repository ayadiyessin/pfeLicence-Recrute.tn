var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");


var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .default-btn");
var form_2_back_btn = document.querySelector(".form_2_btns .btnBACK");
var form_2_next_btn = document.querySelector(".form_2_btns .default-btn");
var form_3_back_btn = document.querySelector(".form_3_btns .btnBACK");
var form_3_next_btn = document.querySelector(".form_3_btns .default-btn");
var form_4_back_btn = document.querySelector(".form_4_btns .btnBACK");
var form_4_next_btn = document.querySelector(".form_4_btns .default-btn");
var form_5_back_btn = document.querySelector(".form_5_btns .btnBACK");
var form_5_next_btn = document.querySelector(".form_5_btns .default-btn");


var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");


function getLocation() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(showPosition);
	} 
  }
  
  function showPosition(position) {
	x1 = position.coords.latitude; 
	y1 = position.coords.longitude;
	console.log(x1);
  console.log(y1);
  var data = {};
				data.EMAIL_REC = document.getElementById("EMAIL_REC").value;
				data.PSW_REC = document.getElementById("PSW_REC").value;
				data.SEC_DACT_ENT = document.getElementById("SEC_DACT_ENT").value;
				data.EMAIL_ENT = document.getElementById("EMAIL_ENT").value;
				data.IDENT_UNQ_ENT = document.getElementById("IDENT_UNQ_ENT").value; 
				data.NOM_ENT = document.getElementById("NOM_ENT").value;
				data.LOGO_ENT = document.getElementById("LOGO_ENT").value;
				data.URL_WEB_ENT = document.getElementById("URL_WEB_ENT").value;
				data.URL_LINK_ENT = document.getElementById("URL_LINK_ENT").value;
				data.URL_FB_ENT = document.getElementById("URL_FB_ENT").value;
				data.DESC_ENT = document.getElementById("DESC_ENT").value;
				data.PAYS_ORG_ENT = document.getElementById("PAYS_ORG_ENT").value; 
				data.VILLE_ENT = document.getElementById("VILLE_ENT").value;
				data.ADRESSE_ENT = document.getElementById("ADRESSE_ENT").value;
				data.COD_POST_ENT = document.getElementById("COD_POST_ENT").value;
				data.NUM_TEL_ENT = document.getElementById("NUM_TEL_ENT").value; 
				data.NB_SAL_ENT = document.getElementById("NB_SAL_ENT").value;
				data.VALID_ENT = "0";
				data.X = x1;
				data.Y = y1;
				data.ARCHIV_REC = "0";
				data.DAT_CREA_ENT = document.getElementById("DAT_CREA_ENT").value;

				var url = "http://192.168.43.96:3000/recruteurs";
				var json = JSON.stringify(data);
				var xhr = new XMLHttpRequest();
				xhr.open("POST", url, true);
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
				xhr.onload = function () {
					var recruteurs= JSON.parse(xhr.responseText);
					if (xhr.readyState == 4 && xhr.status == "200") {
						form_5.style.display = "none";
						form_6.style.display = "block";
		
						form_6_btns.style.display = "flex";
						form_5_btns.style.display = "none";
		
						form_3_progessbar.classList.add("active");
						step1.innerHTML = parseInt(step1.innerHTML) +1;
						step2.innerHTML = parseInt(step2.innerHTML) +1;
						step3.innerHTML = parseInt(step3.innerHTML) +1;
						Swal.fire({
							title:'Information enregistré',
							icon:'success',
							showConfirmButton:false,
							timer:2200
						})
					} else {
						Swal.fire({
							title:'Inscription annuler',
							icon:'warning',
							showConfirmButton:false,
							timer:1800
						})
					}
				}
				xhr.send(json);
  }
  
	
form_1_next_btn.addEventListener("click",
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				
				var request = new XMLHttpRequest()
				// Open a new connection, using the GET request on the URL endpoint
				request.open('GET', 'http://192.168.43.96:3000/recruteurs', true)
				request.onload = function()
				{
					// Begin accessing JSON data here
					var data = JSON.parse(this.response)
					console.log(data);
					var valiemail=true;
					data.forEach(i => {
						if(i.EMAIL_REC==document.getElementById("EMAIL_REC").value){
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
			passwordIN:true
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
			passwordIN: "Au moins une lettre minuscule + Au moins une lettre majuscule + Au moins un chiffre"
			},
			CPSW: {
				
				required: "Veuillez saisir un mot de passe de confirmation",
				equalTo:"Entrez à nouveau la même valeur s'il vous plait.",
				passwordIN:"Entrez à nouveau la même valeur s'il vous plait.",
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
		"passwordIN",
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
				minlength: 3,
			},
			IDENTUNIQ: {
				required: true,
				ident: true,
			},
			SECDACT: {
				required: true,
			},
			LOGOENT: {
				required: true,
				accept: "image/*",
			},
		},
		messages: {
			NOM: {
				required: "Veuillez saisir un nom d'entreprise",
				minlength: "Le nom doit comporter au moins 3 caractères"
			},
			IDENTUNIQ: {
				required: "Veuillez saisir le identifient unique de l'entreprise",
				ident: "Le identifient unique doit comporter 6 chiffres une - et 2 chiffre à la fin"
			},
			SECDACT: {
				required: "Veuillez saisir un secteur d'activité"
			},
			LOGOENT: {
				required: "Veuillez saisir un logo d'entreprise",
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
		"ident",
		function(value, element) {
			return /^(([0-9].{5})+\-)+([0-9].{1})+$/.test(value);
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
				document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Informations de l'Entreprise"><i class="ri-profile-line" ></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Localisation Entreprise"><i class="ri-map-pin-line"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact de l'Entreprise"><i class="ri-phone-line"></i></p>`;
			}
		})

		$('#form3').validate({

		rules: {
			ADRESSEENT: {
				required: true,
			},
			CODPOSENT: {
				required: true,
				numCP: true,
			},
			PAYSORGENT: {
				required: true,
			},
			VILLEENT: {
				required: true,
			},
		},
		messages: {
			ADRESSEENT: {
				required: "Veuillez saisir une adresse d'entreprise"
			},
			CODPOSENT: {
				required: "Veuillez saisir un code postal d'entreprise",
				numCP: "Le code postal doit comporter 4 chiffres"
			},
			PAYSORGENT: {
				required: "Veuillez saisir un pays original d'entreprise"
			},
			VILLEENT: {
				required: "Veuillez choisir une ville d'entreprise"
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

form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_4_btns.style.display = "none";
	form_3_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
	document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Informations de Profil"><i class="ri-profile-line" ></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Informations de l'Entreprise"><i class="ri-profile-line" ></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Localisation Entreprise"><i class="ri-map-pin-line"></i></p>`;
});

form_4_next_btn.addEventListener("click",
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				form_4.style.display = "none";
				form_5.style.display = "block";
			
				form_5_btns.style.display = "flex";
				form_4_btns.style.display = "none";
				document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Localisation Entreprise"><i class="ri-map-pin-line" ></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact de l'Entreprise"><i class="ri-phone-line"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Autres Informations"><i class="ri-file-list-line"></i></p>`;
				form_3_progessbar.classList.add("active");
			}
		})

		$('#form4').validate({

		rules: {
			EMAILENT: {
				required: true,
				email: true,
			},
			NUMTELENT: {
				required: true,
				num: true,
				number: true,
			},
		},
		messages: {
			EMAILENT: {
				required: "Veuillez saisir une adresse e-mail d'entreprise",
				email: "S'il vous plaît, mettez une adresse email valide"
			},
			NUMTELENT: {
				required: "Veuillez saisir un numéro de téléphone de l'entreprise",
				num: "Le téléphone doit comporter 8 chiffres et ne débute pas par 0 ou 1 ",
				number:"Contient que chiffres "
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
		jQuery.validator.addMethod(
		"email",
		function(value, element) {
			return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
		},)
	})
);

form_5_back_btn.addEventListener("click", function(){
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_5_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_3_progessbar.classList.add("active");
    document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Informations de l'Entreprise"><i class="ri-profile-line" ></i></p>`;
	document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Localisation Entreprise"><i class="ri-map-pin-line"></i></p>`;
	document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact de l'Entreprise"><i class="ri-phone-line"></i></p>`;
});
var x1;
var y1;



form_5_next_btn.addEventListener("click", 
	$(function () {
		$.validator.setDefaults({
			submitHandler : function () {
				getLocation()
				document.getElementById("Divstep1").innerHTML = `<p id="step1" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact de l'Entreprise"><i class="ri-phone-line" ></i></p>`;
				document.getElementById("Divstep2").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Autres Informations"><i class="ri-file-list-line"></i></p>`;
				document.getElementById("Divstep3").innerHTML = `<p id="step2" data-bs-toggle="tooltip" data-bs-placement="top" title="Jours de Travail"><i class="ri-calendar-line"></i></p>`;
			}
		})

		$('#form5').validate({

		rules: {
			NBSALENT: {
				required: true,
				number: true,
			},
			DATCREAENT: {
				required: true,
			},
			DESCENT: {
				required: true,
			},
		},
		messages: {
			NBSALENT: {
				required: "Veuillez saisir le nombre de salariés dans l'entreprise",
				number:"Contient que chiffres "
			},
			DATCREAENT: {
				required: "Veuillez saisir une date de création de l'entreprise"
			},
			DESCENT: {
				required: "Veuillez saisir une description sur l'entreprise"
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


