var idrec=localStorage.getItem("ID_REC");
var url_string = window.location.href ;
var url = new URL(url_string); 
var idcond = url.searchParams.get("idcond");
    function propRDV(){
        var dateauj = new Date();
        var datemonth = '';
        var datejour='';
        if ((dateauj.getMonth()+1)<10){
        datemonth = '0'+(dateauj.getMonth()+1);
        }else {
        datemonth = (dateauj.getMonth()+1);
        }
        if ((dateauj.getDate()+7)<10){
            datejour = '0'+(dateauj.getDate()+7);
        }else {
            datejour = (dateauj.getDate()+7);
        }
        var abc = dateauj.getFullYear() +'-'+ (datemonth) +'-'+ (datejour);
       console.log(abc);
       var request13 = new XMLHttpRequest();
        request13.open('GET', "http://192.168.43.96:3000/proposerrdvs", true);
        request13.onload = function()
        {
            var data13 = JSON.parse(this.response);
            data13.forEach(i => {
                if(i.ID_RECRUTEUR==idrec && i.ID_CANDIDATURE==idcond){
                    Swal.fire("c'est déjà fait !")

                }else{
                    ch=`      <div class="col-xl-2 col-lg-12 col-md-12"></div>
                            <div class="col-xl-8 col-lg-12 col-md-12">
                                <div class="change-password-box">
                                    <h3>Proposer rendez-vous</h3>
        
                                    <form onsubmit="return false" id="formcontact">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Première Date </label>
                                                    <input name="DATCREAENT" id="DAT_1" type="date" min="`+abc+`" value="`+abc+`" class="form-control">
                                                </div>
                                            </div>
        
                                            <div class="col-lg-12 col-md-6">
                                                <div class="row">
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label>Première proposition</label>
                                                            <input name="HEUR1" id="DAT1P1" type="time" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Deuxième proposition</label>
                                                                <input name="HEUR2" id="DAT1P2" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>La troisième proposition</label>
                                                                <input name="HEUR3" id="DAT1P3" onchange="date2();" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
        
                                            
                                        </div>
                                        <div class="row" id="date2">
                                         </div> 
                                         <div class="row" id="date3">
                                         </div>
                                    </form>
                                </div>
                            </div>`;
        document.getElementById("horairesRDV").innerHTML=ch;
                }
            })

        }
        request13.send();
      

    }
    function date2(){
        var d1=document.getElementById("DAT_1").value;
        tab=d1.split('-');
        abc = tab[0]+'-'+tab[1]+'-'+tab[2][0]+""+(parseInt(tab[2][1])+1) ;
        console.log(abc);
        

        ch=`                                <div class="col-lg-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Deuxième Date</label>
                                                    <input name="DATCREAENT" id="DAT_2" min="`+abc+`" value="`+abc+`" type="date" class="form-control">
                                                </div>
                                            </div>
        
                                            <div class="col-lg-12 col-md-6">
                                                <div class="row">
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label>Première proposition</label>
                                                            <input name="HEUR4" id="DAT2P1" type="time" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Deuxième proposition</label>
                                                                <input name="HEUR5" id="DAT2P2" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>La troisième proposition</label>
                                                                <input name="HEUR5" id="DAT2P3" onchange="date3();" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            

            `;
            document.getElementById("date2").innerHTML=ch;

    }
    function date3(){
        var d1=document.getElementById("DAT_2").value;
        tab=d1.split('-');
        
        abc = tab[0]+'-'+tab[1]+'-'+tab[2][0]+""+(parseInt(tab[2][1])+1) ;
        dd=abc.split('-');
        console.log(dd[2].length);
        if( dd[2].length==3){
            abc=dd[0]+'-'+dd[1]+'-'+dd[2][1]+""+dd[2][2];
            console.log(abc);
        }
        
        console.log(abc);
        ch=`                                                    <div class="col-lg-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Troisième Date</label>
                                                    <input  name="DATCREAENT" min="`+abc+`" value="`+abc+`" id="DAT_3" type="date" class="form-control">
                                                </div>
                                            </div>
        
                                            <div class="col-lg-12 col-md-6">
                                                <div class="row">
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <label>Première proposition</label>
                                                            <input name="HEUR6" id="DAT3P1" type="time" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Deuxième proposition</label>
                                                                <input name="HEUR7" id="DAT3P2" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>La troisième proposition</label>
                                                                <input name="HEUR8" id="DAT3P3" type="time" class="form-control">
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
        
                                            
                                            <div class="col-lg-12 col-md-12">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                    <button type="button" class="default-btn" onclick="annuler();" >Annuler <i class="flaticon-send"></i></button>
                                                    <br>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <button type="submit" onclick="valider();" class="default-btn"  >Envoyer <i class="flaticon-send"></i></button>
                                                    </div>
                                                </div>
                                            </div>`;
                                            document.getElementById("date3").innerHTML=ch;                                                    
    }

