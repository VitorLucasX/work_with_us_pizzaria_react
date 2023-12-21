import './CVAnnex.sass'

const CVAnnex = (props) => {
  return (
    <div className='cv-annex'>
        <label>{props.label}</label>
        <input 
        type="file"
        onChange={evento => props.aoAlterado(evento.target.value)} 
        required={props.mandatory} 
        value={props.valor}/>
    </div>
  )
}

export default CVAnnex
