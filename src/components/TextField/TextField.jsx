import './TextField.sass'

const TextField = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
      <div className='text-field'>
          <label>{props.label}</label>
          <input value={props.valor} 
          onChange={aoDigitado} 
          required={props.mandatory}
          type="text" placeholder={props.placeholder}
           />
      </div>
  )
}

export default TextField
