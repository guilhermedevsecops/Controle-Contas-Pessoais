import ModalAlt from 'components/Modal/Alterar';
import { useState } from 'react';
import ReactModal from 'react-modal';
import './style.css';

function AlterateBtn(){

    const [isAlteretedVisible, setModalAlterate] = useState(false);

    function handleOpenAlterate(){
        setModalAlterate(true)
    }

    function handleCloseAlterate(){
        setModalAlterate(false)
    }

    return(
        <div>
            <button className="alterar" onClick={handleOpenAlterate} >Alterar</button>
            <ReactModal
            isOpen = {isAlteretedVisible}
            onRequestClose = {handleCloseAlterate}>
                <button className="closeButton" onClick={handleCloseAlterate}>X</button>
                <ModalAlt />
            </ReactModal>
        </div>
    );
}

export default AlterateBtn;
