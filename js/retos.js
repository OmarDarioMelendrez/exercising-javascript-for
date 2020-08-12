// Reto 1 Pide a tu usuario que indique cual es su curso favorito de Platzi e imprímelo en pantalla 8 veces.

const retoUnoInputA = document.getElementById("reto-1-input-a");
const retoUnoContenedor = document.getElementById("reto-1-resultado");

const retoUno = () => {
  if (retoUnoInputA.value.length > 0){
    for (let i = 0; i < 8; i++) {
      let nuevoCurso = document.createElement('h3');
      let contenido = document.createTextNode(retoUnoInputA.value);
      nuevoCurso.appendChild(contenido);
      retoUnoContenedor.appendChild(nuevoCurso);
    }  
  } else {
    while (retoUnoContenedor.firstChild) {
      retoUnoContenedor.removeChild(retoUnoContenedor.firstChild);
    }
  }
};

// Reto 2 Pide a tu usuario que indique cual es su curso favorito de Platzi e imprímelo en pantalla 8 veces.

const retoDosInputA = document.getElementById("reto-2-input-a");
const retoDosInputB = document.getElementById("reto-2-input-b");
const retoDosContenedor = document.getElementById("reto-2-resultado");

const retoDos = () => {

  if (retoDosInputA.value.length > 0){
    let veces = retoDosInputB.value;
    while (retoDosContenedor.firstChild) {
      retoDosContenedor.removeChild(retoDosContenedor.firstChild);
    };
    for (let i = 0; i < veces; i++) {
      let nuevoCurso = document.createElement('h3');
      let contenido = document.createTextNode(retoDosInputA.value);
      nuevoCurso.appendChild(contenido);
      retoDosContenedor.appendChild(nuevoCurso);
    }  
  } else {
    while (retoDosContenedor.firstChild) {
      retoDosContenedor.removeChild(retoDosContenedor.firstChild);
    }
  }
};

// Reto 3 Nuevamente, pide a tu usuario que indique su curso favorito de Platzi pero ahora muestra un caracter por línea de forma que puede parecer el inicio de un acróstico.

const retoTresInputA = document.getElementById("reto-3-input-a");
const retoTresContenedor = document.getElementById("reto-3-resultado");

const retoTres = () => {

  if (retoTresInputA.value.length > 0){
    while (retoTresContenedor.firstChild) {
      retoTresContenedor.removeChild(retoTresContenedor.firstChild);
    };
    for (let i = 0; i < retoTresInputA.value.length; i++) {
      let nuevoCurso = document.createElement('h3');
      let contenido = document.createTextNode(retoTresInputA.value.charAt(i));
      nuevoCurso.appendChild(contenido);
      retoTresContenedor.appendChild(nuevoCurso);
    }  
  } else {
    while (retoTresContenedor.firstChild) {
      retoTresContenedor.removeChild(retoTresContenedor.firstChild);
    }
  }
};

// Reto 4 Toma como base el reto anterior, pide a tu usuario que indique su animal favorito y después muéstralo con un caracter por línea. Esto debe repetirse un número de veces que ya hayas preguntado a tu usuario.

const retoCuatroInputA = document.getElementById("reto-4-input-a");
const retoCuatroInputB = document.getElementById("reto-4-input-b");
const retoCuatroContenedor = document.getElementById("reto-4-resultado");

const retoCuatro = () => {

  if (retoCuatroInputA.value.length > 0){
    while (retoCuatroContenedor.firstChild) {
      retoCuatroContenedor.removeChild(retoCuatroContenedor.firstChild);
    };
    for (let j = 0; j < retoCuatroInputB.value ; j++) {
      for (let i = 0; i < retoCuatroInputA.value.length; i++) {
        let animal = document.createElement('h3');
        let contenido = document.createTextNode(retoCuatroInputA.value.charAt(i));
        animal.appendChild(contenido);
        retoCuatroContenedor.appendChild(animal);
      }
    }
  } else {
    while (retoCuatroContenedor.firstChild) {
      retoCuatroContenedor.removeChild(retoCuatroContenedor.firstChild);
    }
  }
};

// Reto 5 Pide a tu usuario un número, luego de ello muestra la tabla de multiplicar de ese número del 1 al 10.

const retoCincoInputA = document.getElementById("reto-5-input-a");
const retoCincoContenedor = document.getElementById("reto-5-resultado");

