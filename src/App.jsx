import { useState } from 'react'
import Form from './components/Form/Form'
import Positions from './components/Positions/Positions'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/banner'

function App() {

  const cargos = [
    {
      nome: 'Pizzaiolo',
      corPrimaria: '#B44418',
      corSecundaria: '#D1A674',
    },
    {
      nome: 'Garçom',
      corPrimaria: '#6D6D04',
      corSecundaria: '#EBE4C4',
    },
    {
      nome: 'Caixa',
      corPrimaria: '#EBE4C4',
      corSecundaria: '#D1A674',
    },
    {
      nome: 'Serviços Gerais',
      corPrimaria: '#F1B42F',
      corSecundaria: '#6D6D04',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
       <Banner/>
       <Form cargos={cargos.map(cargo => cargo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
       {cargos.map(cargo => <Positions 
       key={cargo.nome} 
       nome={cargo.nome} 
       corPrimaria={cargo.corPrimaria} 
       corSecundaria={cargo.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.cargo === cargo.nome)}
       />)}
       <Footer/>
    </div>
  )
}

export default App
