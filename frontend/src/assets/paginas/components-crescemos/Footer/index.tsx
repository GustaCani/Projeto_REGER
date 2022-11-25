import './styles.css'

function Footer() {
    return (
        <footer className='footer18'>
            <div>
                <img className='face' />
            </div>

            <div>
                <a href='#/' className='paginaprincipal'>Página Principal</a>
                <a href='#/o-que-fazemos' className='oqfazemos'>O Que Fazemos</a>
                <a href='#/como-fazemos' className='comofazemos'>Como Fazemos</a>
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