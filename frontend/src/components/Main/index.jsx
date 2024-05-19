import './style.css';
import AlterateBtn from 'components/Buttons/AlterateBtn';
import CancelBtn from 'components/Buttons/RemoveBtn';
import IncludeBtn from 'components/Buttons/IncludeBtn';
import Form from 'components/Table';

function Main(){
    return(
        <div className='container'>
            <div className='buttons'>
                <IncludeBtn />
                <AlterateBtn />
                <CancelBtn />
            </div>
            <section className='table'>
                <h2>Contas</h2>
                <Form />
            </section>
        </div>
    );
}

export default Main;