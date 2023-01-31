let _contador = 2;

const _micontador = (function () {
    let _contador = 0;

    function incrementar() {
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return{
        incrementar,
        decrementar,
        valor
    }
})();

console.log(_micontador.valor());
console.log(_micontador.incrementar());
console.log(_micontador.valor());
console.log(_micontador.incrementar());
console.log(_micontador.incrementar());
console.log(_micontador.valor());
// console.log(_micontador.valor());