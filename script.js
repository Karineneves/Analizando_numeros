let numeros=[]
function adicionarNumero(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById ('analisando')
    let res = document.getElementById ('res')

    if (num.value.length==0){
        window.alert(`[ERRO]Faltam dados`)
    }else{
        let numero = Number(num.value)
if (numero >=1 && numero <=100)
    {
        if (numeros.includes(numero)){
            window.alert(`Esse numero ja foi adicionado`)
        }else{
        numeros.push(numero)
            let item= document.createElement (`option`)
            item.text= `O valor ${numero} foi adicionado`
            tab.appendChild (item)
            res.innerHTML=''
        }
    }else{
        window.alert(`Esse valor nao pode ser adicionado`)
    }
}
num.value=''
num.focus()
}

function analisarNumeros(){
    if (numeros.length==0){
        window.alert (`Adicione valores antes de finalizar`)
    }else{
    let tot=numeros.length
    let maior = numeros[0]
    let menor = numeros [0]
    let soma = 0 
    let media = 0
    for (let pos in numeros){
        soma += numeros [pos]
        if (numeros[pos]> maior)
            maior = numeros [pos]
        if(numeros [pos]< menor)
            menor = numeros [pos]
    }
media = soma/tot
    res.innerHTML=''
    res.innerHTML+=`<p>ao todo, temos ${tot} numeros cadastrados </p>`
    res.innerHTML += `<p> O maior valor informado foi, ${maior}<p>`
    res.innerHTML += `<p> O menor valor informado foi, ${menor}<p>` 
    res.innerHTML += `<p> A soma dos numeros adicionados é, ${soma}<p>`
    res.innerHTML += `<p> A média dos valores adicionados é, ${media}<p>`
    }
}