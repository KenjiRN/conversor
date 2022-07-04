const botao = document.querySelector('button')
      botao.onclick = () => {
    let valorDolar = Number(document.querySelector('input').value.replace(',','.'))
        document.querySelector('h2').innerHTML = 'R$ '+(valorDolar * 5.5).toFixed(2)
}