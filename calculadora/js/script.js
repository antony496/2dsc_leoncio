// FAZ REFERÊNCIA AOS ELEMENTOS DOM



const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
 const btncalcular = document.querySelector('#btn-calcular') 
 const resultado = document.querySelector('.resultado')
  const divisao = document.querySelector('.divisao') 
  const adicao = document.querySelector('.adicao')
   const subtracao = document.querySelector('.subtracao')
    const multiplicacao = document.querySelector('.multiplicacao') 
   
    function calcular(){ 
    const n1 = Number(numero1.value) 
    const n2 = Number(numero2.value) 
    if(typeof n1 === 'number' && typeof n2 === 'number')
         { const add = `O resultado da Adição é: ${n1+n2}` 
    const div = `O resultado da Divisão é: ${n1/n2}` 
    const sub = `O resultado da Subtração é: ${n1-n2}`
     const mult = `O resultado da Multiplicação é: ${n1*n2}` 
     //alert(adicao) 
     adicao.innerHTML = add 
     divisao.innerHTML = div
     subtracao.innerHTML = sub 
     multiplicacao.innerHTML = mult 
    } 
    else { alert('por favor, digite um numero correto') 

    } 
}
btncalcular.addEventListener('click', function(evento){ 
    evento.preventDefault() 
    calcular() })
