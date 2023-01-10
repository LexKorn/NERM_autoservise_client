import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

// import { createName } from '../../http/nameAPI';
import CUActivity from '../CreateUpdate/CUActivity';

interface ModalActivityAddProps {
    show: boolean;
    onHide: () => void;
    orderId: number;
};

const createActivity = () => {};


const ModalActivityAdd: React.FC<ModalActivityAddProps> = ({show, onHide, orderId}) => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            // @ts-ignore
            size="md"
            centered
            >
            <Modal.Body>
                <CUActivity 
                    id={0}
                    name={name}
                    price={price}
                    setName={setName}
                    setPrice={setPrice}
                    orderId={orderId}
                    // @ts-ignore
                    handler={createActivity}
                    title='Добавить работу'
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

export default ModalActivityAdd;