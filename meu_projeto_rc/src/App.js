import './App.css';
//Aqui vai servir para importar coisas 
import Hello_World from './components/Helllo_World'

import Teste_final from './components/Teste_Final'

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
      <p>Soma: {soma(4,5)}</p>
      <div>
      <img src={img} alt="Minha imagem"></img>
      
      </div>

      {/* componentes importados */}
      <Hello_World/>
      

    </div>
  );
}

export default App;
//Mandando nosso script