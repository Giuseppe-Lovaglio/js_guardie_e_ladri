let mosse = 0;
let su;
let es;
let suL;
let esL;
let guardia;
let ladro;
let x = 502;
let y = 502;
let n;
let mossa_ladro = false;
let mosse_rimanenti;
let bottoni;

document.getElementById("esito").innerHTML = "Mosse restanti 20";

guardia = document.getElementById("guardia");
ladro = document.getElementById("ladro");

document.getElementById("nord").addEventListener("click", nord);
document.getElementById("sud").addEventListener("click", sud);
document.getElementById("est").addEventListener("click", est);
document.getElementById("ovest").addEventListener("click", ovest);

function aggiornamento_partita() {

    mosse_rimanenti = 20 - mosse;
    suL = ladro.style.top;
    esL = ladro.style.left;
    su = guardia.style.top;
    es = guardia.style.left;
    bottoni = document.getElementsByClassName("pulsante");

    if (suL == su && esL == es) {
        document.getElementById("esito").innerHTML = "<span style='color: green;'>Hai vinto!</span>";

        for (let i = 0; i < bottoni.length; i++) {
            bottoni[i].disabled = true;
            bottoni[i].style.background = "black";
        }
    }

    else {
        document.getElementById("esito").innerHTML = "Mosse restanti " + mosse_rimanenti;
    }

    if (mosse_rimanenti == 0) {

        for (let i = 0; i < bottoni.length; i++) {
            bottoni[i].disabled = true;
            bottoni[i].style.background = "black";
        }

        if (suL == su && esL == es) {
            document.getElementById("esito").innerHTML = "<span style='color: green;'>Hai vinto!</span>";
        }

        else {
            document.getElementById("esito").innerHTML = "<span style='color: red;'>Hai perso!</span>";
        }
    }
    
}

function movimento_ladro() {

    mossa_ladro = false;

    while (mossa_ladro == false) {

        n = Math.floor(Math.random()*4);

        if (n==0) {  // su

            suL = ladro.style.top;
            suL = Number(suL.substring(0, suL.length-2)) - 50;

            if (suL >= 0) {
                ladro.style.top = suL + "px";
                mossa_ladro = true;
                aggiornamento_partita();
            }
        }

        else if (n==1) { // giu

            suL = ladro.style.top;
            suL = Number(suL.substring(0, suL.length-2)) + 50;

            if (suL <= (y - 35)) {
                ladro.style.top = suL + "px";
                mossa_ladro = true;
                aggiornamento_partita();
            }
        }

        else if (n==2) { // destra

            esL = ladro.style.left;
            esL = Number(esL.substring(0, esL.length-2)) + 50;
        
            if (esL <= (x - 46)) {
                ladro.style.left = esL + "px";
                mossa_ladro = true;
                aggiornamento_partita();
            }
        }

        else if (n==3) { // sinistra

            esL = ladro.style.left;
            esL = Number(esL.substring(0, esL.length-2)) - 50;

            if (esL >= 0) {
                ladro.style.left = esL + "px";
                mossa_ladro = true;
                aggiornamento_partita();
            }
        }
    }
}

function nord() {
    su = guardia.style.top;
    su = Number(su.substring(0, su.length-2)) - 50;
    if (su >= 0) {
        guardia.style.top = su + "px";
        mosse += 1;
        movimento_ladro();
    }
}

function sud() {
    su = guardia.style.top;
    su = Number(su.substring(0, su.length-2)) + 50;
    if (su < (y - 35)) {
        guardia.style.top = su + "px";
        mosse += 1;
        movimento_ladro();
    }
}

function est() {
    es = guardia.style.left;
    es = Number(es.substring(0, es.length-2)) + 50;
    if (es < (x - 46)) {
        guardia.style.left = es + "px";
        mosse += 1;
        movimento_ladro();
    }
}

function ovest() {
    es = guardia.style.left;
    es = Number(es.substring(0, es.length-2)) - 50;
    if (es >= 0) {
        guardia.style.left = es + "px";
        mosse += 1;
        movimento_ladro();
    }
}