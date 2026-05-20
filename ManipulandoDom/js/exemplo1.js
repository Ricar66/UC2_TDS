// criar referencia ao formulario e ao elemento h3 (onde vai exibir a resposta)

// selecionando atraves do docment de selecionar tags html, usando o querySelector que recebe como parametro o nome da tag, id ou classe do elemento html que deseja selecionar.
const form = document.querySelector('form');
const resposta = document.querySelector('h3');

// criar um evento de escuta para o formulario, onde o evento é o submit, que é acionado quando o usuario clica no botão de enviar do formulario, ou pressiona a tecla enter enquanto esta no campo de texto do formulario.
form.addEventListener('submit', (e) => {
//  const nome = form.inNome.value; obtem o nome do campo texto do formulario, onde o nome do campo é inNome, e o valor do campo é obtido atraves da propriedade value.
 const nome = form.inNome.value;
//  colocando o valor do nome no elemento h3, onde a resposta é exibida para o usuario, usando a propriedade innerText para definir o texto do elemento h3.
 resposta.innerText = `Olá ${nome}, seja bem vindo(a) ao curso de lógica de programação!`;
 form.enviar.value = 'Enviado'; // altera o valor do botão de enviar para 'Enviado', para indicar que o formulario foi enviado.
 e.preventDefault(); // previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página, para que a resposta seja exibida sem recarregar a página.
})
