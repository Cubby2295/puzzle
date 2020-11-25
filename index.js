function gestoreCursore (){
	try{
		nodoImmagine1.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreCursore2 (){
	try{
		nodoImmagine2.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreCursore3 (){
	try{
		nodoImmagine3.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreCursore4 (){
	try{
		nodoImmagine4.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreCursore5 (){
	try{
		nodoImmagine5.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreCursore6 (){
	try{
		nodoImmagine6.style.cursor = "pointer";
	}
	catch ( e ){
		alert("gestoreCursore" + e);
	}
}

function gestoreDrop (evento){
	try {
		
		evento.preventDefault();
		var dati = evento.dataTransfer.getData("text");
		this.appendChild(document.getElementById(dati));
		if ((this.id)== "rettangolo1" && (document.getElementById(dati).id== "immagine1")){
			contatore++;
		}
		if ((this.id)== "rettangolo2" && (document.getElementById(dati).id== "immagine2")){
			contatore++;
		}
		if ((this.id)== "rettangolo3" && (document.getElementById(dati).id== "immagine3")){
			contatore++;
		}
		if ((this.id)== "rettangolo4" && (document.getElementById(dati).id== "immagine4")){
			contatore++;
		}
		if ((this.id)== "rettangolo5" && (document.getElementById(dati).id== "immagine5")){
			contatore++;
		}
		if ((this.id)== "rettangolo6" && (document.getElementById(dati).id== "immagine6")){
			contatore++;
		}
		if (contatore == 6){
			alert("THE WINNER IS: YOUUUUUU!");
		}
	}
	catch ( e ){
		alert("gestoreDrop" + e);
	}
}


function gestoreDragOver (evento){
	try {
		evento.preventDefault();
	}
	catch ( e ){
		alert("gestoreDragOver" + e);
	}
}



function gestoreDragStart (evento){
	try{
		evento.dataTransfer.setData("text", this.id);
	}
	catch ( e ){
		alert ("gestoreDragStart" + e);
	}
}

var contatore;
var nodoImmagine6;
var nodoRettangolo6;
var nodoImmagine5;
var nodoRettangolo5;
var nodoImmagine4;
var nodoRettangolo4;
var nodoImmagine3;
var nodoRettangolo3;
var nodoImmagine2;
var nodoRettangolo2;
var nodoImmagine1;
var nodoRettangolo1;

function gestoreLoad(){
	try{
		nodoImmagine1=document.getElementById("immagine1");
		nodoRettangolo1=document.getElementById("rettangolo1");
		
		nodoImmagine2= nodoImmagine=document.getElementById("immagine2");
		nodoRettangolo2=document.getElementById("rettangolo2");
		
		nodoImmagine3= nodoImmagine=document.getElementById("immagine3");
		nodoRettangolo3=document.getElementById("rettangolo3");
		
		nodoImmagine4= nodoImmagine=document.getElementById("immagine4");
		nodoRettangolo4=document.getElementById("rettangolo4");
		
		nodoImmagine5= nodoImmagine=document.getElementById("immagine5");
		nodoRettangolo5=document.getElementById("rettangolo5");
		
		nodoImmagine6= nodoImmagine=document.getElementById("immagine6");
		nodoRettangolo6=document.getElementById("rettangolo6");
		
		nodoImmagine1.ondragstart = gestoreDragStart;
		nodoRettangolo1.ondragover = gestoreDragOver;
		nodoRettangolo1.ondrop =gestoreDrop;
		nodoImmagine1.onmouseover = gestoreCursore;
		
		nodoImmagine2.ondragstart = gestoreDragStart;
		nodoRettangolo2.ondragover = gestoreDragOver;
		nodoRettangolo2.ondrop =gestoreDrop;
		nodoImmagine2.onmouseover = gestoreCursore2;
		
		nodoImmagine3.ondragstart = gestoreDragStart;
		nodoRettangolo3.ondragover = gestoreDragOver;
		nodoRettangolo3.ondrop =gestoreDrop;
		nodoImmagine3.onmouseover = gestoreCursore3;
		
		nodoImmagine4.ondragstart = gestoreDragStart;
		nodoRettangolo4.ondragover = gestoreDragOver;
		nodoRettangolo4.ondrop =gestoreDrop;
		nodoImmagine4.onmouseover = gestoreCursore4;
		
		nodoImmagine5.ondragstart = gestoreDragStart;
		nodoRettangolo5.ondragover = gestoreDragOver;
		nodoRettangolo5.ondrop =gestoreDrop;
		nodoImmagine5.onmouseover = gestoreCursore5;
		
		nodoImmagine6.ondragstart = gestoreDragStart;
		nodoRettangolo6.ondragover = gestoreDragOver;
		nodoRettangolo6.ondrop =gestoreDrop;
		nodoImmagine6.onmouseover = gestoreCursore6;
		
		contatore= 0;
	}
	catch ( e ){
		alert ("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;