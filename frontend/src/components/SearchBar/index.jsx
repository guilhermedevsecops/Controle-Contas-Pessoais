import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar(){
    return(
        <div className='search-bar'>
            <input className="search-camp" placeholder="Digite uma Conta a ser Pesquisada" type="text" name="search" id="search" />
            <button class="search-button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
}

export default SearchBar;