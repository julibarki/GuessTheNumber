for ( i = 1; i <= 15; i++) {
				document.getElementById("cora"+i).style.visibility ="hidden";
			}


		alert("Bienvenido a Guess the number, seleccioná un nivel para empezar");
		
		document.getElementById("botonPrincipiante").onclick = function(){
			alert("En el nivel Principiante tendras que adivinar un numero entre 0 y 1000. Tendras 15 vidas para lograrlo");
			habilitarCampos("botonPrincipiante","botonMediano","botonAvanzado");
			jugar(1000,15);
			for ( i = 1; i < 16; i++) {
				document.getElementById("cora"+i).style.visibility ="visible";
			}

		}
		document.getElementById("botonMediano").onclick = function(){
			alert("En el nivel Intermedio tendras que adivinar un numero entre 0 y 2000. Tendras 10 vidas para lograrlo");
			habilitarCampos("botonMediano","botonPrincipiante","botonAvanzado");
			for ( i = 1; i < 11; i++) {
				document.getElementById("cora"+i).style.visibility ="visible";
			}
			jugar(2000,10);

			

		}
		document.getElementById("botonAvanzado").onclick = function(){
			alert("En el nivel Avanzado tendras que adivinar un numero entre 0 y 3000. Tendras 8 vidas para lograrlo");
			habilitarCampos("botonAvanzado","botonPrincipiante","botonMediano");
			for ( i = 1; i < 9; i++) {
				document.getElementById("cora"+i).style.visibility ="visible";
			}
			jugar(3000,8);

		}

		document.getElementById("btnNuevamente").onclick = function(){

			reiniciar();
			var numRandom = Math.floor(Math.random() * 11);
			var gane = false;
			document.getElementById("boton").style.visibility ="visible";

			

		}

		function jugar(tope,vidas){
		
			var numRandom = Math.floor(Math.random() * tope);
		
			document.getElementById("boton").onclick = function(){
				var numeroElegido = document.getElementById("numero").value;
				var gane = false;

			
				if(numeroElegido == numRandom){
					ganaste(numRandom);


				}
					else if(numeroElegido > numRandom){
					alert("Tu número es mas grande, elegí uno mas pequeño");
					quitarVida(vidas);
					vidas--;
					

				}
				else{
					alert("Tu número es mas chico, elegí uno mas grande");

					quitarVida(vidas);
					vidas--;
					
					
				}
					if (vidas==0) {
					perdiste(numRandom);
				}


				

			}

		}

	function quitarVida(nro){
		if(nro >0 & nro <16){
		document.getElementById("cora"+nro).style.visibility ="hidden";
	}

	}

		function reiniciar(){

			document.getElementById("boton").disabled = true;
			document.getElementById("numero").disabled = true;
			document.getElementById("numero").value = "";
			document.getElementById("botonPrincipiante").disabled = false;
			document.getElementById("botonMediano").disabled = false;
			document.getElementById("botonAvanzado").disabled = false;
			document.getElementById("btnNuevamente").disabled = true;
			document.getElementById("botonPrincipiante").style.visibility ="visible";
			document.getElementById("botonMediano").style.visibility ="visible";
			document.getElementById("botonAvanzado").style.visibility ="visible";
		}


		function habilitarCampos(botonElegido,boton1,boton2){
			document.getElementById("boton").disabled = false;
			document.getElementById("numero").disabled = false;
			document.getElementById(boton1).style.visibility ="hidden";
			document.getElementById(boton2).style.visibility ="hidden";
			document.getElementById(botonElegido).disabled = true;
		}
		function perdiste(numeroRandom){
			document.getElementById("boton").disabled = true;
			document.getElementById("numero").disabled = true;
			alert("Perdiste te quedaste sin vidas");
			alert("El numero era: " + numeroRandom);
			document.getElementById("btnNuevamente").disabled = false;
		}


		function ganaste(rand){
			alert("Excelente!, Ganaste!, el numero era: " + rand);
			document.getElementById("btnNuevamente").disabled = false;
			document.getElementById("boton").disabled = true;

		}
