/*função para realizar a solicitação de dados, validação em um range específico,
e escrita na tela das informações sobre o usuário, solicitadas pela atividade*/
function action(){
	nome = prompt('Informe seu nome: ')
if(nome <= 0 || nome >= 0){
		while(nome <= 0 || nome>= 0)
			nome = prompt('Informe um nome que ao menos não comece com números: ')
	}
	altura = prompt('Informe sua altura: ')
	if(isNaN(altura) || altura<1.20 || altura>2.10){
		while(isNaN(altura) || altura<1.20 || altura>2.10)
			altura = prompt('Informe um valor numérico para altura e que esteja entre 1.20 até 2.10: ')
	}
	peso = prompt("Informe seu peso (em kilos): ")
	if(isNaN(peso) || peso<10 || peso>200){
		while(isNaN(peso) || peso<10 || peso>200)
			peso = prompt('Informe um valor numérico para peso e que esteja entre 10 até 200 (em kilos): ')
	}
	sexo = prompt('Informe seu sexo (M ou F): ')
	if(sexo!='F' && sexo!='M' && sexo!='f' && sexo!='m'){
		while(sexo!='F' && sexo!='M' && sexo!='f' && sexo!='m')
			sexo = prompt('Informe se o sexo é M ou F: ')
	}
	if(sexo=='M' || sexo=='m')
		sexo = 'Masculino'
	else
		sexo = 'Feminino'
	idade = prompt('Informe sua idade: ')
	if(isNaN(idade) || idade<5 || idade >120){
		while(isNaN(idade) || idade<5 || idade>120)
			idade = prompt('Informe um valor numérico para idade e que esteja entre 5 anos até 120 anos: ')
	}
	var result = document.getElementById('resultado')
	result.innerHTML = `<p>Aqui está seu resultado, já analisado: </p>`
	result.innerHTML += `<p>Nome: <mark>${nome}</mark><br>Altura: <mark>${altura} m</mark><br>Peso: <mark>${peso} kg</mark><br>Sexo: <mark>${sexo}</mark><br>Idade: <mark>${idade}</mark></p>`
	result.innerHTML += `<p><br>Olá <mark>${nome}</mark>, seu peso é <mark>${peso} kg</mark> e sua idade é <mark>${idade} anos</mark>.</p>`
}