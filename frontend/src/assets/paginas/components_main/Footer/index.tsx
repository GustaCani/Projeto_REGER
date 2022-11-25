import './styles.css'

function Footer() {
    return (
        <footer className='footer1'>
            <div>
                <img className='face' />
            </div>

            <div>
                <a href='#/o-que-fazemos' className='oqfazemos'>O Que Fazemos</a>
                <a href='#/como-fazemos' className='comofazemos'>Como Fazemos</a>
                <a href='#/crescemos' className='crescemos'>Crescemos</a>
                <a href='#/onde-estamos' className='ondeestamos'>Onde Estamos</a>
                <a href='#/dicas' className='dicas'>Dicas</a>
            </div>

            <span>
                <p className='teste'> © Todos os direitos reservados </p> 
                <a href='#/creditos' className='testado'> Desenvolvido por </a>
            </span>
        </footer>


    )
}

export default Footer