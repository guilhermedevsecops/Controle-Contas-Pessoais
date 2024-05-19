import "./style.css";
import SearchBar from "components/SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import  DropDown from 'components/Buttons/DropDown';

function NavBar() {
  return (
    <div className="container-header">
      <nav className="navbar">
        <i className="iconMenu">
          <DropDown />
        </i>
        <div className="title-software">
            <h1>Controle Contas</h1>
        </div>
        <div>
            <i className="userCircle">
                <FontAwesomeIcon icon={faUserCircle} />
            </i>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
}

export default NavBar;
