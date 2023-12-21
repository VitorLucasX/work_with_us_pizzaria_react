import Colaborators from '../Colaborators/Colaborators'
import './Positions.sass'

const Positions = (props) => {
  const css = { backgroundColor: props.corSecundaria }

  return (
      (props.colaboradores.length > 0) ? <section className='positions' style={css}>
          <h3 style={{ borderColor: props.corPrimaria }} className='positions-name'>{props.nome}</h3>
          <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborators 
            corDeFundo={props.corPrimaria} key={colaborador.nome} 
            nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
          </div>
      </section>
      : '' 
    )
}

export default Positions
