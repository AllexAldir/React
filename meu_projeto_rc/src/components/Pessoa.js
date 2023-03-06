//Passando conteúdo de estilo:
import styles from './Pessoa.module.css'

//Passando mais de uma propriedade(props)
function Pessoa({foto,nome,idade,profissao}){

    return(
        <div className={styles.Pessoa_Contanier}>
            <img src={foto} alt={nome}></img>
            <h2 className={styles.Pessoa_count}>Nome da pessoa: {nome}
            </h2>
            <p className={styles.Pessoa_count}>Idade: {idade}</p>
            <p className={styles.Pessoa_count}>Profissão: {profissao}</p>

        </div>

    )

}

export default Pessoa