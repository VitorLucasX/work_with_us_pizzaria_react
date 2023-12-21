import './Colaborators.sass'

const Colaborators = ({ nome, cargo, imagem, corDeFundo}) => {
  return (
    <div className='colaborators'>
        <div className='header' style={{ backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='baseboard'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Colaborators
