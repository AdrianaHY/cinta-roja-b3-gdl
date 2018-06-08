/*console.log("Me ejecuto primero");

setTimeout(() => {
    console.log("Yo voy segundo");
}, 2000);

console.log("Yo voy tercero");*/
const sumarTodos = (max, callback) => {
    let resultado = 0;

    setTimeout(()=> {
        for(let i = 0; i < max; i++){
            resultado = resultado + i;
        }
        callback(resultado);
    }, 3000);
    
}

sumarTodos(15, (resultadoDeLaSuma) => {
    console.log(resultadoDeLaSuma);
});
sumarTodos(10, (resultadoDeLaSuma) => {
    const sumaDiez = resultadoDeLaSuma + 10;
    console.log(sumaDiez);
})