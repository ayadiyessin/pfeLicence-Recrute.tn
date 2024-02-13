
    var idrec= localStorage.getItem("ID_REC");

    function reclamation(){
                ch=`<div class="col-xl-2 col-lg-12 col-md-12"></div>
                                    <div class="col-xl-8 col-lg-12 col-md-12">
                                        <div class="change-password-box">
                                            <h3>Ajouter Une Réclamation</h3>
                
                                            <form onsubmit="return false" id="formcontact">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-6">
                                                        <div class="form-group">
                                                            <label>Sujet </label>
                                                            <input name="sujetR" id="SUJ_RECL" type="text" class="form-control" placeholder="Entrer le sujet...">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label>Captur</label>
                                                            <input id="CAPTU_RECL" name="capture" type="file" class="form-control">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label>Description </label>
                                                            <textarea id="DESC_RECL" name="DescREC" cols="30" rows="2" placeholder="Entrer une description..." class="form-control"></textarea>
                                                        </div>
                                                    </div>
                
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                            <button type="button" class="default-btn" onclick="annuler();" >Annuler <i class="flaticon-send"></i></button>
                                                            <br>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <button type="submit" class="default-btn" onclick="valider();" >Envoyer <i class="flaticon-send"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>              
                                                    
                                                </div>
                                            
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                document.getElementById("reclaamationn").innerHTML=ch;

            }

    function valider(){
    $.validator.setDefaults({
    submitHandler: function () {
        console.log("aaaaa");
        var url = "http://192.168.43.96:3000/reclamations";
        Swal.fire({
            title: 'Etes vous Sure?',
          text: "Vous souhaitez envoyer cette réclamation !",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#17a2b8',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Envoyer'
        }).then((result) => {
          if (result.isConfirmed) {
            var data = {};
            data.SUJ_RECL=document.getElementById("SUJ_RECL").value;
            data.DESC_RECL=document.getElementById("DESC_RECL").value;
            if(document.getElementById("CAPTU_RECL").value==""){
                data.CAPTU_RECL="../dist/img/photoFos.jpg";
            }else{
                data.CAPTU_RECL=document.getElementById("CAPTU_RECL").value;
            }
            
            data.VUE_RECL="0";
            data.ID_RECRUTEUR=idrec;
            data.ID_OFFRE="";
            data.ID_DEMANDEUR=c;
            data.RESPONS_ENV_RECL=idrec;

            console.log(data);

            var json = JSON.stringify(data);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload = function () {
                
                var admins= JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    Swal.fire({
                      title:'Envoyé!',
                      text:'Cette réclamation est envoyé avec succés.',
                      icon:'success',
                    
                  }).then((result) => {
                      if (result.isConfirmed){
                        location.reload();
                      }

                  })
                  
                } else {
                    Swal.fire('Réclamation Non Envoyer')
                    console.table(admins);
                }
            }
            xhr.send(json);
        }
        })
    }
  });
  
  $('#formcontact').validate({
  
    rules: {
        sujetR: {
        required: true,
        
      },
      DescREC: {
        
        required: true,
        
      },

    },
    messages: {
        sujetR: {
        required: "Veuillez saisir le sujet",
      },
      DescREC: {
        required: "Veuillez rédiger votre problème "
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
  
  
}
        function annuler(){
             location.reload();
        }

        