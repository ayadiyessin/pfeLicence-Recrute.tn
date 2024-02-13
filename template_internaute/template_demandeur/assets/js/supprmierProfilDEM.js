var idDEM=localStorage.getItem("ID_DEM");
var dateauj = new Date();
var datemonth = '';
if ((dateauj.getMonth()+1)<10){
  datemonth = '0'+(dateauj.getMonth()+1);
}else {
  datemonth = (dateauj.getMonth()+1);
}
if ((dateauj.getDate())<10){
    datejour = '0'+(dateauj.getDate());
    }else {
        datejour = (dateauj.getDate());
    }
    
    
    var abc = dateauj.getFullYear() +'-'+ (datemonth) +'-'+ (datejour);

var requestArchOFF = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
requestArchOFF.open('GET', 'http://192.168.43.96:3000/offres', true)
requestArchOFF.onload = function()
{
    // Begin accessing JSON data here
    var dataArchOFF = JSON.parse(this.response);
    
    console.log(dataArchOFF);
    
    dataArchOFF.forEach(i => {

            if(i.ARCHV_OFF=="0" && i.DAT_EXPIRA_OFF<abc){   
                var url3 = "http://192.168.43.96:3000/offres/" + i._id ;
                data2={};
                data2.NOM_OFF = i.NOM_OFF;
                data2.PHOTO_OFF = i.PHOTO_OFF;
                data2.SEXE_CAND_OFF = i.SEXE_CAND_OFF;
                data2.DESC_OFF = i.DESC_OFF;
                data2.MISSION_OFF = i.MISSION_OFF;
                data2.SAL_MIN_OFF = i.SAL_MIN_OFF;
                data2.NOM_AVG_OFF = i.NOM_AVG_OFF;
                data2.NOM_MC_OFF = i.NOM_MC_OFF;
                data2.NOM_TE_OFF = i.NOM_TE_OFF;
                data2.ARCHV_OFF   = "1";
                data2.DAT_EXPIRA_OFF = i.DAT_EXPIRA_OFF;
                data2.ID_RECRUTEUR = i.ID_RECRUTEUR;
                console.log(data2);
                var json = JSON.stringify(data2);
                var xhr3 = new XMLHttpRequest();
                xhr3.open("PUT", url3, true);
                xhr3.setRequestHeader('Content-type','application/json; charset=utf-8');
                xhr3.onload = function () {
                    if (xhr3.readyState == 4 && xhr3.status == "200") {
                        console.log("ok");
                    }
                }
                xhr3.send(json);
            }
        
    })
}
requestArchOFF.send();


var requestEn = new XMLHttpRequest()
requestEn.open('GET', 'http://192.168.43.96:3000/entretiens', true)
requestEn.onload = function()
{
    
    // Begin accessing JSON data here
    var dataEn = JSON.parse(this.response);
    dataEn.forEach(i => { 
        var requestprdvEnt = new XMLHttpRequest()
        // Open a new connection, using the GET request on the URL endpoint
        requestprdvEnt.open('GET', "http://192.168.43.96:3000/proposerRdvs/" +i.ID_PROPOSERRDV , true)
        requestprdvEnt.onload = function()
        {   
            // Begin accessing JSON data here
            var data1 = JSON.parse(this.response)

            if( data1.CONF_DATE=="1") {
                if(data1.DATE< abc){

                        var url2 = "http://192.168.43.96:3000/entretiens/" + i._id ;
                        data8={};
                        data8.ARCHV_ENTT   = "1";
                        data8.ID_PROPOSERRDV = i.ID_PROPOSERRDV;
                        console.log(data8);
                        var json = JSON.stringify(data8);
                        var xhr2 = new XMLHttpRequest();
                        xhr2.open("PUT", url2, true);
                        xhr2.setRequestHeader('Content-type','application/json; charset=utf-8');
                        xhr2.onload = function () {
                            if (xhr2.readyState == 4 && xhr2.status == "200") {
                            //alert("Admins Updated!");
                            // location.replace("admins.html");
                        } else {
                            console.error(admins);
                            //alert("Admins Updated!");
                            //location.replace("admins.html");
                        }
                        }
                        xhr2.send(json);
            }
            }
        }
        requestprdvEnt.send();
    })
}
requestEn.send();

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

                                    
                                     

                                        request.open('GET', 'http://192.168.43.96:3000/demandeurs/'+idDEM, true)
            
                                        request.onload = function() {
                                      // Begin accessing JSON data here
                                      var data = JSON.parse(this.response)
                                      console.log(data);
                                      var url3 = "http://192.168.43.96:3000/demandeurs/" +idDEM ;
                                      var data2={};
                                      data2.PHOTO_DEM = data.PHOTO_DEM;
                                      data2.EMAIL_DEM = data.EMAIL_DEM;
                                      data2.PSW_DEM =Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 8);
                                      data2.NOM_DEM = data.NOM_DEM;
                                      data2.PRE_DEM = data.PRE_DEM;
                                      data2.SEXE_DEM = data.SEXE_DEM;
                                      data2.DAT_NAI_DEM = data.DAT_NAI_DEM;
                                      data2.VILLE_DEM = data.VILLE_DEM;
                                      data2.PAYS_DEM = data.PAYS_DEM;
                                      data2.ADRESSE_DEM = data.ADRESSE_DEM;
                                      data2.NUM_TEL_DEM = data.NUM_TEL_DEM;
                                      data2.COD_POST_DEM = data.COD_POST_DEM;
                                      data2.PERMIS_COND_DEM = data.PERMIS_COND_DEM;
                                      data2.TYPE_PERMIS_DEM = data.TYPE_PERMIS_DEM;
                                      data2.SAL_MIN_DEM = data.SAL_MIN_DEM;
                                      data2.URL_LINK_DEM = data.URL_LINK_DEM;
                                      data2.DESC_DEM = data.DESC_DEM;
                                      data2.SPES_DEM = data.SPES_DEM;
                                      data2.ARCHIV_DEM = "1";
                                      data2.URL_FB_DEM = data.URL_FB_DEM;
                                      console.log(data2);
                                      var json = JSON.stringify(data2);
                                      var xhr3 = new XMLHttpRequest();
                                      xhr3.open("PUT", url3, true);
                                      xhr3.setRequestHeader('Content-type','application/json; charset=utf-8');
                                      xhr3.onload = function () {

                                        if (xhr3.readyState == 4 && xhr3.status == "200") {
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
                                        xhr3.send(json);
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

document.getElementById("imgNav").src=localStorage.getItem("PHOTO_DEM");
document.getElementById("imgDEM").src=localStorage.getItem("PHOTO_DEM");
document.getElementById("nomDEM").innerHTML=localStorage.getItem("Username_DEM");
document.getElementById("emailDEM").innerHTML=localStorage.getItem("EMAIL_DEM");


function quiterStorge(){
 localStorage.clear();
 location.replace("../index.html");
}