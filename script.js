 /*filter*/
 function inserirUsuarios ( nome,idade ){ return { nome,idade } }
 let usuarios = [
     inserirUsuarios("Jonathan",27),
     inserirUsuarios("Mirelia",32),
     inserirUsuarios("Jhon",12),
     inserirUsuarios("Barbara",22),
     inserirUsuarios("Edjunior",42)
]

function temMaisdeTrinta( pessoa ){ return pessoa.idade > 30 }
function temMenosdeTrinta( pessoa ){ return pessoa.idade < 30 }

let usuariosFiltrados = usuarios.filter(temMenosdeTrinta);
console.log(usuariosFiltrados);