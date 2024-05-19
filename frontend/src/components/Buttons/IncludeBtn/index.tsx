import { useState } from 'react';
import './style.css';
import Modal from '../../Modal/Cadastro';
import ReactModal from 'react-modal';

function IncludeBtn(){
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleOpenModal(){
        setIsModalVisible(true)
    }
    function handleCloseModal(){
        setIsModalVisible(false)
    }
    
    return(
        <div>
            <button className='include' onClick={handleOpenModal}>Incluir</button>
            <ReactModal
            isOpen = {isModalVisible}
            onRequestClose ={handleCloseModal}>
                <button className="closeButton" onClick={handleCloseModal}>X</button>
                <Modal />
            </ReactModal> 
        </div>
    );
}

export default IncludeBtn;