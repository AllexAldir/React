//Passando conteúdo de estilo:
import './styles/estilos01.css'
//Passando mais de uma propriedade(props)
function Pessoa({foto,nome,idade,profissao}){

    return(
        <div className='Menor_counter'>
            <img src={foto} alt={nome}></img>
            <h2 >Nome da pessoa: {nome}
            </h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            
        </div>

    )

}

export default Pessoa