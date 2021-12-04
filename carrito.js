const frutas = []
const fruta = prompt("que quieres comprar 😏")

frutas.push(fruta)

console.log("compraste:")


while(confirm("algo mas?")){
    const fruta = prompt("mas fruta?")
    frutas.push(fruta)
}

for(const fruta of frutas){
  console.log(fruta)
}

