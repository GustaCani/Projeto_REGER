import './tela2.css'
import Body from '../../assets/paginas/components_oquefazemos/Body'
import Footer from '../../assets/paginas/components_oquefazemos/Footer'
import Header from '../../assets/paginas/components_oquefazemos/Header'



function Tela2() {
  return (
    <>
      {
        window.scrollTo(0, 1)
      }

      <div>
        <div>
          <Header />
        </div>
        <body>
          <div>
            <div className='texto_projeto2'>
              <Body />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </body>
      </div>
    </>
  )
}

export default Tela2