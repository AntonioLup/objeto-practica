// let n = parseInt(prompt("introduce un number"))
// console.log(n)

// let string = prompt('escribe "Javascript"')

// if(string === 'Javascript'){
//    console.log("correcto")
// }else{3
//     console.log("no")
// }

// let introducirNumero =  parseInt(prompt("introduce un number de 1 al 10"))
// let numeroRandom = Math.floor(Math.random(1 - 10) * 10)
// let vidas = 5

// while(numeroRandom !== introducirNumero && vidas > 1){

//     (numeroRandom < introducirNumero) ? console.log("Es más bajo") : console.log("Es más alto");
//     vidas--;
//     introducirNumero = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
// }

// if(introducirNumero === numeroRandom){
//     console.log("perfecto")
// }else{
//     console.log("mal " + "es " + x)
// }
// let furutas = ["pito", "tetitas", "chichito"]

// for(let i = 0; i <= 3; i++ ){
//     console.log(furutas[i])
// }
// for(let fruta of furutas){
//     console.log(fruta)
// }
// for(let fruta in furutas){
//     console.log(fruta)
// }

// function sumar (n1, n2){
//     return parseInt(n1) +  parseInt(n2)
// }

// let numeroP = 3
// let numeroG = 3

// console.log(sumar(numeroP, numeroG ))

// let nom = "antx"
// let est = true

// console.log(`bienvenido: ${nom.toUpperCase()}`)

// console.log(`${est ? "en linea" : "offline"}`)

// let estado = false

// if(estado){
//     console.log("entro")
//     estado = false
//     console.log(estado)
// }
// console.log(estado)

// const frutas = []
// frutas[0] = "chimichangilla"

// const frutas = []
// frutas.push("chimichangilla") agrega
// frutas.unshift("chimichangilla") agrega al principio
// const frutaEliminada = frutas.pop()elimina el ultimo elemento y lo almacena en un valor
// const frutaEliminada = frutas.shift("chimichangilla") elimina al principio y lo almacena en un valor

//function declarada

//function expresada aayuda a mantener la logica del algoritmo
// const numero = function (){

// }
// const numero = () =>{

// } //arrow function
//foreach
// let frutas = []
// let fruta = prompt("que qere")

// frutas.push(fruta)

// console.log("confimo")
// while(confirm("querer ma weeey?")){
    
//     let fruta = prompt("quequere ma?")
//     frutas.push(fruta)
// }

// frutas.forEach((fruta, index) =>{
//     console.log(`${index} - ${fruta}`)
// })

const gato = {
   nombre: "gumersildo",
   edad: 33,
   duerme: true,
   enemigos: ["maricones", "abascal"],
   comida:{
      fria:"pez",
      hot:"polla"
   },
   get nombreSuper(){
       return this.nombre.toUpperCase()
   },
   set agregarEnemigos(nuevoAmigo){
       this.enemigos.push(nuevoAmigo)
   }

//    comer(){
//        const self = this
//        function pintandoComida(){
//            console.log(self.nombre + " comiendo")
//        }
//        pintandoComida()
//    },
//    comerDos: (alimento) =>{
//        console.log(`${gato.nombre} come un ${alimento}`)
//    },
//    listaEnemigos(){
//       this.enemigos.forEach((item) => console.log(item))
//    },

}
gato.agregarEnemigos = "moros"
console.log(gato.nombreSuper)
console.log(gato)
// gato.comer()
// const comerDos = gato.comer("pez")
// const {enemigos} = gato
// const [auno, ados] =  enemigos
// console.log(auno)
// const {nombre : nombreSuper = "nuevo", edad, duerme} = gato
// for(let propiedad in gato){
//    console.log(gato[propiedad])
// }
// for(let propiedad of gato.enemigos){
    //     console.log(propiedad)
    //  }
// console.log(Object.values(gato))
// Object.values(gato).forEach((item) => console.log(item))
// gato.listaEnemigos()
// gato.nombre = "rubalcaba"
// console.time(gato.comerDos("pez"))
//Object.entries(obj) devuelve como objetos en pareja como arrays
//Object.keys() devuelve el index 
//for of es para los array in seria para objetos

// gato.color = "azul"
// gato.edad = 3
//this hace referencia al objeto que hace referencia
// delete gato.enemigo

// if(gato.hasOwnProperty("nombre")){
//     gato.nombre = "rubalcaba"
// }
// console.log(gato.otros.favorito.comida.caliente)
// console.log(`sus amigos son ${gato.otros.amigos[0]} y ${gato.otros.amigos[1]} `)
