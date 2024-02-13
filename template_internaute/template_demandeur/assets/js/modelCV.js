 var liste =["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
 var c=localStorage.getItem("ID_DEM");
var url3 = "http://192.168.43.96:3000/demandeurs/" + c ;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);
xhr3.onload = function () {
    var data = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
            document.getElementById("photoDEM").src = data.PHOTO_DEM;
            document.getElementById("nompreDEM").innerHTML = data.NOM_DEM + ' '+ data.PRE_DEM;
            document.getElementById("speciaDEM").innerHTML = data.SPES_DEM;
            document.getElementById("sexeDEM").innerHTML = data.SEXE_DEM;
            document.getElementById("paysvilleDEM").innerHTML = data.PAYS_DEM + ', '+ data.VILLE_DEM;
            document.getElementById("adressecopDEM").innerHTML = data.ADRESSE_DEM + ', '+ data.COD_POST_DEM;
            document.getElementById("numtelDEM").innerHTML = data.NUM_TEL_DEM;
            document.getElementById("emailDEM1").innerHTML = data.EMAIL_DEM;
            document.getElementById("emailDEM1").href = "mailto:"+data.EMAIL_DEM;
            document.getElementById("datnaisDEM").innerHTML = data.DAT_NAI_DEM;
            document.getElementById("listprofil").innerHTML = data.DESC_DEM;
            if(data.URL_FB_DEM !=""){
                document.getElementById("urlfbDEM").href = data.URL_FB_DEM;
                document.getElementById("urlfbDEM").innerHTML = data.NOM_DEM + ' '+ data.PRE_DEM;
            }else{
                document.getElementById("urlfbDEM").innerHTML = '    -    ';
            }
            if(data.URL_LINK_DEM !=""){
                document.getElementById("urllinkDEM").href = data.URL_LINK_DEM;
                document.getElementById("urllinkDEM").innerHTML = data.NOM_DEM + '-'+ data.PRE_DEM;
            }else{
                document.getElementById("urllinkDEM").innerHTML = '    -    ';
            }
            if (data.PERMIS_COND_DEM == "1"){
                document.getElementById("permisDEM").innerHTML = 'Permis:';
                document.getElementById("typepermisDEM").innerHTML = data.TYPE_PERMIS_DEM;
            }else{
                document.getElementById("listpermis").innerHTML = 'Pas de permis';
            }
            var request1 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request1.open('GET', "http://192.168.43.96:3000/qualites", true);
            request1.onload = function()
            {
                // Begin accessing JSON data here
                var data1 = JSON.parse(this.response);
                console.log(data1);
                var ee = document.getElementById("qualiteDEM");
                ee.innerHTML="";
                var nb=0;
                data1.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    ch ="<li><span >"+j.NOM_QUA+"</li>";
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb +=1;
                }
                })
                if (nb == 0){
                    var lii = document.createElement("li");
                    lii.innerText = "Pas de qualité";
                    document.getElementById('qualiteDEM').appendChild(lii);
                }
            }
            // Send request
            request1.send();
            var request2 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request2.open('GET', "http://192.168.43.96:3000/languedemandeurs", true);
            request2.onload = function()
            {
                // Begin accessing JSON data here
                var data2 = JSON.parse(this.response);
                console.log(data2);
                var ee = document.getElementById("listlangueDEM");
                ee.innerHTML="";
                var nb=0;
                data2.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    var request3 = new XMLHttpRequest();
                    request3.open('GET', "http://192.168.43.96:3000/langues/"+j.ID_LANGUE, true);
                    request3.onload = function()
                    {
                        var data3 = JSON.parse(this.response);
                        var num=j.NIV_LANG_DEM;
                        if(num==="1"){ 
                                ch = `<li><span >`+data3.NOM_LANG+`</span>  :
                                            <span class="ri-star-s-fill" id="star11"></span>
                                            <span class="ri-star-s-line" id="star22"></span>
                                            <span class="ri-star-s-line" id="star33"></span>
                                            <span class="ri-star-s-line" id="star44"></span>
                                            <span class="ri-star-s-line" id="star55"></span>
                                        </li>    

                                `;
                                ee.insertAdjacentHTML('beforeend',ch);
                        }
                        if(num=="2"){
                        ch = `<li><span >`+data3.NOM_LANG+`</span>  :
                                <span class="ri-star-s-fill" id="star11"></span>
                                <span class="ri-star-s-fill" id="star22"></span>
                                <span class="ri-star-s-line" id="star33"></span>
                                <span class="ri-star-s-line" id="star44"></span>
                                <span class="ri-star-s-line" id="star55"></span>
                                </li>
                                `;
                                ee.insertAdjacentHTML('beforeend',ch);
                        }
                        if(num=="3"){
                        ch = `<li><span >`+data3.NOM_LANG+`</span>  :
                                <span class="ri-star-s-fill" id="star11"></span>
                                <span class="ri-star-s-fill" id="star22"></span>
                                <span class="ri-star-s-fill" id="star33"></span>
                                <span class="ri-star-s-line" id="star44"></span>
                                <span class="ri-star-s-line" id="star55"></span>
                                </li>
                                `;
                                ee.insertAdjacentHTML('beforeend',ch);
                        }
                        if(num=="4"){
                        ch = `<li><span >`+data3.NOM_LANG+`</span>  :
                                <span class="ri-star-s-fill " id="star11"></span>
                                <span class="ri-star-s-fill  " id="star22"></span>
                                <span class="ri-star-s-fill  " id="star33"></span>
                                <span class="ri-star-s-fill " id="star44"></span>
                                <span class="ri-star-s-line" id="star55"></span>
                                </li>
                                `;
                                ee.insertAdjacentHTML('beforeend',ch);
                        }
                        if(num=="5"){
                        ch = `  <li><span >`+data3.NOM_LANG+`</span>  :
                                    <span class="ri-star-s-fill " id="star11"></span>
                                    <span class="ri-star-s-fill " id="star22"></span>
                                    <span class="ri-star-s-fill " id="star33"></span>
                                    <span class="ri-star-s-fill " id="star44"></span>
                                    <span class="ri-star-s-fill " id="star55"></span>
                                </li>
                                `;
                                ee.insertAdjacentHTML('beforeend',ch); 

                        }

                    // ch ="<li><span >"+data3.NOM_LANG+"</span>  :  <span >"+j.NIV_LANG_DEM+"</span></li>";
                    // ee.insertAdjacentHTML('beforeend',ch);    
                    }
                    request3.send();
                    nb +=1;
                }
                })
                if (nb == 0){
                    var lii = document.createElement("li");
                    lii.innerText = "Pas de langue";
                    document.getElementById('listlangueDEM').appendChild(lii);
                }
            }
            request2.send();
            var request4 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request4.open('GET', "http://192.168.43.96:3000/centresinterets", true);
            request4.onload = function()
            {
                // Begin accessing JSON data here
                var data4 = JSON.parse(this.response);
                console.log(data4);
                var nb=0;
                var ee = document.getElementById("centreintDEM");
                ee.innerHTML="";
                data4.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    ch ="<li><span >"+j.NOM_CI+"</li>";
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb +=1;
                }
                })
                if (nb == 0){
                    var lii = document.createElement("li");
                    lii.innerText = "Pas de centre d'interet";
                    document.getElementById('centreintDEM').appendChild(lii);
                }
            }
            // Send request
            request4.send();
               
            var request5 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request5.open('GET', "http://192.168.43.96:3000/experiences", true);
            request5.onload = function()
            {
                // Begin accessing JSON data here
                var data5 = JSON.parse(this.response);
                console.log(data5);
                var ee = document.getElementById("listEXP");
                ee.innerHTML="";
                var nb=0;
                data5.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    var tabDEB = j.DAT_DEB_EXP.split('-');
                    var tabFIN = j.DAT_FIN_EXP.split('-');
                    if(tabDEB[1]<10){
                    tabDEB[1]=tabDEB[1][1];
                    }
                    if(tabFIN[1]<10){
                    tabFIN[1]=tabFIN[1][1];
                    }
                    ch = `<p ><b><i>`+j.TYPE_EXP+`</i></b></p>    
                                    <p >`+j.NOM_ENT_EXP+`  |  `+liste[tabDEB[1]-1]+` `+tabDEB[0]+ ` - `+liste[tabFIN[1]-1]+` `+tabFIN[0]+`</p>
                                    <p >`+j.POSITION_EXP+`</p>
                                    <p >`+j.DESC_EXP+`</p>
                                    <p >`+j.OUTIL_EXP+`</p> `;
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb+=1;
                }
                })
                if (nb == 0){
                    var pp = document.createElement("p");
                    pp.innerText = "Pas d'experience";
                    document.getElementById('listEXP').appendChild(pp);
                }
            }
            // Send request
            request5.send();
            var request6 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request6.open('GET', "http://192.168.43.96:3000/formations", true);
            request6.onload = function()
            {
                // Begin accessing JSON data here
                var data6 = JSON.parse(this.response);
                console.log(data6);
                var ee = document.getElementById("listFOR");
                ee.innerHTML="";
                var nb=0;
                data6.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    var tabDEB = j.DAT_DEB_FOR.split('-');
                    var tabFIN = j.DAT_FIN_FOR.split('-');
                    if(tabDEB[1]<10){
                    tabDEB[1]=tabDEB[1][1];
                    }
                    if(tabFIN[1]<10){
                    tabFIN[1]=tabFIN[1][1];
                    }
                    ch = `<p ><b><i>`+j.NOM_FOR+`</i></b></p>    
                                    <p >`+liste[tabDEB[1]-1]+` `+tabDEB[0]+` - `+liste[tabFIN[1]-1]+` `+tabFIN[0]+`</p>
                                    <p >`+j.DESC_FOR+`</p> `;
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb+=1;
                }
                })
                if (nb == 0){
                    var pp = document.createElement("p");
                    pp.innerText = "Pas de formation";
                    document.getElementById('listFOR').appendChild(pp);
                }
            }
            // Send request
            request6.send();
            var request7 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request7.open('GET', "http://192.168.43.96:3000/certifications", true);
            request7.onload = function()
            {
                // Begin accessing JSON data here
                var data7 = JSON.parse(this.response);
                console.log(data7);
                var ee = document.getElementById("listCERT");
                ee.innerHTML="";
                var nb=0;
                data7.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    ch = `<p ><b><i>`+j.NOM_CERT+`</i></b></p>    
                                    <p >`+j.REF_CERT+`</p>
                                    <p >`+j.DESC_CERT+`</p> `;
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb+=1;
                }
                })
                if (nb == 0){
                    var pp = document.createElement("p");
                    pp.innerText = "Pas de certificat";
                    document.getElementById('listCERT').appendChild(pp);
                }
            }
            // Send request
            request7.send();
            var request8 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request8.open('GET', "http://192.168.43.96:3000/projets", true);
            request8.onload = function()
            {
                // Begin accessing JSON data here
                var data8 = JSON.parse(this.response);
                console.log(data8);
                var ee = document.getElementById("listPROJ");
                ee.innerHTML="";
                var nb=0;
                data8.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    var tabDEB = j.DAT_DEB_PROJ.split('-');
                    var tabFIN = j.DAT_FIN_PROJ.split('-');
                    if(tabDEB[1]<10){
                    tabDEB[1]=tabDEB[1][1];
                    }
                    if(tabFIN[1]<10){
                    tabFIN[1]=tabFIN[1][1];
                    }
                    ch = `<p ><b><i>`+j.NOM_PROJ+`</i></b></p> 
                                    <p >`+j.TYPE_PROJ+`</p>   
                                    <p >`+liste[tabDEB[1]-1]+` `+tabDEB[0]+` - `+liste[tabFIN[1]-1]+` `+tabFIN[0]+`</p>
                                    <p >`+j.DESC_PROJ+`</p>
                                    <p >`+j.OUTIL_PROJ+`</p> `;
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb+=1;
                }
                })
                if (nb == 0){
                    var pp = document.createElement("p");
                    pp.innerText = "Pas de projet";
                    document.getElementById('listPROJ').appendChild(pp);
                }
            }
            // Send request
            request8.send();
            var request9 = new XMLHttpRequest();
            // Open a new connection, using the GET request on the URL endpoint
            request9.open('GET', "http://192.168.43.96:3000/vieassociatives", true);
            request9.onload = function()
            {
                // Begin accessing JSON data here
                var data9 = JSON.parse(this.response);
                console.log(data9);
                var ee = document.getElementById("listVA");
                ee.innerHTML="";
                var nb=0;
                data9.forEach(j => {
                if(j.ID_DEMANDEUR==c){
                    var tabDEB = j.DAT_DEB_VA.split('-');
                    var tabFIN = j.DAT_FIN_VA.split('-');
                    if(tabDEB[1]<10){
                    tabDEB[1]=tabDEB[1][1];
                    }
                    if(tabFIN[1]<10){
                    tabFIN[1]=tabFIN[1][1];
                    }
                    ch = `<p ><b><i>`+j.NOM_VA+`</i></b></p>  
                                <p >`+j.POSITION_VA+`  |  `+liste[tabDEB[1]-1]+` `+tabDEB[0]+` - `+liste[tabFIN[1]-1]+` `+tabFIN[0]+`</p>`;
                    ee.insertAdjacentHTML('beforeend',ch);
                    nb+=1;
                    }
                })
                if (nb == 0){
                    var pp = document.createElement("p");
                    pp.innerText = "Pas de vie associative";
                    document.getElementById('listVA').appendChild(pp);
                }
            }
            // Send request
            request9.send();
            var request10 = new XMLHttpRequest();
                      // Open a new connection, using the GET request on the URL endpoint
                      request10.open('GET', "http://192.168.43.96:3000/competencedemandeurs", true);
                      request10.onload = function()
                      {
                        // Begin accessing JSON data here
                        var data10 = JSON.parse(this.response);
                        console.log(data10);
                        /*var ee1 = document.getElementById("listCOMP1");
                        ee1.innerHTML="";
                        var nbee1=0;
                        var ee2 = document.getElementById("listCOMP2");
                        ee2.innerHTML="";
                        var nbee2=0;*/
                        var ee = document.getElementById("pasCOMP");
                        ee.innerHTML="";
                        var nb=0;
                        var ull = document.createElement("ul");
                        ull.id="listCOMP";
                        ee.appendChild(ull);
                        var eeul = document.getElementById("listCOMP");
                        eeul.innerHTML="";
                        data10.forEach(j => {
                          if(j.ID_DEMANDEUR==c){
                              var request11 = new XMLHttpRequest();
                              request11.open('GET', "http://192.168.43.96:3000/competences/"+j.ID_COMPETENCE, true);
                              request11.onload = function()
                              {
                                var data11 = JSON.parse(this.response);
                              // ch ="<li><span >"+data11.NOM_COMP+"</span>  :  <span >"+j.NIV_COMP_DEM+"</span></li>";
                              var num=j.NIV_COMP_DEM;
                              if(num==="1"){ 
                                ch = `<li><span >`+data11.NOM_COMP+`</span>  :
                                            <span class="ri-star-s-fill" id="star11"></span>
                                            <span class="ri-star-s-line" id="star22"></span>
                                            <span class="ri-star-s-line" id="star33"></span>
                                            <span class="ri-star-s-line" id="star44"></span>
                                            <span class="ri-star-s-line" id="star55"></span>
                                        </li>    

                                `;
                                ee.insertAdjacentHTML('beforeend',ch);
                                }
                                if(num=="2"){
                                ch = `<li><span >`+data11.NOM_COMP+`</span>  :
                                        <span class="ri-star-s-fill" id="star11"></span>
                                        <span class="ri-star-s-fill" id="star22"></span>
                                        <span class="ri-star-s-line" id="star33"></span>
                                        <span class="ri-star-s-line" id="star44"></span>
                                        <span class="ri-star-s-line" id="star55"></span>
                                        </li>
                                        `;
                                        ee.insertAdjacentHTML('beforeend',ch);
                                }
                                if(num=="3"){
                                ch = `<li><span >`+data11.NOM_COMP+`</span>  :
                                        <span class="ri-star-s-fill" id="star11"></span>
                                        <span class="ri-star-s-fill" id="star22"></span>
                                        <span class="ri-star-s-fill" id="star33"></span>
                                        <span class="ri-star-s-line" id="star44"></span>
                                        <span class="ri-star-s-line" id="star55"></span>
                                        </li>
                                        `;
                                        ee.insertAdjacentHTML('beforeend',ch);
                                }
                                if(num=="4"){
                                ch = `<li><span >`+data11.NOM_COMP+`</span>  :
                                        <span class="ri-star-s-fill " id="star11"></span>
                                        <span class="ri-star-s-fill  " id="star22"></span>
                                        <span class="ri-star-s-fill  " id="star33"></span>
                                        <span class="ri-star-s-fill " id="star44"></span>
                                        <span class="ri-star-s-line" id="star55"></span>
                                        </li>
                                        `;
                                        ee.insertAdjacentHTML('beforeend',ch);
                                }
                                if(num=="5"){
                                ch = `  <li><span >`+data11.NOM_COMP+`</span>  :
                                            <span class="ri-star-s-fill " id="star11"></span>
                                            <span class="ri-star-s-fill " id="star22"></span>
                                            <span class="ri-star-s-fill " id="star33"></span>
                                            <span class="ri-star-s-fill " id="star44"></span>
                                            <span class="ri-star-s-fill " id="star55"></span>
                                        </li>
                                        `;
                                        ee.insertAdjacentHTML('beforeend',ch); 

                                }
  
                              }
                              request11.send();
                              nb +=1;
                          }
                        })
                        if (nb == 0){
                            var pp = document.createElement("p");
                            pp.innerText = "Pas de compétence";
                            ee.appendChild(pp);
                        }
                  }
                  request10.send();
                var request12 = new XMLHttpRequest();
                    // Open a new connection, using the GET request on the URL endpoint
                    request12.open('GET', "http://192.168.43.96:3000/diplomedemandeurs", true);
                    request12.onload = function()
                    {
                        // Begin accessing JSON data here
                        var data12 = JSON.parse(this.response);
                        console.log(data12);
                        var ee = document.getElementById("listDIP");
                        ee.innerHTML="";
                        var nb=0;
                        data12.forEach(j => {
                        if(j.ID_DEMANDEUR==c){
                            var tabDEB = j.DAT_DEB_DIP.split('-');
                            var tabFIN = j.DAT_FIN_DIP.split('-');
                            if(tabDEB[1]<10){
                            tabDEB[1]=tabDEB[1][1];
                            }
                            if(tabFIN[1]<10){
                            tabFIN[1]=tabFIN[1][1];
                            }
                            var request13 = new XMLHttpRequest();
                            request13.open('GET', "http://192.168.43.96:3000/diplomes/"+j.ID_DIPLOME, true);
                            request13.onload = function()
                            {
                                var data13 = JSON.parse(this.response);
                                ch = `<p ><b><i>`+data13.TYPE_DIP+`</i></b></p>    
                                            <p >`+j.NOM_ECOL_DIP+`  |  `+liste[tabDEB[1]-1]+` `+tabDEB[0]+` - `+liste[tabFIN[1]-1]+` `+tabFIN[0]+`</p>
                                            <p >`+j.SPECIA_DIP+`</p> `;
                                ee.insertAdjacentHTML('beforeend',ch);  
                            }
                            request13.send();
                            nb +=1;
                        }
                        })
                        if (nb == 0){
                            var pp = document.createElement("p");
                            pp.innerText = "Pas de diplôme";
                            document.getElementById('listDIP').appendChild(pp);
                        }
                }
                request12.send();
            } else {
                console.log("error");
            }
            }
            xhr3.send(null);
 // pdf 
 function generate() {
    var doc = new jsPDF();
    doc.fromHTML(document.querySelector('#cv'), 15, 15, {
      'width': 500,
      'elementHandlers': function() {
        return true;
      }
    });
    doc.save('CV.pdf');
  }      