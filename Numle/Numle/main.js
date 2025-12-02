//declaro variable tablaCreada para controlar si la tabla ya ha sido creada o no
let tablaCreada = false;
//declaro variable divTabla para almacenar el div donde se insertará la tabla
let divTabla = document.getElementById("tabla");
//llamo a la función mostrarPagInicial para mostrar la página inicial al cargar el script
mostrarPagInicial();


//función para añadir eventos a los botones del teclado y a las teclas del teclado físico
function anyadirEventosALosBotones(){

  document.getElementById('btn-0').addEventListener('click', function(){pulsado(0)});
  document.getElementById('btn-1').addEventListener('click', function(){pulsado(1)});
  document.getElementById('btn-2').addEventListener('click', function(){pulsado(2)});
  document.getElementById('btn-3').addEventListener('click', function(){pulsado(3)});
  document.getElementById('btn-4').addEventListener('click', function(){pulsado(4)});
  document.getElementById('btn-5').addEventListener('click', function(){pulsado(5)});
  document.getElementById('btn-6').addEventListener('click', function(){pulsado(6)});
  document.getElementById('btn-7').addEventListener('click', function(){pulsado(7)});
  document.getElementById('btn-8').addEventListener('click', function(){pulsado(8)});
  document.getElementById('btn-9').addEventListener('click', function(){pulsado(9)});
  document.getElementById('btn-comprobar').addEventListener('click', comprobar);
  document.getElementById('btn-reset').addEventListener('click', reset);

  document.addEventListener('keydown', teclas);
  function teclas(e){
      // pulsado(e.key);
      //console.log(e.key);
      if (e.key === '0') pulsado(0);
      if (e.key === '1') pulsado(1);
      if (e.key === '2') pulsado(2);
      if (e.key === '3') pulsado(3);
      if (e.key === '4') pulsado(4);
      if (e.key === '5') pulsado(5);
      if (e.key === '6') pulsado(6);
      if (e.key === '7') pulsado(7);
      if (e.key === '8') pulsado(8);
      if (e.key === '9') pulsado(9);
      if (e.key === 'Enter') comprobar();
      if (e.key === 'Escape' || e.key === 'Delete') reset();
  }
}



//añado evento al botón jugar para mostrar el juego al hacer clic
document.getElementById('jugar').addEventListener('click', mostrarJuego);

//función para mostrar la página inicial con el formulario para seleccionar cantidad de números e intentos, que se inserta en el div con id "app"
function mostrarPagInicial(){
  document.getElementById("app").innerHTML =
  `
    <style>
      
        body{
          background-color: rgb(70, 70, 70);
          color: white;
          text-align: center;
          font-family: Arial;
          font-size: 30px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-evenly;
        }

        #jugar{
          width: 300px;
          height: 100px;
          background-color: rgb(0, 150, 0);
          font-size: 30px;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          border: none;
          display:flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          margin: 50px auto 0; 
          padding: 0;
        }

        #jugar:hover{
          background-color: #67ad60;
        }

        input{
          border-radius: 10px;
          height: 100px;
          width: 100px;
          font-size: 100px;
          text-align: center;
          margin: 0;
          padding: 0;
          border:none;
          cursor: pointer;
        }
        input:focus{
          outline: none;
        }
  </style>
  </head>
  <body>

    <h1>NUMLE</h1>

    <div id="form">
      <div></div>Introduce la cantidad de números a adivinar (10 máx):
      <div> </div><input type="text" id="cantidad" /><br>
      <div></div>Introduce la cantidad de intentos posibles:
      <div> </div><input type="text" id="intentos" /><br>
    </div>

    <div class="teclado" id="teclado">
      <button id="jugar">JUGAR</button>
    </div>
  </body>

`
}


