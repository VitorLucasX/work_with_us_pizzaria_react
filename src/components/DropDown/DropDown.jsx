import './DropDown.sass'

const DropDown = (props) => {
  return (
    <div className='drop-down'>
      <label>{props.label}</label>
        <select 
        onChange={evento => props.aoAlterado(evento.target.value)} 
        required={props.mandatory} 
        value={props.valor}>
        <option value=''></option>
        {props.itens.map(item => {
            return <option key={item}>{item}</option>
          })}
        </select>
    </div>
  )
}

export default DropDown
