import './styles.css'

function Footer() {
    return (
        <footer className='footer12'>
            <div>
                <img className='face' />
            </div>

            <div>
                <a href='#/' className='paginaprincipal'>Página Principal</a>
                <a href='#/como-fazemos' className='comofazemos'>Como Fazemos</a>
                <a href='#/crescemos' className='crescemos'>Crescemos</a>
                <a href='#/onde-estamos' className='ondeestamos'>Onde Estamos</a>
                <a href='#/dicas' className='dicas'>Dicas</a>
            </div>

            <div>
                <a href='#/creditos' className='testado'> Desenvolvido por </a>
                <p className='teste'> © Todos os direitos reservados </p>
            </div>
        </footer>


    )
}

export default Footer