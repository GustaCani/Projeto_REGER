import './styles.css'

function Body() {
    return (
        <>
            <div className='dicas'>
                <h1> Dicas </h1>
                <hr></hr>

                <p>
                    Muitos tem dúvidas de como armazenar os resíduos até
                    ter onde destiná-los, então aqui vai algumas dicas de
                    como separar eles em casa:
                </p>

                <h3 className='b'> Recicláveis: </h3>

                <p>
                    Armazenar em sacos plásticos azuis.
                </p>

                <h3 className='b'> Rejeitos: </h3>

                <p>
                    Armazenar em sacos plásticos pretos.
                </p>

                <h3 className='b'> Orgânicos: </h3>

                <p>
                    Armazenar em sacos plásticos marrons.
                </p>

                <h3 className='b'> Vidro quebrado e outros lixos que podem cortar ou perfurar: </h3>

                <p>
                    Armazenar em caixas.
                </p>

                <h3 className='b'> Químicos e perigosos: </h3>

                <p>
                    Armazenar em recipientes com identificação.
                </p>

                <h3 className='b'> Saúde: </h3>

                <p>
                    Armazenar em sacos plásticos brancos.
                </p>


            </div>
        </>
    )
}

export default Body