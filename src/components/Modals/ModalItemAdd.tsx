import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

// import { createName } from '../../http/nameAPI';
import CUItem from '../CreateUpdate/CUItem';

interface ModalItemAddProps {
    show: boolean;
    onHide: () => void;
    orderId: number;
    title: string;
};

const createActivity = () => {console.log('сработал РАбота')};


const ModalItemAdd: React.FC<ModalItemAddProps> = ({show, onHide, orderId, title}) => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const handler = () => {
        if (title === 'Работы:') {
            createActivity();
        } else if (title === 'Заказы:') {
            alert('Тут должны быть заказы');
        }
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            // @ts-ignore
            size="md"
            centered
            >
            <Modal.Body>
                <CUItem 
                    id={0}
                    name={name}
                    price={price}
                    setName={setName}
                    setPrice={setPrice}
                    orderId={orderId}
                    // @ts-ignore
                    handler={handler}
                    title={title === 'Работы:' ? 'Добавить работу' : 'Добавить запчасть'}
                    btnName='Добавить'
                    onHide={onHide}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalItemAdd;