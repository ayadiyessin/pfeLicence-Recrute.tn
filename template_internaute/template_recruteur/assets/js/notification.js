var nbCand=0;
var m=0;
var nbentr=0;
var nbtt=0;
var nbofftot=0;

var idrec= localStorage.getItem("ID_REC");
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
    console.log(abc);
    
    var requestPrdv = new XMLHttpRequest()

   // Open a new connection, using the GET request on the URL endpoint
   requestPrdv.open('GET', 'http://192.168.43.96:3000/proposerrdvs', true)
   requestPrdv.onload = function()
   {
       // Begin accessing JSON data here
       
       var dataPrdv = JSON.parse(this.response)
       
       
       dataPrdv.forEach(i => {

        var tab = i.updatedAt.split('T');
        if((i.ID_RECRUTEUR == idrec) &&(i.CONF_DATE=="1") ){
            var requestenttr = new XMLHttpRequest()

            // Open a new connection, using the GET request on the URL endpoint
            requestenttr.open('GET', 'http://192.168.43.96:3000/entretiens', true)
            requestenttr.onload = function()
            {
                var dataenttr = JSON.parse(this.response)
                dataenttr.forEach(ienttr => {
                    if(ienttr.ID_PROPOSERRDV == i._id)
                    {
                        var testep =true;
                        var requestpvv = new XMLHttpRequest()

                        // Open a new connection, using the GET request on the URL endpoint
                        requestpvv.open('GET', 'http://192.168.43.96:3000/pvs', true)
                        requestpvv.onload = function()
                        {
                            var datapvv = JSON.parse(this.response)
                            
                            datapvv.forEach(ipvv => {
                                if(ipvv.ID_ENTRETIEN == ienttr._id  )
                                {
                                    testep=false;
                                }
                            })
                            if  (tab[0] == abc && testep==true){
                                m+=1;
                                document.getElementById("nbentretianENatt").innerHTML= m;
                             }

                        }
                        requestpvv.send()
                    }
                })

            }
            requestenttr.send()

              
        }
       })
    }
    requestPrdv.send()
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var requestOFF = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    requestOFF.open('GET', 'http://192.168.43.96:3000/offres', true)
    requestOFF.onload = function()
    {
        // Begin accessing JSON data here
        var dataOFF = JSON.parse(this.response);
        dataOFF.forEach(boff =>{
            if(boff.ARCHV_OFF=="0" && boff.ID_RECRUTEUR==idrec){
                var requestCand = new XMLHttpRequest()
                // Open a new connection, using the GET request on the URL endpoint
                requestCand.open('GET', 'http://192.168.43.96:3000/candidatures', true)
                requestCand.onload = function()
                {
                    // Begin accessing JSON data here
                    
                    var dataCand = JSON.parse(this.response)
                    console.log(dataCand);
                    
                    dataCand.forEach(i => {
                            var tab = i.createdAt.split('T');
                            if(i.ID_OFFRE == boff._id){
                                console.log(abc);
                                console.log(tab);
                                    if(tab[0]==abc){
                                        nbCand+=1;
                                        console.log(nbCand);
                                        document.getElementById("nbCandidat").innerHTML= nbCand;
                                    }
                            }
                    })
                }
                requestCand.send()
            }
        })
    }
    requestOFF.send();

    var requestEntt = new XMLHttpRequest()
    var liste =["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
             
   // Open a new connection, using the GET request on the URL endpoint
    requestEntt.open('GET', 'http://192.168.43.96:3000/entretiens', true)
    requestEntt.onload = function()
    {
       
    // Begin accessing JSON data here
    var dataEntt = JSON.parse(this.response)
    console.log(dataEntt);
    
     dataEntt.forEach(i => { 
         if(i.ARCHV_ENTT=="0"){ 
           var request1 = new XMLHttpRequest()
              // Open a new connection, using the GET request on the URL endpoint
           request1.open('GET', "http://192.168.43.96:3000/proposerRdvs/" +i.ID_PROPOSERRDV , true)
           request1.onload = function()
           {   
                // Begin accessing JSON data here
                var data1 = JSON.parse(this.response)
              
                
            
               if(idrec==data1.ID_RECRUTEUR && data1.CONF_DATE=="1") {
                   if(data1.DATE== abc) {  
                   var request2 = new XMLHttpRequest()
                   // Open a new connection, using the GET request on the URL endpoint
                   request2.open('GET', "http://192.168.43.96:3000/candidatures/" +data1.ID_CANDIDATURE , true)
                   request2.onload = function()
                   {
                      // Begin accessing JSON data here
                   var data2 = JSON.parse(this.response)
                           
                           var request3 = new XMLHttpRequest()
                           // Open a new connection, using the GET request on the URL endpoint
                           request3.open('GET', "http://192.168.43.96:3000/offres/" +data2.ID_OFFRE, true)
                           request3.onload = function()
                           {
                           // Begin accessing JSON data here
                           var data3 = JSON.parse(this.response)
    
                                   var request4 = new XMLHttpRequest()
                                   // Open a new connection, using the GET request on the URL endpoint
                                   request4.open('GET', "http://192.168.43.96:3000/demandeurs/" +data2.ID_DEMANDEUR, true)
                                   request4.onload = function()
                                   {
                                   // Begin accessing JSON data here
                                   var data4 = JSON.parse(this.response)
    
                                   var request5 = new XMLHttpRequest()
                                   // Open a new connection, using the GET request on the URL endpoint
                                   request5.open('GET', "http://192.168.43.96:3000/pvs" , true)
                                   request5.onload = function()
                                   {
                                   // Begin accessing JSON data here
                                   var data5 = JSON.parse(this.response)
                                   var nbn=0;
                                   
                                   console.log(data5);
                                   data5.forEach(k => {   
                                       if((k.ID_DEMANDEUR==data2.ID_DEMANDEUR) && (k.ID_ENTRETIEN==i._id) ){
                                        nbn+=1;
                                       
                                       }
                                        })
                                        console.log(nbn);
                                        if(nbn==0)
                                        {
                                            var datenvsp1 = data1.DATE.split('-');
                                            if(datenvsp1[1]<10){
                                                datenvsp1[1]=datenvsp1[1][1];
                                            }
                                            nbentr+=1;
                                            document.getElementById("nbentretienAujordhui").innerHTML= nbentr;
                                        }
                                }
                                       // Send request
                                       request5.send()
    
                                   }
                                       // Send request
                                       request4.send()
                               
    
    
                           }
                               // Send request
                               request3.send()
    
    
    
                   }
                       // Send request
                       request2.send()}
               
                           
               }
              
                     
           }
              // Send request
           request1.send()
       }
    })
    
    }
    // Send request
    requestEntt.send()

    
    
   
    if ((dateauj.getDate())<10){
        datejour1 = '0'+(dateauj.getDate()+1);
    }else {
        datejour1 = (dateauj.getDate()+1);
    }
      var abcd = dateauj.getFullYear() +'-'+ (datemonth) +'-'+ (datejour1);
      //var abcd = '2022-06-01'
      console.log(abcd);
      var requestnotOFF = new XMLHttpRequest()
        // Open a new connection, using the GET request on the URL endpoint
        requestnotOFF.open('GET', 'http://192.168.43.96:3000/offres', true)
        requestnotOFF.onload = function()
        {
            // Begin accessing JSON data here
            var datanotOFF = JSON.parse(this.response);
            var ee = document.getElementById("listedeoffre");
            console.log(datanotOFF);
            
            datanotOFF.forEach(i => {
                if(idrec==i.ID_RECRUTEUR){
                    if(i.ARCHV_OFF=="0"){  
                        var tab = i.DAT_EXPIRA_OFF;
                        console.log(tab);
                        if(tab==abcd){
                            // var cell6 = row.insertCell(5);
                            ch=`<li class="nav-item">
                                        <a  class="nav-link" onclick="modifierDatOff('`+i._id+`')" >
                                        L'offre `+i.NOM_OFF+` va expirer demain </a>
                                    </li>`;
                            ee.insertAdjacentHTML('beforeend',ch);
                            nbofftot+=1;
                        }
                    }
                }
            })
        }
        // Send request
        requestnotOFF.send()

        const myTimeout = setTimeout(myGreeting, 400);

    function myGreeting() {
        var  nbentr = parseInt(document.getElementById("nbentretianENatt").innerHTML);
        var nbCand = parseInt(document.getElementById("nbCandidat").innerHTML);
        var m = parseInt(document.getElementById("nbentretienAujordhui").innerHTML);
        nbtt = nbentr + nbCand + m + nbofftot;
        document.getElementById("nbtotalhaut").innerHTML= nbtt;
    }

function modifierDatOff(b){
    var request1 = new XMLHttpRequest()
    // Open a new connection, using the GET request on the URL endpoint
    request1.open('GET', "http://192.168.43.96:3000/offres/" +b , true)
    request1.onload = function()
    {
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
    console.log(abc);
    
    // Begin accessing JSON data here
    var data1 = JSON.parse(this.response)
    console.log(data1.DATE<abc);
    console.log(data1.DATE);

    Swal.fire({
        title: "Modifier Date D'expiration De Cette Offre ",
        html: `<input type="date" id="date" class="swal2-input"  min='`+data1.DAT_EXPIRA_OFF+`' value='`+data1.DAT_EXPIRA_OFF+`'>`,
        confirmButtonText: 'Modifier',
        confirmButtonColor: '#17a2b8',
        showCancelButton: true,
        focusConfirm: false,
        
        preConfirm: () => {
            const date = Swal.getPopup().querySelector('#date').value
            
            if (date<abc ){
                    Swal.showValidationMessage(`imposible d'ajouter cette date !!`)


                }
                return { date: date }
        }
        }).then((result) => {
            if (result.isConfirmed) {
            
                var url = "http://192.168.43.96:3000/offres/" +b;
                            
                            var data = {};
                            data.NOM_OFF=data1.NOM_OFF;
                            data.PHOTO_OFF=data1.PHOTO_OFF;
                            data.SEXE_CAND_OFF=data1.SEXE_CAND_OFF;
                            data.DESC_OFF=data1.DESC_OFF;
                            data.MISSION_OFF=data1.MISSION_OFF;
                            data.SAL_MIN_OFF=data1.SAL_MIN_OFF;
                            data.NOM_AVG_OFF=data1.NOM_AVG_OFF; 
                            data.NOM_MC_OFF=data1.NOM_MC_OFF;
                            data.NOM_TE_OFF=data1.NOM_TE_OFF;
                            data.ARCHV_OFF=data1.ARCHV_OFF;
                            data.DAT_EXPIRA_OFF=`${result.value.date}`;
                            data.ID_RECRUTEUR=data1.ID_RECRUTEUR;
                                                                    
                            var json = JSON.stringify(data);
                            var xhr = new XMLHttpRequest();
                            xhr.open("PUT", url, true);
                            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                            xhr.onload = function () {
                              //  var proposerRdvs = JSON.parse(xhr.responseText);
                                if (xhr.readyState == 4 && xhr.status == "200") {
                                    Swal.fire({
                                        title:'Modification enregistré !',
                                        icon:'success',
                                        
                                    }).then((result) => {
                                        if (result.isConfirmed){
                                          location.reload();
                                               
                                        }
                                        
                                    })
                                    
                                } 
                            }
                            xhr.send(json);
                            


                
            }else {
                
                    Swal.fire({
                            icon:'error',  
                            title:'Modification non enregistré !',
                            showConfirmButton:true,
                            timer:1500
                                
                            
                            })
    }

                        
        
        })
    }
    // Send request
    request1.send()

}

    var requestArchOFF = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    requestArchOFF.open('GET', 'http://192.168.43.96:3000/offres', true)
    requestArchOFF.onload = function()
    {
        // Begin accessing JSON data here
        var dataArchOFF = JSON.parse(this.response);
        var idrec= localStorage.getItem("ID_REC");
        console.log(dataArchOFF);
        
        dataArchOFF.forEach(i => {
            if(idrec==i.ID_RECRUTEUR){
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

                if(idrec==data1.ID_RECRUTEUR && data1.CONF_DATE=="1") {
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
