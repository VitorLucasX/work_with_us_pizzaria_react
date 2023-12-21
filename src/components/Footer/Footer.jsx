import './Footer.sass'
import { FaInstagramSquare, FaTwitterSquare, FaFacebook  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="social">
        <h3>Nos siga nas redes sociais:</h3>
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaInstagramSquare/></a>
        <a href="#"><FaTwitterSquare/></a>
      </div>
    </footer>
  )
}

export default Footer
