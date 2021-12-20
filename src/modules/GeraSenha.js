const rand =(max,min) =>Math.floor(Math.random()*(max-min)+min);
const geraMaiuscula =()=>String.fromCharCode(rand(65,91));
const geraMinuscula =()=>String.fromCharCode(rand(97,123));
const geraNumero =()=>String.fromCharCode(rand(48,58));
const simbolo = '"!@#$%*()_-+=}{][:.,<>;/?°®ŧ←↓æßðđŋħ';
const geraSimbol =()=> simbolo[rand(0,simbolo.length)];


export default function geraSenha(qtd,maiuscula,minuscula,numero,simbolo){
    const senha = [];
    qtd =Number(qtd);

     for(let i=0; i<qtd; i++){
       maiuscula && senha.push(geraMaiuscula());
       minuscula && senha.push(geraMinuscula());
       numero && senha.push(geraNumero());
       simbolo && senha.push(geraSimbol());
     }

     return senha.join('').slice(0,qtd);
    
  }
 
 