const retoCinco = () => {

  if (retoCincoInputA.value.length > 0){
    while (retoCincoContenedor.firstChild) {
      retoCincoContenedor.removeChild(retoCincoContenedor.firstChild);
    };
    for (let i = 1; i < 11; i++) {
      let valor = document.createElement('h3');
      let contenido = document.createTextNode(`${retoCincoInputA.value} x ${i} es = ${parseInt(retoCincoInputA.value) * i}`);
      valor.appendChild(contenido);
      retoCincoContenedor.appendChild(valor);
    }
  } else {
    while (retoCincoContenedor.firstChild) {
      retoCincoContenedor.removeChild(retoCincoContenedor.firstChild);
    }
  }
};

// Reto 6 Pide a tu usuario un número, después imprime una cuenta regresiva uno a uno, desde ese número hasta 0. Esto aplica también para números negativos.

const retoSeisInputA = document.getElementById("reto-6-input-a");
const retoSeisContenedor = document.getElementById("reto-6-resultado");

const retoSeis = () => {
  let numero = parseInt(retoSeisInputA.value);
  
  if (numero > 0){
    while (retoSeisContenedor.firstChild) {
      retoSeisContenedor.removeChild(retoSeisContenedor.firstChild);
    };
    for (let i = 0; i <= numero ; i++) {
      let contNumero = document.createElement('h3');
      let contenido = document.createTextNode(numero - i);
      contNumero.appendChild(contenido);
      retoSeisContenedor.appendChild(contNumero);
    }
  } else {
    while (retoSeisContenedor.firstChild) {
      retoSeisContenedor.removeChild(retoCincoContenedor.firstChild);
    }
    for (let i = numero - 1; i < 0 ; i++) {
      let contNumero = document.createElement('h3');
      let contenido = document.createTextNode(i + 1);
      contNumero.appendChild(contenido);
      retoSeisContenedor.appendChild(contNumero);
    }
    
  }
};

// Reto 7 Imprimir el curso la cantidad solicitada, pero si el número ‘n’ es mayor a 15, solo imprimirás el nombre del curso 3 veces e indicarás que ‘n’ es un número muy grande.

const retoSieteInputA = document.getElementById("reto-7-input-a");
const retoSieteInputB = document.getElementById("reto-7-input-b");
const retoSieteContenedor = document.getElementById("reto-7-resultado");

const retoSiete = () => {
  if (parseInt(retoSieteInputB.value) > 15) {
      let veces = retoSieteInputB.value;
      while (retoSieteContenedor.firstChild) {
        retoSieteContenedor.removeChild(retoSieteContenedor.firstChild);
      };
      for (let i = 0; i < 3; i++) {
        let nuevoCurso = document.createElement('h3');
        let contenido = document.createTextNode(retoSieteInputA.value);
        nuevoCurso.appendChild(contenido);
        retoSieteContenedor.appendChild(nuevoCurso);
      }
      let nuevoCurso = document.createElement('h3');
      let contenido = document.createTextNode(`${veces} es un número muy grande para imprimir`);
      nuevoCurso.appendChild(contenido);
      retoSieteContenedor.appendChild(nuevoCurso);

    } else{
      let veces = retoSieteInputB.value;
      while (retoSieteContenedor.firstChild) {
        retoSieteContenedor.removeChild(retoSieteContenedor.firstChild);
      };
      for (let i = 0; i < veces; i++) {
        let nuevoCurso = document.createElement('h3');
        let contenido = document.createTextNode(retoSieteInputA.value);
        nuevoCurso.appendChild(contenido);
        retoSieteContenedor.appendChild(nuevoCurso);
      } 
  }
}

// Reto 8 Crearás un programa que pedirá a tu usuario 4 números, uno por uno. Al indicarlo preguntarás al usuario si desea sumarlo al total, si la respuesta es afirmativa se sumará. Al final debes mostrar el valor de la suma de aquellos números que fueron aceptados para la suma.

const retoOchoContenedor = document.getElementById("reto-8-resultado");

const retoOcho = () => {
  let total = 0;
  const REPETIR = 4;

  const sumTotal = () => {
    for (let i = 0; i < REPETIR; i++) {
      let numero = parseInt(prompt('Porfavor ingrese un número'));
      let suma = prompt('Deseas agregar este número a la suma total? Presiona Y para sí ó N para No').toUpperCase();
      if(suma === 'Y') {
        total+=numero;
      }
    }
    let nuevoCurso = document.createElement('h3');
    let contenido = document.createTextNode(`Total: ${total}`);
    nuevoCurso.appendChild(contenido);
    retoOchoContenedor.appendChild(nuevoCurso);
}
sumTotal();
}