//función para mostrar el juego, con el html que se inserta en el div con id "app"
//declaro variables cantidad e intentos para almacenar los valores introducidos en el formulario y poder usarlos en otras funciones
let cantidad;
let intentos;
function mostrarJuego(){
  cantidad = document.getElementById("cantidad").value;
  intentos = document.getElementById("intentos").value;
  //cantidad debe de estar entre 1 y 10 ya que son los números del 0 al 9, y los intentos deben ser al menos 1
  if(cantidad<1 || cantidad>10 || intentos<1  || isNaN(cantidad) || isNaN(intentos)){
    alert("Los valores introducidos no son correctos. Introduce números entre 1 y 10.");
    return;
  }

  console.log(cantidad);
  console.log(intentos);

  document.getElementById("app").innerHTML =`
   <style>
    
      .green{
        background-color: rgb(0, 150, 0);
      }

      .orange{
        background-color: rgb(228, 134, 47);
      }

      .red{
        background-color: rgb(150, 0, 0);
      }

      body{
        background-color: rgb(70, 70, 70);
        color: white;
        text-align: center;
        padding: 10px;
        font-family: Arial;
        font-size: 30px;
      }

      table{
        margin: auto;
        margin-bottom: 40px;
        margin-top: 0px;
        border: none;
      }

      td{
        width: 50px;
        height: 50px;
        border: none;
        padding: 5px;
      }

      td input{
        width: 97%;
        height: 100%;
        text-align: center;
        font-size: 25px;
        border: 3px solid #818384;
        border-radius: 10px;
        background-color: rgb(70,70,70);
        color: white;
        cursor: pointer;
        font-weight: bold;
      }
      
      td input:focus{
        outline: none;
      }

      .calc_tecla{
        background-color: #818384;
        color: white;
      }

      #btn-comprobar{
        width: 150px;
        background-color: rgb(0, 150, 0);
        padding: 10px;
        font-size: 17px;
      }

      #btn-comprobar:hover{
        background-color: #67ad60;
      }

      #btn-reset{
        width: 150px;
        background-color: rgb(150, 0, 0);
        font-size: 20px;
      }

      #btn-reset:hover{
        background-color: #a73b3b;
      }

      .teclado{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        max-width: 400px;
        margin: auto;
      }

      .calc_tecla{
        padding: 15px;
        width: 60px;
        border: none;
        background-color: #818384;
        color: white;
        font-size: 25px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
      }

      .calc_tecla:hover{
        background-color: #a4a5a7;
      }

       #form{
        width: 370px;
        height: 60px;
        background-color: rgb(0, 0, 0);
        font-size: 30px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
        border: none;
        display:flex;
       justify-content: center;
        align-items: center;
        text-decoration: none;
        margin: 0;
        padding: 0;
      }
      h1{
        padding: 25px;
        margin: 0;
      }

  </style>
</head>
<body>
  
    <h1>NUMLE</h1>

   <div id="divTabla"></div>

   <div class="teclado" id="teclado">
     <button id="btn-1" class="calc_tecla"><span>1</span></button>
     <button id="btn-2" class="calc_tecla"><span>2</span></button>
     <button id="btn-3" class="calc_tecla"><span>3</span></button>
     <button id="btn-4" class="calc_tecla"><span>4</span></button>
     <button id="btn-5" class="calc_tecla"><span>5</span></button>
     <button id="btn-6" class="calc_tecla"><span>6</span></button>
     <button id="btn-7" class="calc_tecla"><span>7</span></button>
     <button id="btn-8" class="calc_tecla"><span>8</span></button>
     <button id="btn-9" class="calc_tecla"><span>9</span></button>
     <button id="btn-0" class="calc_tecla"><span>0</span></button>
     <button id="btn-comprobar" class="calc_tecla"><span>COMPROBAR</span></button>
     <button id="btn-reset" class="calc_tecla"><span>RESET</span></button>
   </div>
  `;
  //llamo a la función crearTabla para crear la tabla del juego dinámicamente según la cantidad de números e intentos seleccionados
  crearTabla();
  //llamo a la función anyadirEventosALosBotones para añadir los eventos a los botones del teclado y a las teclas del teclado físico
  anyadirEventosALosBotones()
  //llamo a la función crearNumeroSecreto para crear el número secreto aleatorio
  crearNumeroSecreto();
}




//función para crear la tabla del juego dinámicamente según la cantidad de números e intentos seleccionados, se llama desde mostrarJuego()
function crearTabla(){
  //inicio el html de la tabla
  let html = `<table>`;

  for (let fila = 0; fila < intentos; fila++) {
    //añado una fila
    html += `<tr>`;
    for (let col = 0; col < cantidad; col++) {
      //añado una celda
      html += 
        `<td>
          <input type="text" id="celda_${fila}_${col}" size="1" maxlength="1" readonly/>
        </td>`;
    }
    //cierro la fila
    html += `</tr>`;
  }
  //cierro la tabla
  html += `</table>`;
  //inserto el html de la tabla en el div con id "divTabla" que se encuentra en el html insertado por mostrarJuego()
  document.getElementById("divTabla").innerHTML = html;
}


