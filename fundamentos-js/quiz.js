const readline = require('readline');

const perguntas = [
	{
		pergunta: 'Qual é o nome do protagonista de Naruto?',
		alternativas: ['a) Sasuke Uchiha', 'b) Naruto Uzumaki', 'c) Kakashi Hatake', 'd) Gaara'],
		correta: 'b',
	},
	{
		pergunta: 'Qual é o nome da vila onde Naruto nasceu?',
		alternativas: ['a) Vila da Areia', 'b) Vila da Névoa', 'c) Vila da Folha', 'd) Vila da Pedra'],
		correta: 'c',
	},
	{
		pergunta: 'Quem é o irmão mais velho de Sasuke Uchiha?',
		alternativas: ['a) Itachi Uchiha', 'b) Madara Uchiha', 'c) Obito Uchiha', 'd) Shisui Uchiha'],
		correta: 'a',
	},
	{
		pergunta: 'Qual criatura está selada dentro de Naruto?',
		alternativas: ['a) Oito-Caudas', 'b) Nove-Caudas', 'c) Dez-Caudas', 'd) Uma-Cauda'],
		correta: 'b',
	},
	{
		pergunta: 'Qual é o nome do sensei do Time 7?',
		alternativas: ['a) Jiraiya', 'b) Might Guy', 'c) Kakashi Hatake', 'd) Iruka Umino'],
		correta: 'c',
	},
];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const perguntar = (texto) => new Promise((resolve) => rl.question(texto, resolve));

async function iniciarQuiz() {
	let acertos = 0;

	console.log('\n===== QUIZ DE NARUTO =====');
	console.log('Responda digitando a, b, c ou d.\n');

	for (let i = 0; i < perguntas.length; i += 1) {
		const atual = perguntas[i];
		console.log(`${i + 1}. ${atual.pergunta}`);
		atual.alternativas.forEach((alternativa) => console.log(alternativa));

		let resposta;
		do {
			resposta = (await perguntar('Sua resposta: ')).trim().toLowerCase();
			if (!['a', 'b', 'c', 'd'].includes(resposta)) {
				console.log('Digite apenas a, b, c ou d.');
			}
		} while (!['a', 'b', 'c', 'd'].includes(resposta));

		if (resposta === atual.correta) {
			acertos += 1;
			console.log('Correto! Muito bem!\n');
		} else {
			console.log(`Não foi dessa vez! A resposta correta era ${atual.correta}.\n`);
		}
	}

	console.log(`Você acertou ${acertos} de ${perguntas.length} perguntas!`);
	if (acertos === perguntas.length) {
		console.log('Excelente! Você é um verdadeiro ninja!');
	} else if (acertos >= 3) {
		console.log('Muito bom! Continue treinando para se tornar Hokage!');
	} else {
		console.log('Bom esforço! Revise Naruto e tente novamente!');
	}

	rl.close();
}

iniciarQuiz();
