import ModalExcluir from 'components/Modal/Excluir';
import { useState } from 'react';
import ReactModal from 'react-modal';
import './style.css';

function RemoveBtn(){
    const [isRemoveVisible, setIsModalRemoveVisible] = useState(false);

    function handleRemoveIsOpen(){
        setIsModalRemoveVisible(true)
    }

    function handleRemoveIsClose(){
        setIsModalRemoveVisible(false)
    }

    return(
        <div>

            <button className='remove' onClick={handleRemoveIsOpen}>Remover</button>
            <ReactModal
            isOpen={isRemoveVisible}
            onRequestClose={handleRemoveIsClose}>
                <button onClick={handleRemoveIsClose}>X</button>
                <ModalExcluir />
            </ReactModal>
        </div>
    );
}

export default RemoveBtn;