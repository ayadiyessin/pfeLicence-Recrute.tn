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
var form_2_next_btn = document.querySelector(".form_2_btns .default-btn");
var form_3_next_btn = document.querySelector(".form_3_btns .default-btn");
var form_4_next_btn = document.querySelector(".form_4_btns .default-btn");
var form_5_next_btn = document.querySelector(".form_5_btns .default-btn");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");



form_1_next_btn.addEventListener("click", function(){

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var requestDEMtest = new XMLHttpRequest()
    // Open a new connection, using the GET request on the URL endpoint
    requestDEMtest.open('GET', 'http://192.168.43.96:3000/tests', true)
    requestDEMtest.onload = function()
    {
        var dataDEMtest= JSON.parse(this.response);
        dataDEMtest.forEach(i =>{
            if (i.ID_OFFRE == c){
                var urlscor = "http://192.168.43.96:3000/scores";
                datascor={};
                datascor.SCORE = "0";
                datascor.ID_DEMANDEUR = idDem;
                datascor.ID_TEST = i._id;
                var jsonscor = JSON.stringify(datascor);
                var xhrscor = new XMLHttpRequest();
                xhrscor.open("POST", urlscor, true);
                xhrscor.setRequestHeader('Content-type','application/json; charset=utf-8');
                xhrscor.onload = function () {
                    if (xhrscor.readyState == 4 && xhrscor.status == "200") {
                        console.log("ok");
                    }
                }
                xhrscor.send(jsonscor);
            }
        })
    }
    requestDEMtest.send();

    var urlscand = "http://192.168.43.96:3000/candidatures";
    datascand={};
    datascand.FAVORI_CAND = "0";
    datascand.ARCHV_CAND = "0";
    datascand.ID_OFFRE = c;
    datascand.ID_DEMANDEUR = idDem;
    var jsonscand = JSON.stringify(datascand);
    var xhrscand = new XMLHttpRequest();
    xhrscand.open("POST", urlscand, true);
    xhrscand.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhrscand.onload = function () {
        if (xhrscand.readyState == 4 && xhrscand.status == "200") {
            console.log("ok");
        }
    }
    xhrscand.send(jsonscand);
    Swal.fire({
        title:'Toutes nos félicitations',
        text:'Votre candidature a été soumise avec succès. Pour améliorer votre chance passer le test.',
        icon:'success',
    }).then((result) => {
        if (result.isConfirmed) {
            form_1.style.display = "none";
            form_2.style.display = "block";

            form_1_btns.style.display = "none";
            form_2_btns.style.display = "flex";

            form_2_progessbar.classList.add("active");  
        }
    })
});


form_2_next_btn.addEventListener("click", function(){
    if(document.getElementById("reponse1p1").checked || document.getElementById("reponse2p1").checked || document.getElementById("reponse3p1").checked || document.getElementById("jeNaisp1").checked){
        if(document.getElementById("reponse2p1").checked){
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 2.5;
        }else{
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 0;
        }
        form_2.style.display = "none";
        form_3.style.display = "block";

        form_3_btns.style.display = "flex";
        form_2_btns.style.display = "none";

        form_2_progessbar.classList.add("active");
    }else{
        Swal.fire({
            title:'Veuillez choisir une réponse',
            icon:'warning',
            showConfirmButton:false,
            timer:1800
        })
    }
});

form_3_next_btn.addEventListener("click", function(){
    if(document.getElementById("reponse1p2").checked || document.getElementById("reponse2p2").checked || document.getElementById("reponse3p2").checked || document.getElementById("jeNaisp2").checked){
        if(document.getElementById("reponse3p2").checked){
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 2.5;
        }else{
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 0;
        }
        form_3.style.display = "none";
        form_4.style.display = "block";

        form_4_btns.style.display = "flex";
        form_3_btns.style.display = "none";

        form_2_progessbar.classList.add("active");
    }else{
        Swal.fire({
            title:'Veuillez choisir une réponse',
            icon:'warning',
            showConfirmButton:false,
            timer:1800
        })
    }
});

form_4_next_btn.addEventListener("click", function(){
    if(document.getElementById("reponse1p3").checked || document.getElementById("reponse2p3").checked || document.getElementById("reponse3p3").checked || document.getElementById("jeNaisp3").checked){
        if(document.getElementById("reponse3p3").checked){
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 2.5;
        }else{
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 0;
        }
        form_4.style.display = "none";
        form_5.style.display = "block";

        form_5_btns.style.display = "flex";
        form_4_btns.style.display = "none";

        form_2_progessbar.classList.add("active");
    }else{
        Swal.fire({
            title:'Veuillez choisir une réponse',
            icon:'warning',
            showConfirmButton:false,
            timer:1800
        })
    }
});


