import {useState} from 'react'

export function PropsClick() {

    function enviar(e) {
        try {
            e.preventDefault()//Interrompe o fluxo de envio
            console.log('Enviado!')
            console.log(`Usuario: ${nome} com a senha de: ${senha}`)
        } catch (error) {
            console.error(`Erro encontrado não foi possivel executar a ação ${error}`)
        }
        finally {
            console.log('Terminou a ação')
        }
    }


    const [nome, setName] = useState()//Meu hook
    const [senha, setPassword] = useState()

    return (
        <>
            <form onSubmit={enviar}>

                <p>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}></input>
                </p>

                <p>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" placeholder="Digite a sua senha" onChange={(e => setPassword(e.target.value))}></input>
                
                </p>

                <p>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" placeholder="Digite o seu cpf"></input>
                </p>

                <input type="submit" value="Enviar"></input>

            </form>
        </>

    )

}
