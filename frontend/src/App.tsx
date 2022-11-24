
import './App.css'
import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Tela1 from './telas/tela1(main)/tela1'
import Tela2 from './telas/tela2(o_q_fazemos)/tela2'
import Tela3 from './telas/tela3(como_fazemos)/tela3'
import Tela4 from './telas/tela4(crescemos)/tela4'
import Tela5 from './telas/tela5(onde_estamos)/tela5'
import Tela6 from './telas/tela6(dicas)/tela6'
import Creditos from './telas/tela creditos/creditos'


function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element = {<Tela1/>}/>
          <Route path='/o-que-fazemos' element = {<Tela2/>}/>
          <Route path='/como-fazemos' element = {<Tela3/>}/>
          <Route path='/crescemos' element = {<Tela4/>}/>
          <Route path='/onde-estamos' element = {<Tela5/>}/>
          <Route path='/dicas' element = {<Tela6/>}/>
          <Route path='/creditos' element = {<Creditos/>}/>
        </Routes>
      </HashRouter>  
    </>
  )
}

export default App