form_5_next_btn.addEventListener("click", function(){
    if(document.getElementById("reponse1p4").checked || document.getElementById("reponse2p4").checked || document.getElementById("reponse3p4").checked || document.getElementById("jeNaisp4").checked){ 
        if(document.getElementById("reponse1p4").checked){
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 2.5;
        }else{
            document.getElementById("scoreDem").innerHTML = parseFloat(document.getElementById("scoreDem").innerHTML) + 0;
        }
        
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var requestDEMtest = new XMLHttpRequest()
        // Open a new connection, using the GET request on the URL endpoint
        requestDEMtest.open('GET', 'http://192.168.43.96:3000/tests', true)
        requestDEMtest.onload = function()
        {
            var dataDEMtest= JSON.parse(this.response);
            dataDEMtest.forEach(i =>{
                if (i.ID_OFFRE == c){
                    // Create a request variable and assign a new XMLHttpRequest object to it.
                    var requestDEMscore = new XMLHttpRequest()
                    // Open a new connection, using the GET request on the URL endpoint
                    requestDEMscore.open('GET', 'http://192.168.43.96:3000/scores', true)
                    requestDEMscore.onload = function()
                    {
                        var dataDEMques= JSON.parse(this.response);
                        var x = "";
                        dataDEMques.forEach(j =>{
                            if(j.ID_TEST == i._id && j.ID_DEMANDEUR == idDem){
                                x = j._id;
                            }
                        })
                        var urlsc = "http://192.168.43.96:3000/scores/" +x ;
                        datasc={};
                        datasc.SCORE = document.getElementById("scoreDem").innerHTML;
                        datasc.ID_DEMANDEUR = idDem;
                        datasc.ID_TEST = i._id;
                        var jsonsc = JSON.stringify(datasc);
                        var xhrsc = new XMLHttpRequest();
                        xhrsc.open("PUT", urlsc, true);
                        xhrsc.setRequestHeader('Content-type','application/json; charset=utf-8');
                        xhrsc.onload = function () {
                            if (xhrsc.readyState == 4 && xhrsc.status == "200") {
                                console.log("ok");
                            }
                        }
                        xhrsc.send(jsonsc);

                        // Create a request variable and assign a new XMLHttpRequest object to it.
                        var requestDEMoff = new XMLHttpRequest()
                        // Open a new connection, using the GET request on the URL endpoint
                        requestDEMoff.open('GET', 'http://192.168.43.96:3000/offres/'+c, true)
                        requestDEMoff.onload = function()
                        {
                            var dataDEMoff= JSON.parse(this.response);
                            // Create a request variable and assign a new XMLHttpRequest object to it.
                            var requestDEMrec = new XMLHttpRequest()
                            // Open a new connection, using the GET request on the URL endpoint
                            requestDEMrec.open('GET', 'http://192.168.43.96:3000/recruteurs/'+dataDEMoff.ID_RECRUTEUR, true)
                            requestDEMrec.onload = function()
                            {
                                var dataDEMrec= JSON.parse(this.response);
                                document.getElementById("positionOffDem").innerHTML = dataDEMrec.VILLE_ENT;
                            }
                            requestDEMrec.send();
                        }
                        requestDEMoff.send();
                       
                        // Create a request variable and assign a new XMLHttpRequest object to it.
                        var requestDEMcand = new XMLHttpRequest()
                        // Open a new connection, using the GET request on the URL endpoint
                        requestDEMcand.open('GET', 'http://192.168.43.96:3000/candidatures', true)
                        requestDEMcand.onload = function()
                        {
                            var dataDEMcand= JSON.parse(this.response);
                            dataDEMcand.forEach(h =>{
                                if(h.ID_OFFRE == c && h.ID_DEMANDEUR == idDem){
                                    var datEnv = h.createdAt.split('T');
                                    document.getElementById("datcreaDem").innerHTML = datEnv[0];
                                }
                            })

                        }
                        requestDEMcand.send();
                        Swal.fire({
                            title:'Bravo',
                            text: 'Votre test est bien reçu.',
                            icon:'success',
                            showConfirmButton:false,
                            timer:2500
                        })
                        form_5.style.display = "none";
                        form_6.style.display = "block";

                        form_6_btns.style.display = "flex";
                        form_5_btns.style.display = "none";

                        form_3_progessbar.classList.add("active");
                    }
                    requestDEMscore.send();
                }
            })
        }
        requestDEMtest.send();
    

    }else{
        Swal.fire({
            title:'Veuillez choisir une réponse',
            icon:'warning',
            showConfirmButton:false,
            timer:1800
        })
    }
    

});




