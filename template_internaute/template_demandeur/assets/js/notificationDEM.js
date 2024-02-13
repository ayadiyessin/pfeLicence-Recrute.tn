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
var nbNOTmessage =0 ;
var nbNOTentretienAUJ =0 ;
var nbNOTentretienNONConf = 0 ;

//message -***********
var requestmess = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
requestmess.open('GET', 'http://192.168.43.96:3000/messages', true)
requestmess.onload = function()
{
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
   
    data.forEach(i => {
       if(i.ID_DEMANDEUR == idDEM)
       {
            var request2 = new XMLHttpRequest()
            // Open a new connection, using the GET request on the URL endpoint
            request2.open('GET', "http://192.168.43.96:3000/recruteurs/"+i.ID_RECRUTEUR, true)
            request2.onload = function()
            {
                // Begin accessing JSON data here
                var data2 = JSON.parse(this.response)
                var tab111 = i.createdAt.split('T');
      
                if(i.ID_RECRUTEUR == data2._id && data2.ARCHIV_REC =="0" && tab111[0] == abc )
               {
                   nbNOTmessage+=1; 
                
                document.getElementById("nbCandidatmes").innerHTML = nbNOTmessage;
               }
            }
            // Send request
            request2.send()
       }
    })
}
// Send request
requestmess.send()

// entretien aujord hui -******
var requestentatt = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
requestentatt.open('GET', 'http://192.168.43.96:3000/candidatures', true)
requestentatt.onload = function()
{
    // Begin accessing JSON data here
    var data55 = JSON.parse(this.response);

    data55.forEach(i => {
        if(i.ID_DEMANDEUR == idDEM)
        {
           var idli=i._id +1;
            var request2 = new XMLHttpRequest()
            // Open a new connection, using the GET request on the URL endpoint
            request2.open('GET', "http://192.168.43.96:3000/offres/"+i.ID_OFFRE, true)
            request2.onload = function()
            {
                // Begin accessing JSON data here
                var data2 = JSON.parse(this.response)
                var request3 = new XMLHttpRequest()
                // Open a new connection, using the GET request on the URL endpoint
                request3.open('GET', "http://192.168.43.96:3000/recruteurs/"+data2.ID_RECRUTEUR, true)
                request3.onload = function()
                {
                    // Begin accessing JSON data here
                    var data3 = JSON.parse(this.response)
                    var ee = document.getElementById("listOFFERPostilerENattant");
                    var request14 = new XMLHttpRequest();
                   request14.open('GET', "http://192.168.43.96:3000/tests", true);
                   request14.onload = function() {
                       var data14 = JSON.parse(this.response);
                       console.log(data14);
                       data14.forEach(k => {
                           if (k.ID_OFFRE==data2._id){
                               var request15 = new XMLHttpRequest();
                               request15.open('GET', "http://192.168.43.96:3000/scores", true);
                               request15.onload = function() {
                                   var data15 = JSON.parse(this.response);
                                   console.log(data15);
                                   data15.forEach(h => {
                                       if ((h.ID_TEST==k._id)&&(h.ID_DEMANDEUR==idDEM)){
                                          
                                               
                                               var tab0 = i.createdAt.split('T');
                                               var datenvsp1 = tab0[0].split('-');
                                               if(datenvsp1[1]<10){
                                                   datenvsp1[1]=datenvsp1[1][1];
                                               }
                                                   if((data3.ARCHIV_REC =="0")&& (Object.entries(data2).length>1) )
                                                   {
                                                       var request11 = new XMLHttpRequest()
                                                       // Open a new connection, using the GET request on the URL endpoint
                                                       request11.open('GET', 'http://192.168.43.96:3000/proposerRdvs', true)
                                                       request11.onload = function()
                                                       {
                                                           var data11 = JSON.parse(this.response);
                                                           console.log(data11);
                                                          
                                                           
                                                           
                                                           var idproposRDV="" ;
                                                           var datepro="";
                                                           var heurpro ="";
                                                           data11.sort(function (a,b){
                                                               a = new Date(a.DATE);
                                                               b = new Date(b.DATE);
                                                               
                                                               return a> b ? 1 : a<b ? -1 :0;
                                                           })
                                                           data11.forEach(ifa => {
                                                               if((ifa.ID_RECRUTEUR == data3._id) && (ifa.ID_CANDIDATURE == i._id)&&(ifa.CONF_DATE=="1"))
                                                               {
                                                                   
                                                                   idproposRDV=ifa._id;
                                                                   datepro=ifa.DATE;
                                                                   heurpro =ifa.HEURE;   
                                                                   
                                                               }
                                                           })
                                                          
                                                           console.log(idproposRDV);
                                                           
                                                           var request12 = new XMLHttpRequest()
                                                           // Open a new connection, using the GET request on the URL endpoint
                                                           request12.open('GET', 'http://192.168.43.96:3000/entretiens', true)
                                                           request12.onload = function()
                                                           {
                                                               var data12 = JSON.parse(this.response);
                                                               var  datepro1=datepro.split("-");
                                                               if(datepro1[1]<10){
                                                                   datepro1[1]=datepro1[1][1];
                                                               }
                                                               data12.forEach(ient => {
                                                               
                                                                   if(ient.ARCHV_ENTT =="0" && ient.ID_PROPOSERRDV == idproposRDV && datepro == abc)
                                                                   {
                                                                        nbNOTentretienAUJ+=1;
                                                                       document.getElementById("nbentretienAujordhui").innerHTML=nbNOTentretienAUJ;
                                                                    
                                                           
                                                                   }
                                                               })
                                                           }
                                                       request12.send()
                                                           
                                                            
                                                       }
                                                       request11.send()
                                                       
                                               }
                                           
                                       }

                                   })
                               }
                               request15.send();
                           }
                       })
                   }
                   // Send request
                   request14.send()
                }
                // Send request
                request3.send()

            }
            // Send request
            request2.send()
        }
    })
    
   
}
// Send request
requestentatt.send()

