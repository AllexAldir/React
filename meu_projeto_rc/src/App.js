import './App.css';
//Aqui vai servir para importar coisas 

import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  /*
    Aqui nessa função aonde declaramos as variáveis do nosso scripts
  */

  /*
    Aqui é o nosso arquivo JSX que por baixo dos panos está sobrepondo um arquivo em JS
  */

  const name = 'Állex'.toLocaleUpperCase()
  const soma = (x,y) => x + y
  
  const img = 'http://via.placeholder.com/150'
  //Utilizando uma imagem dinâmica 


  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Alterando o código</p>
      <p>Olá {name}</p> 

      
      {/* /* aqui posso inporlar com variáveis utilizando {} */ }
    
      {/* componentes importados */}
      {/* <Hello_World/> */}
      
      <SayMyName nome="Állex"/>

      <Pessoa 
      nome="Állex" 
      idade='21'
      proficao='desenvolvedor'
      foto='https://via.placeholder.com/100'
      />

      
    </div>  
  );
}

export default App;
//Mandando nosso script