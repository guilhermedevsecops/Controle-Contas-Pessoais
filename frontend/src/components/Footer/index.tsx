import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <div className="begin">
        <ul>
          <h3>Inicio</h3>
          <a href=""><li>Home</li></a>
          <a href=""><li>Editar conta</li></a>
        </ul>
      </div>
      <div className="about">
        <ul>
          <h3>About</h3>
          <a href=""><li>Informações Software</li></a>
          <a href=""><li>Contato</li></a>
        </ul>
      </div>
      <div className="suport">
        <ul>
          <h3>Suporte</h3>
          <a href=""><li>Chat</li></a>
        </ul>
      </div>
      <div className="icons-social-medias">
        <ul>
          <li><a href=""><i className="Facebook">Facebook</i></a></li>
          <li><a href=""><i className="Instagram">Instagram</i></a></li>
          <li><a href=""><i className="Github">Github</i></a></li>
          <li><a href=""><i className="Linkedin">Linkedin</i></a></li>
        </ul>
      </div>
      <div className="developer">
        <p>Desenvolvido por &copy Guilherme H. S. Jesus</p>
      </div>
    </div>
    
  );
}

export default Footer;