// confirme enretien -*****
var requestcand = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
requestcand.open('GET', 'http://192.168.43.96:3000/candidatures', true)
requestcand.onload = function()
{
    // Begin accessing JSON data here
    var data88 = JSON.parse(this.response);
    var datecreationprop ;
    data88.forEach(i => {
        if(i.ID_DEMANDEUR == idDEM)
        {
        var idli=i._id +1;
            var request2 = new XMLHttpRequest()
            // Open a new connection, using the GET request on the URL endpoint
            request2.open('GET', "http://192.168.43.96:3000/offres/"+i.ID_OFFRE, true)
            request2.onload = function()
            {
                // Begin accessing JSON data here
                var data2 = JSON.parse(this.response)
                var request3 = new XMLHttpRequest()
                // Open a new connection, using the GET request on the URL endpoint
                request3.open('GET', "http://192.168.43.96:3000/recruteurs/"+data2.ID_RECRUTEUR, true)
                request3.onload = function()
                {
                    // Begin accessing JSON data here
                    var data3 = JSON.parse(this.response)
                    var ee = document.getElementById("listConfirmeEntretiens");
                    var request14 = new XMLHttpRequest();
                    request14.open('GET', "http://192.168.43.96:3000/tests", true);
                    request14.onload = function() {
                    var data14 = JSON.parse(this.response);
                    console.log(data14);
                    data14.forEach(k => {
                        if (k.ID_OFFRE==data2._id){
                            var request15 = new XMLHttpRequest();
                            request15.open('GET', "http://192.168.43.96:3000/scores", true);
                            request15.onload = function() {
                                var data15 = JSON.parse(this.response);
                                console.log(data15);
                                data15.forEach(h => {
                                    if ((h.ID_TEST==k._id)&&(h.ID_DEMANDEUR==idDEM)){
                                        
                                            
                                            var tab9 = i.createdAt.split('T');
                                            var datenvsp1 = tab9[0].split('-');
                                            if(datenvsp1[1]<10){
                                                datenvsp1[1]=datenvsp1[1][1];
                                            }
                                                if((data3.ARCHIV_REC =="0")&& (Object.entries(data2).length>1) )
                                                {
                                                    var request11 = new XMLHttpRequest()
                                                    // Open a new connection, using the GET request on the URL endpoint
                                                    request11.open('GET', 'http://192.168.43.96:3000/proposerRdvs', true)
                                                    request11.onload = function()
                                                    {
                                                        var data11 = JSON.parse(this.response);
                                                        console.log(data11);
                                                        data11.sort(function (a,b){
                                                            a = new Date(a.DATE);
                                                            b = new Date(b.DATE);
                                                            
                                                            return a> b ? 1 : a<b ? -1 :0;
                                                        })
                                                        
                                                        var listedate=[];
                                                        var testdt0=0 ;
                                                        data11.forEach(ifa => {
                                                            if((ifa.ID_RECRUTEUR == data3._id) && (ifa.ID_CANDIDATURE == i._id))
                                                            {
                                                                var dateheur=[ifa.DATE , ifa.HEURE ];
                                                                datecreationprop = ifa.createdAt;
                                                                listedate.push.apply(listedate, dateheur);
                                                                if(ifa.CONF_DATE=="1")
                                                                {
                                                                    testdt0+=1;

                                                                    
                                                                }
                                                            }
                                                        })
                                                            console.log(datecreationprop);
                                                            
                                                            console.log(abc);
                                                            tab11=datecreationprop.split("T");    
                                                            console.log(tab11[0]);
                                                        if(testdt0==0 && listedate[12]>=abc && tab11[0]==abc )
                                                        {
                                                            
                                                            nbNOTentretienNONConf+=1;
                                                            document.getElementById("nbentretienNONCON").innerHTML=nbNOTentretienNONConf;
                                                        }  
                                                    }
                                                    request11.send()
                                                
                                            }
                                        
                                    }

                                })
                            }
                            request15.send();
                        }
                    })
                }
                // Send request
                request14.send()
                }
                // Send request
                request3.send()

            }
            // Send request
            request2.send()
        }
    })
    

}
// Send request
requestcand.send()
const myTimeout = setTimeout(myGreeting, 200);

function myGreeting() {
    var nbentr = parseInt(document.getElementById("nbCandidatmes").innerHTML);
    var nbCand = parseInt(document.getElementById("nbentretienAujordhui").innerHTML);
    var m = parseInt(document.getElementById("nbentretienNONCON").innerHTML);
    nbtt = nbentr + m + nbCand ;
    document.getElementById("nbtotalhaut").innerHTML= nbtt;
}
