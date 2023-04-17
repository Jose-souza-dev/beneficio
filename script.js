//FUNÇÃO QUE PEGA O SELECT 
   function atualizaSelect(){
      let recebeDados = document.querySelector('.recebeDados')
      let select = document.querySelector('#trabalho')
      let optionValue = select.options[select.selectedIndex]

      let value = optionValue.value
      let text = optionValue.text// NO CASO DE APENAS SIM E NÃO SE O VALOR FOR SIM E NÃO, NÃO PRECISA DO TEXT.

    //recebeDados.innerHTML = `Você trabalha: ${value}`
   }

   function coletaDados(){
      let nome = document.querySelector('#nome').value
      let quantidadeDePessoasNaFamilia = Number(document.querySelector('#qtdp').value)
      let rendaDaFamilia =Number(document.querySelector('#rendaf').value)
      let quantosTrabalham = Number(document.querySelector('#qtf').value)
      let recebeDados = document.querySelector('.recebeDados')

      // IMPRIMINDO O  SELECT 
      
      let select = document.querySelector('#trabalho')
      let optionValue = select.options[select.selectedIndex]
      let value = optionValue.value

      //----------------------------------------------------------------------------------------------------

      

      // SERÁ IMPRIMIDO NA TELA NA DIV RECEBE DADOS
      recebeDados.innerHTML = 
      `<strong>Nome:</strong> ${nome} <br>
      <strong>Quantidade de pessoas na família:</strong> ${quantidadeDePessoasNaFamilia} <br>
      <strong>Qual a renda total:</strong> ${rendaDaFamilia.toFixed(2)} <br>
      <strong>Quantos trabalham:</strong> ${quantosTrabalham}<br>
      <strong>Você trabalha:</strong> ${value}<br>
      `

      //----------------------------------------------------------------------------------------------------


      // VAMOS FAZER UM CALCULO PARA SABER SE A PESSOA PODE RECEBER O AUXÍLIO

      let divisao = rendaDaFamilia / quantidadeDePessoasNaFamilia

      if(divisao < 200){
         let resultado = document.querySelector('#resultado')
         resultado.style.padding = '6px'
         resultado.style.borderRadius = '6px'
         resultado.style.background = 'rgba(0, 85, 10, 0.70)'
         resultado.style.color = '#fff'
         resultado.innerHTML = `
         Você está ápto a receber o benefício, pois sua renda é abaixo do limite de 200.00. Média ${divisao.toFixed(2)}
         `
      }else{
         resultado.style.padding = '6px'
         resultado.style.borderRadius = '6px'
         resultado.style.background = 'rgba(193, 0, 0, 0.70)'
         resultado.style.color = '#fff'
          resultado.innerHTML = `
         Você não está ápto a receber o benefício, pois sua renda ultrapassa o limite de 200.00.  Média ${divisao.toFixed(2)}`
      }
   }
