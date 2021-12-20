import geraSenha from './GeraSenha';

  const result = document.querySelector('.result');
  const qtd = document.querySelector('.qtd');
  const chkboxnum = document.querySelector('.chkbox-num');
  const chkboxmaiuscula = document.querySelector('.chkbox-maiusculas');
  const chkboxminuscula = document.querySelector('.chkbox-minusculas');
  const chkboxsimbol = document.querySelector('.chkbox-simbol');
  const gerarSenha = document.querySelector('.gerarSenha');

  export default ()=>{
    gerarSenha.addEventListener('click',(e)=>{
      e.preventDefault();
         result.innerHTML=gera();
    });
  };

  function gera(){
    const senha = geraSenha(
       qtd.value,
       chkboxmaiuscula.checked,
       chkboxminuscula.checked,
       chkboxnum.checked,
       chkboxsimbol.checked,
    );

    return senha || 'Nada selecionado';
}  