//creo un array vacío donde almaceno los números aleatorios
//almaceno el numero random en "numale" y compruebo si ya esá en "numeroSecreto"
//Si ya está, restamos i-- para que no cuente esa interacción del bucle

console.log(cantidad);
console.log(intentos);
let numeroSecreto=[];

function crearNumeroSecreto(){
while(numeroSecreto.length < cantidad){
  let numale = Math.floor(Math.random()*10);
  if (!numeroSecreto.includes(numale)){
      numeroSecreto.push(numale);
  }
}
console.log(numeroSecreto);
}


//función para reiniciar la partida
//si la partida ya ha sido completada, recarga la página directamente
//si no, pide confirmación al usuario antes de recargar la página
function reset(){
  if(completado){
    location.reload();
  }else{
      let conf=confirm("Seguro que quieres reiniciar la partida?");
      if(conf){
        location.reload();
      }
  }
  completado = false;
}
 


//declaro variables filaActual, columnaActual y completado, en 0 y false respectivamente, para asegurarnos que empiezan en la casilla (0,0) y que la partida no está completada
let filaActual=0;
let columnaActual=0
let completado=false;


//función para comprobar el número introducido por el usuario y compararlo con el número secreto
function comprobar(){

  //si no ha rellenado todas las columnas, no deja comprobar
  if(columnaActual<cantidad){
    // alert("TIENES QUE RELLENAR LOS 5 NÚMEROS");
  }else{
    //si ha rellenado todas las columnas, comprueba el número
    //recorre las celdas de la fila actual y compara el valor con el número secreto
    //si es correcto, suma 1 a la variable correcto y pinta la celda de verde
    //si está en el número secreto pero en otra posición, pinta la celda de naranja
    //si no está en el número secreto, pinta la celda de rojo
      let correcto=0;
        for(let j=0;j<cantidad;j++){
          let celda = document.getElementById(`celda_${filaActual}_${j}`);
              if(parseInt(celda.value)===numeroSecreto[j]){
                correcto++;
                celda.classList.add("green");
              }else if(numeroSecreto.includes(parseInt(celda.value))){
                console.log(celda.value);
                celda.classList.add("orange");
              }else if(!numeroSecreto.includes(parseInt(celda.value))){
                celda.classList.add("red");
              }
            console.log(celda);
        }
        //al terminar de comprobar la fila, pasa a la siguiente fila y resetea la columna actual a 0
          filaActual++;
          columnaActual=0;
          //si ha acertado todos los números, muestra un mensaje de victoria y activa la variable completado
        if(correcto>(cantidad-1)){
          alert("¡HAS GANADO!, EL NÚMERO SECRETO ERA: " + numeroSecreto + ".");
          completado=true;

          // Animación de confeti sacada de https://blog.openreplay.com/es/agregar-efectos-confeti-javascript/ y  https://www.npmjs.com/package/canvas-confetti
            confetti({
            particleCount: 400,
            spread: 1000,
            origin: { y: 0.4 }
            });
        }
  }
  //si ha llegado al número máximo de intentos y no ha completado la partida, muestra un mensaje de derrota y recarga la página automaticamente
  if(filaActual==intentos && !completado){
    alert("HAS PERDIDO, GENERANDO NUEVO NÚMERO...EL NÚMERO SECRETO ERA: " + numeroSecreto + ".");
    location.reload();
  }
}


//función para manejar el evento de pulsar un botón del teclado
function pulsado(btn){
  //si la partida ya ha sido completada, muestra un mensaje y no deja seguir introduciendo números
  if(completado==true){
    alert("YA HAS GANADO, NO SIGAS JUGANDO");
  }else if (columnaActual>=cantidad){
    //si ha rellenado todas las columnas, no deja seguir introduciendo números
    //alert("Dale a \"COMPROBAR\"");
  }else{
    //si no ha completado la partida y no ha rellenado todas las columnas, introduce el número en la celda correspondiente y avanza a la siguiente columna
    let celdaActual = document.getElementById(`celda_${filaActual}_${columnaActual}`);
    celdaActual.focus()
    celdaActual.value=btn;
    columnaActual++;
    console.log("fila actual= "+filaActual);
    console.log("columna actual= "+columnaActual);
    console.log(numeroSecreto);
  }
}   