function valider() {

$.validator.setDefaults({
submitHandler: function () {

var url = "http://192.168.43.96:3000/proposerrdvs";
 var DAT1P1=document.getElementById("DAT1P1").value;
 var DAT1P2=document.getElementById("DAT1P2").value;
 var DAT1P3=document.getElementById("DAT1P3").value;
 var DAT2P1=document.getElementById("DAT2P1").value;
 var DAT2P2=document.getElementById("DAT2P2").value;
 var DAT2P3=document.getElementById("DAT2P3").value;
 var DAT3P1=document.getElementById("DAT3P1").value;
 var DAT3P2=document.getElementById("DAT3P2").value;
 var DAT3P3=document.getElementById("DAT3P3").value;
 var d1p11=DAT1P1.split(':');
 var d1p12=DAT1P2.split(':');
 var d1p13=DAT1P3.split(':');
 var d2p11=DAT2P1.split(':');
 var d2p12=DAT2P2.split(':');
 var d2p13=DAT2P3.split(':');
 var d3p11=DAT3P1.split(':');
 var d3p12=DAT3P2.split(':');
 var d3p13=DAT3P3.split(':');
console.log(d1p11[0]);


if(((d1p11[0] != d1p12[0]) && (d1p11[0] != d1p13[0]) && (d1p12[0] != d1p13[0]) ) && ((d2p11[0] != d2p12[0]) && (d2p11[0] != d2p13[0]) && (d2p12[0] != d2p13[0]) ) && ((d3p11[0] != d3p12[0]) &&(d3p12[0] != d3p13[0]) && (d3p11[0] != d3p13[0])  )){
    console.log("aaa");
Swal.fire({
    title: 'Vous souhaitez enregistrer ces dates ?',
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#17a2b8',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Enregistrer'
}).then((result) => {
  if (result.isConfirmed) {

    var data = {};
    data.DATE=document.getElementById("DAT_1").value;
    data.HEURE=document.getElementById("DAT1P1").value;
    data.CONF_DATE="0";
    data.ID_RECRUTEUR=idrec;
    data.ID_CANDIDATURE=idcond;
   console.log(data);

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins1= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
        
          
        } else {
            Swal.fire('Date Non Envoyer')
            console.table(admins1);
        }
    }
    xhr.send(json);

    var data1 = {};
    data1.DATE=document.getElementById("DAT_1").value;
    data1.HEURE=document.getElementById("DAT1P2").value;
    data1.CONF_DATE="0";
    data1.ID_RECRUTEUR=idrec;
    data1.ID_CANDIDATURE=idcond;
   console.log(data1);

    var json = JSON.stringify(data1);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins2= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
        
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins2);
        } 
    }
    xhr.send(json);
    var data2 = {};
    data2.DATE=document.getElementById("DAT_1").value;
    data2.HEURE=document.getElementById("DAT1P3").value;
    data2.CONF_DATE="0";
    data2.ID_RECRUTEUR=idrec;
    data2.ID_CANDIDATURE=idcond;
   console.log(data2);

    var json = JSON.stringify(data2);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins3= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins3);
        } 
    }
    xhr.send(json);
    var data3 = {};
    data3.DATE=document.getElementById("DAT_2").value;
    data3.HEURE=document.getElementById("DAT2P1").value;
    data3.CONF_DATE="0";
    data3.ID_RECRUTEUR=idrec;
    data3.ID_CANDIDATURE=idcond;
   console.log(data3);

    var json = JSON.stringify(data3);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins4= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins4);
        } 
    }
    xhr.send(json);

    var data4 = {};
    data4.DATE=document.getElementById("DAT_2").value;
    data4.HEURE=document.getElementById("DAT2P2").value;
    data4.CONF_DATE="0";
    data4.ID_RECRUTEUR=idrec;
    data4.ID_CANDIDATURE=idcond;
   console.log(data4);

    var json = JSON.stringify(data4);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins5= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins5);
        }
    }
    xhr.send(json);

    var data5 = {};
    data5.DATE=document.getElementById("DAT_2").value;
    data5.HEURE=document.getElementById("DAT2P3").value;
    data5.CONF_DATE="0";
    data5.ID_RECRUTEUR=idrec;
    data5.ID_CANDIDATURE=idcond;
   console.log(data5);

    var json = JSON.stringify(data5);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins6= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins6);
        }
    }
    xhr.send(json);
    var data6 = {};
    data6.DATE=document.getElementById("DAT_3").value;
    data6.HEURE=document.getElementById("DAT3P1").value;
    data6.CONF_DATE="0";
    data6.ID_RECRUTEUR=idrec;
    data6.ID_CANDIDATURE=idcond;
   console.log(data6);

    var json = JSON.stringify(data6);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins6= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins6);
        }
    }
    xhr.send(json);
    var data7 = {};
    data7.DATE=document.getElementById("DAT_3").value;
    data7.HEURE=document.getElementById("DAT3P2").value;
    data7.CONF_DATE="0";
    data7.ID_RECRUTEUR=idrec;
    data7.ID_CANDIDATURE=idcond;
   console.log(data7);

    var json = JSON.stringify(data7);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins7= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins7);
        }
    }
    xhr.send(json);
    var data8 = {};
    data8.DATE=document.getElementById("DAT_3").value;
    data8.HEURE=document.getElementById("DAT3P3").value;
    data8.CONF_DATE="0";
    data8.ID_RECRUTEUR=idrec;
    data8.ID_CANDIDATURE=idcond;
   console.log(data8);

    var json = JSON.stringify(data8);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        
        var admins8= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            Swal.fire({
              title:'Envoyé!',
              text:'Ce fichier est enregistrer avec succés.',
              icon:'success',
            
          })
          
        }else {
            Swal.fire('Date Non Envoyer')
            console.table(admins8);
        } 
    }
    xhr.send(json);
}else {
            Swal.fire('Dates Non Enregisrers')
            
        }
})
}else {
Swal.fire("Il est impossible d'ajouter deux ou trois heures égales dans la même date!");
        }
}
});

$('#formcontact').validate({

rules: {
DATCREAENT: {
required: true,
},
HEUR1: {
required: true,
},
HEUR2: {
required: true,
},
HEUR3: {
required: true,
},
HEUR4: {
required: true,
},
HEUR5: {
required: true,
},
HEUR6: {
required: true,
},
HEUR7: {
required: true,
},
HEUR8: {
required: true,
},
},
messages: {
DATCREAENT: {
required: "Veuillez sélectionner le date"
},
HEUR1: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR2: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR3: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR4: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR5: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR6: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR7: {
required: "Veuillez sélectionner l'heur"
 },
 HEUR8: {
required: "Veuillez sélectionner l'heur"
 },

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