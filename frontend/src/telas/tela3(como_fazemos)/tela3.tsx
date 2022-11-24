import './tela3.css'
import Body from '../../assets/paginas/components_comofazemos/Body'
import Footer from '../../assets/paginas/components_comofazemos/Footer'
import Header from '../../assets/paginas/components_comofazemos/Header'

function Tela3() {
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
              <div className='texto_projeto3'>
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

export default Tela3