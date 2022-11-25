import './nomes.css'

function Nomes() {
    return(
        <>
            <div className='nomes'>
                <h1> Equipe de Desenvolvimento: </h1>
                <tr className='desenvolvimento'>
                    <td className='ciencia'>
                        <h2> Ciência da Computação: </h2>
                        <h3> Gustavo Caniati de Lima </h3>
                        <h3> Lucas Barbi </h3>
                        <h3> Luis Felipe Bini </h3>
                        <h3> Vinicius Lourenço </h3>
                    </td>
                    
                    <td>
                    <h2> Design: </h2>
                        <h3> Laura Lázaro Rodrigues Ribeiro </h3>
                        <h3> Enzo Silveira Boldarin </h3>
                        <h3> Felipe Galvão dos Santos </h3>
                        <h3> Isabelly Cristina Borgato </h3>
                    </td>
                </tr>
                <br></br>
            </div>
            <div className='nomes'>
                <h1> Professores Orientadores: </h1>
                <h3> Vinicius Santos Andrade </h3>
                <h3> Sileide Aparecida de Oliveira Paccola</h3>
            </div>

            <div >
                <header className="Logo">

                </header>
            </div>



        </>
    )
}

export default Nomes