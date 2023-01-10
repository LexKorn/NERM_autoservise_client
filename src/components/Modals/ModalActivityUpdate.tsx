import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

// import { createName } from '../../http/nameAPI';
import CUActivity from '../CreateUpdate/CUActivity';
import { IActivity } from '../../types/types';

interface ModalActivityUpdateProps {
    show: boolean;
    onHide: () => void;
    orderId: number;
    activity: IActivity;
};

const updateActivity = () => {};


const ModalActivityUpdate: React.FC<ModalActivityUpdateProps> = ({show, onHide, orderId, activity}) => {
    const [name, setName] = useState<string>(activity.name);
    const [price, setPrice] = useState<number>(activity.price);
    
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
                    id={activity.id}
                    name={name}
                    price={price}
                    setName={setName}
                    setPrice={setPrice}
                    orderId={orderId}
                    // @ts-ignore
                    handler={updateActivity}
                    title='Обновить работу'
                    btnName='Обновить'
                    onHide={onHide}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalActivityUpdate;