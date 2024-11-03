
//1. Como você faria para dar saudações diferentes para as pessoas, dependendo do gênero com a qual se identificam? Ex.: Feminino → Bem-vinda; Masculino → Bem-vindo
//2. Como você faria para identificar se um número é par ou ímpar; e escrever no terminal: "este número é par" ou "este número é ímpar"?
//3. Dados dois números a e b, como você faria para escrever as mensagens: "a é maior do que b"; "b é maior do que a" ou "b é igual a a" (dependendo dos valores de a e b)?



var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', sexo);

function sexo() {
  var choice = select.value;

  if (choice === 'masculino') {
    para.textContent = 'Seja bem vindo';
  } else if (choice === 'feminino') {
    para.textContent = 'Seja bem vinda';
  } else if (choice === 'indefinido') {
    para.textContent = 'Seja bem vind@';

}