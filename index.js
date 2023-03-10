/*
let a = [0, 1, 2, 3, 4, 5, 6];
let b = [];
function mostrarLista(lista) {
  for (const el of lista) console.log(`El elemento es: ${el}`);
  if (lista.length === 0) console.log("La lista esta vacia");

  console.log(`El tamaño de la lista es: ${lista.length}`);
}

mostrarLista(a);
*/

/************************************************
 ************************************************
 ************************************************/

/*
class contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.individual = 0;
  }

  static global = 0;

  contar = () => {
    this.individual++;
    contador.global++;
  };

  getResponsable = () => this.nombre;

  getCuentaIndividual = () => this.individual;

  getCuentaGlobal = () => contador.global;
}

const pedro = new contador("Pedro");
const pablo = new contador("Pablo");
const maria = new contador("Maria");

pedro.contar();
pablo.contar();
pablo.contar();
pablo.contar();
maria.contar();
maria.contar();

console.log(
  `Responsable: ${pablo.getResponsable()} - Cuenta individual: ${pablo.getCuentaIndividual()} - Cuenta Global: ${pablo.getCuentaGlobal()}`
);

console.log(
  `Responsable: ${pedro.getResponsable()} - Cuenta individual: ${pedro.getCuentaIndividual()} - Cuenta Global: ${pedro.getCuentaGlobal()}`
);

console.log(
  `Responsable: ${maria.getResponsable()} - Cuenta individual: ${maria.getCuentaIndividual()} - Cuenta Global: ${maria.getCuentaGlobal()}`
);
*/

/************************************************
 ************************************************
 ************************************************/

/* const objeto = [
   {
    manzanas: 3,
    peras: 2,
    carnes: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

let array = [];
let total = 0;

for (const ob of objeto) {
  for (const arr of Object.keys(ob)) if (!array.includes(arr)) array.push(arr);
  for (const tot of Object.values(ob)) total = total + tot;
}

console.log(array);
console.log(total); */

/************************************************
 ************************************************
 ************************************************/
