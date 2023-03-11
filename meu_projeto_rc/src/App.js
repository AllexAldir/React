import './App.css';
import { Botao } from './components/eventos/eventos01.js'
function App() {
  /*
    Aqui nessa função aonde declaramos as variáveis do nosso scripts
  */

  /*
    Aqui é o nosso arquivo JSX que por baixo dos panos está sobrepondo um arquivo em JS
  */

  const name = 'Állex'.toLocaleUpperCase()
  const soma = (x,y) => x + y
  
  // const img = 'http://via.placeholder.com/150'
  //Utilizando uma imagem dinâmica 
  let array = []

  function numAleatorio(){
    const num = () => Math.round(Math.random() * (100 - 1) + 1)

    let numero = num()

    console.log(numero)

    if(!array.includes(numero)){
      array.push(numero)

    }else{
      console.log('Numero ja possui!')
    }

  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Alterando o código</p>
      <p>Olá {name}</p> 
      <p>A soma de 1 e de 2 é: {soma(1,2)}</p>
      <Botao
        evento={numAleatorio}
      />
    </div>  

  );
}

export default App;
//Mandando nosso script