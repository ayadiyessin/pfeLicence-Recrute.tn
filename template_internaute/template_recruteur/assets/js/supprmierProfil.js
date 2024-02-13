var idrec= localStorage.getItem("ID_REC");
function supprmierCempte(){
    Swal.fire({
            title: 'Vous souhaitez supprimer votre compte ?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonColor: '#228B22',
            confirmButtonText: 'Oui, Supprimer!',
            denyButtonText: `Non`,
            
        }).then((result) => {
            if (result.isConfirmed) {
            
                            Swal.fire({
                                title: 'Etes vous Sure?',
                                        text: "Vous souhaitez supprimer votre compte ?",
                                        icon: 'warning',
                                        showDenyButton: true,
                                        confirmButtonColor:'#d33',
                                        denyButtonColor: '#17a2b8' ,
                                        confirmButtonText: 'Oui',
                                        denyButtonText: `Non`,
                                    
                                }).then((result) => {
                                    if (result.isConfirmed){
                                        var request = new XMLHttpRequest()

                                    // Open a new connection, using the GET request on the URL endpoint
                                    request.open('GET', 'http://192.168.43.96:3000/recruteurs/'+idrec, true)
                                    request.onload = function()
                                    {
                                        // Begin accessing JSON data here
                                        var data1 = JSON.parse(this.response);

                                    var url = "http://192.168.43.96:3000/recruteurs/"+idrec;                                  
                                    var data = {};
                                    data.NOM_ENT=data1.NOM_ENT;
                                    data.SEC_DACT_ENT=data1.SEC_DACT_ENT;
                                    data.IDENT_UNQ_ENT=data1.IDENT_UNQ_ENT;
                                    data.EMAIL_ENT=data1.EMAIL_ENT;
                                    data.NUM_TEL_ENT=data1.NUM_TEL_ENT;
                                    data.PAYS_ORG_ENT=data1.PAYS_ORG_ENT;
                                    data.NB_SAL_ENT=data1.NB_SAL_ENT; 
                                    data.DAT_CREA_ENT=data1.DAT_CREA_ENT;
                                    data.DESC_ENT=data1.DESC_ENT;
                                    data.URL_WEB_ENT=data1.URL_WEB_ENT;
                                    data.EMAIL_REC=data1.EMAIL_REC;
                                    data.PSW_REC=Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 8);
                                    data.ADRESSE_ENT=data1.ADRESSE_ENT;
                                    data.VILLE_ENT=data1.VILLE_ENT;
                                    data.COD_POST_ENT=data1.COD_POST_ENT;
                                    data.VALID_ENT=data1.VALID_ENT;
                                    data.X=data1.X;
                                    data.Y=data1.Y;
                                    data.LOGO_ENT=data1.LOGO_ENT;
                                    data.URL_LINK_ENT=data1.URL_LINK_ENT;
                                    data.URL_FB_ENT=data1.URL_FB_ENT;
                                    data.ARCHIV_REC="1";
                                    console.log(data);
                                    var json = JSON.stringify(data);
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("PUT", url, true);
                                    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                                    xhr.onload = function () {
                                    var admins = JSON.parse(xhr.responseText);

                                        if (xhr.readyState == 4 && xhr.status == "200") {
                                        // alert("Confirmation de compte entreprise enregistré");
                                        //location.replace("recruteurEnAttente.html");
                                            Swal.fire({
                                                
                                                title:'Votre compte est supprimer !',
                                                icon:'success',
                                                
                                                
                                                    
                                                }).then((result) => {
                                                    if (result.isConfirmed){
                                                        localStorage.clear();
                                                        location.replace("../index.html");
                                                        event.preventDefault(); 
                                                
                                                    }

                                                })
                                        } else {
                                        console.error(admins);
                                        // location.replace("admins.html");
                                        Swal.fire({
                                                icon:'error',  
                                                title:'Il y a un erreur !',
                                                showConfirmButton:true,
                                                timer:1500
                                                    
                                                
                                                })
                                        }
                                        }
                                        xhr.send(json);
                                    }
                                    request.send(); 
                                                
                                                    }else if (result.isDenied){
                                                            Swal.fire(' Suppression annulée', '', 'info');
                                                    }

                                                })
                        
            }else if (result.isDenied){
Swal.fire(' Suppression annulée', '', 'info');
}
    })

}
//profil 

   document.getElementById("imgNav").src=localStorage.getItem("LOGO_ENT");
   document.getElementById("imgENT").src=localStorage.getItem("LOGO_ENT");
   document.getElementById("nomENT").innerHTML=localStorage.getItem("NOM_ENT");
   document.getElementById("emailREC").innerHTML=localStorage.getItem("EMAIL_REC");
   document.getElementById("emailENT").innerHTML=localStorage.getItem("EMAIL_ENT");

function quiterStorge(){
    localStorage.clear();
    location.replace("../index.html");
}