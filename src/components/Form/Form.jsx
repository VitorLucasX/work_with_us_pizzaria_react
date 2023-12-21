import { useState } from 'react'
import Button from '../Button/Button'
import CVAnnex from '../CVAnnex/CVAnnex'
import DropDown from '../DropDown/DropDown'
import TextField from '../TextField/TextField'
import Text from '../Text/Text'
import './Form.sass'

const Form = (props) => {
  const [nome, setNome] = useState ('')
  const [experiencia, setExperiencia] = useState ('')
  const [imagem, setImagem] = useState ('')
  const [cargo, setCargo] = useState ('')
  const [curriculo, setCurriculo] = useState ('')

  const save = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      experiencia,
      imagem,
      cargo,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setExperiencia('')
  }

  return (
      <section className='formulario'>
          <form onSubmit={save}>
            <h2>Trabalhe conosco</h2>
            <TextField 
                mandatory={true} 
                label="Nome completo" 
                placeholder="Digite seu nome completo.."
                value={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <TextField 
                mandatory={true} 
                label="Experiência relevante"
                placeholder="Digite uma experiência.."
                value={experiencia}
                aoAlterado={valor => setExperiencia(valor)}
             />
            <TextField 
                mandatory={true} 
                label="Foto de Perfil"
                placeholder="Digite o endereço da imagem.."
                value={imagem}
                aoAlterado={valor => setImagem(valor)}
             />
             <DropDown 
                mandatory={true} 
                label="Cargo desejado" 
                itens={props.cargos}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
             />
             <CVAnnex 
                mandatory={true} 
                label="Currículo"
                valor={curriculo}
                aoAlterado={valor => setCurriculo(valor)}
              />
            <Button>Enviar</Button>
            <Text/>
          </form>
      </section>
  )
}

export default Form
