document.getElementById('check-age').addEventListener('click', function(){
    checkAge();
})

function checkAge(){
    
    let aName = prompt('Digite seu nome: ');
    let age = prompt('Digite a sua idade: ');

    if(age >= 18){
        return alert(`${aName} é maior de idade.`);
    }else if(age < 18){
        return alert(`${aName} é menor de idade`);
    }

    return alert('Dado inválido');
};