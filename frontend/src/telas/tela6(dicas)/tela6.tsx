import './tela6.css'
import Body from '../../assets/paginas/components_dicas/Body'
import Footer from '../../assets/paginas/components_dicas/Footer'
import Header from '../../assets/paginas/components_dicas/Header'

function Tela6() {
  return (
    <>
      {
        window.scrollTo(0, 1)
      }

      <div>
        <div>
          <Header/>
        </div>
        <body>
          <div>
              <div className='texto_projeto6'>
                <Body/>
              </div>
              <div>
                <Footer/>
              </div>
          </div>
        </body>
      </div>
    </>
  )
}

export default Tela6