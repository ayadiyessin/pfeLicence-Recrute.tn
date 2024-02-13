var idrec="6245d8bc59ddb141a8c5934e";
function envMessage(){
    var url_string = window.location.href ;
var url = new URL(url_string); 
var idDEMEND = url.searchParams.get("id");
 Swal.fire({
    title: "Rédigez votre message ",
    html: '<textarea id="DESCRIP" class="swal2-input" ></textarea>',
    confirmButtonText: 'Envoyer',
    confirmButtonColor: '#17a2b8',
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
        const DESCRIP = Swal.getPopup().querySelector('#DESCRIP').value
        
        if (!DESCRIP ){
                Swal.showValidationMessage(`Rédigez votre message !!`)


             }
             return { DESCRIP: DESCRIP }
    }
    }).then((result) => {
        if (result.isConfirmed) {
        
            var url = "http://192.168.43.96:3000/messages";
                        
                        var data = {};
                        data.DESC_MES  = `${result.value.DESCRIP}`;
                        data.ID_RECRUTEUR   = idrec;
                        data.ID_DEMANDEUR   = idDEMEND;
                                                                
                        var json = JSON.stringify(data);
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                        xhr.onload = function () {
                            var messages = JSON.parse(xhr.responseText);
                            if (xhr.readyState == 4 && xhr.status == "200") {
                                Swal.fire({
                                    title:'Message Envoyée !',
                                    icon:'success',
                                    
                                })
                                
                            } else {
                                console.error(messages);
                                
                            }
                        }
                        xhr.send(json);
             
        }else {
              
                Swal.fire({
                        icon:'error',  
                        title:'Message non envoyé. !',
                        showConfirmButton:true,
                        timer:1500
                            
                        
                        })
                }

                       
    
    })



}