// document.addEventListener("DOMContentLoaded", ()=>{
//     const h1 = document.querySelector("#h1")
    
//     console.log(document.body)
//     console.log(document.querySelector("#h1").textContent)
//     console.log(document.querySelector("#h1").innerHTML)

// })
const carrito = document.querySelector("#carrillo");
const lisTemplate = document.getElementById("lisTemplate")
const agregar = document.querySelectorAll(".card button");
const fragment = document.createDocumentFragment()

try{
    const carritoObjeto = {}

    const agregarAlCarro = (e) => {
        console.log(e.target.dataset.fruta)
    
        const producto = {
            titulo: e.target.dataset.fruta,
            id: e.target.dataset.fruta,
            cantidad: 1
        }
        if (carritoObjeto.hasOwnProperty(producto.id)) {
            producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
        }
    
        carritoObjeto[producto.id] = producto
    
        pintarCarro();
    
    }
    
    agregar.forEach((item) => {
        item.addEventListener("click", agregarAlCarro)
    })

    const pintarCarro = () => {
    
       carrito.textContent = ""
    
        
        Object.values(carritoObjeto).forEach((item) => {
            const clone = lisTemplate.content.firstElementChild.cloneNode(true)
            clone.querySelector(".lead").textContent = item.titulo;
            clone.querySelector(".rounded-pill").textContent = item.cantidad;
            fragment.appendChild(clone);
        })
        carrito.appendChild(fragment);
    }
    
    
   
}catch(err){
    console.log(err)
}

// const h1 = document.getElementById("h1")
// const color = document.getElementById("colorPick")
// const button = document.getElementById("btn")
// const text = document.querySelector("#p")
// const area = document.querySelector("#card")

// button.addEventListener("click", () =>{
//      console.log(color.value)
//      text.textContent = color.value
//      area.style.backgroundColor = color.value
// })


// button.addEventListener("click", () =>{
//     console.log("click")
//     h1.textContent ="js texto"
//     h1.style.border = "1px solid"
//     button.classList.add("activo")

// })

// console.log(h1.className)
// console.log(h1.id)
// console.log(h1.style)
// console.log(h1.textContent)
// h1.textContent = "adio mundo cruel"
// h1.style.backgroundColor = "red"
// h1.style.color = "white"

    // console.log(document.querySelectorAll(".p"))


// let a = ["hola"]
// let b = a

// a.push("adios")

// console.log(b)



const lista = document.querySelector("#lista")

// const fragment = document.createDocumentFragment()
const template = document.getElementById("liTemplate")
// const fragment = new DocumentFragment
const arrayPaises = ["España", "Inglaterra", "Estados Unidos", "Alemania", "Rusia"]

// arrayPaises.forEach((item) =>{

//     const li = document.createElement("li")
//     li.classList = "list"

//     const p  = document.createElement("p")
//     p.textContent = "país: "

//     const span  = document.createElement("span")
//     span.classList = "pais"
//     span.textContent += item

//     p.appendChild(span)
//     li.appendChild(p)
//     fragment.appendChild(li)
// })

// lista.appendChild(fragment)

const clickPaises = (e) => console.log("me diste click", e.target)

arrayPaises.forEach((item) =>{
    const clone = template.content.firstElementChild.cloneNode(true)
    clone.querySelector("span").textContent = item

    clone.addEventListener("click", clickPaises)

    fragment.appendChild(clone)
})

lista.appendChild(fragment)

// const clone = template.content.cloneNode(true)

// clone.querySelector(".pais").textContent = "agregué en un template"

// console.log(clone)

// lista.appendChild(clone)
// let template = ""

// arrayPaises.forEach((item) =>{
//     template += `
//     <li class="list">
//         <p>País:
//         <span class="pais">${item.toUpperCase()}</span></p>
//     </li>
//     `
// })

// lista.innerHTML = template

// compra.forEach((item) => {
     
//      const newNode = document.createElement("li")
//      newNode.textContent = item
    
//     const referenceNode = fragment.firstChild

//     //  fragment.appendChild(newNode)
//     fragment.insertBefore(newNode, referenceNode)

// })
const hover = document.querySelectorAll(".pais")


hover.forEach((item) => {
    item.addEventListener("click", () =>{
        if(item !== true){
            item.classList.toggle("active")
        }
    })
})

// lista.append(fragment)

// compra.forEach((item, index) => {
     
//      lista.innerHTML += `<li>${index + 1}. ${item.toUpperCase()}</li>`
//      console.log(index)
// })
