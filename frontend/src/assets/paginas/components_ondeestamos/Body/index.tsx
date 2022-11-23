import './styles.css'

function Body() {
    return (
        <>
            <div>

                <h2 className='campus'> O projeto REGER acontece no campus da Unisagrado </h2>
                
                <div >
                    <header className="Imagem">

                    </header>
                </div>

                <iframe className='mapa'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.31192931408!2d-49.036756346450325!3d-22.328847389601734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6777759ca131%3A0x653724cac51ff7ef!2sUNISAGRADO!5e0!3m2!1spt-BR!2sbr!4v1669149012777!5m2!1spt-BR!2sbr" 
                    loading="lazy" 
                    >
                </iframe>
            </div>
        </>
    )
}

export default Body