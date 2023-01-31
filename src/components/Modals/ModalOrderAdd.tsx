import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

import { createOrder } from '../../http/ordersAPI';
import CUOrder from '../CreateUpdate/CUOrder';

interface ModalOrderAddProps {
    show: boolean;
    onHide: () => void;
};


const ModalOrderAdd: React.FC<ModalOrderAddProps> = ({show, onHide}) => {
    const [opened, setOpened] = useState<string>('');
    const [closed, setClosed] = useState<string | undefined>('');
    const [cost, setCost] = useState<number | undefined>(undefined);
    const [income, setIncome] = useState<number | undefined>(undefined);
    const [profit, setProfit] = useState<number | undefined>(undefined);
    const [comment, setComment] = useState<string | undefined>('');
    const {id} = useParams<{id: string}>();
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            // @ts-ignore
            size="md"
            centered
            >
            <Modal.Body>
                <CUOrder 
                    id={0}
                    opened={opened}
                    closed={closed}
                    cost={cost}
                    income={income}
                    profit={profit}
                    comment={comment}
                    setOpened={setOpened}
                    setClosed={setClosed}
                    setCost={setCost}
                    setIncome={setIncome}
                    setProfit={setProfit}
                    setComment={setComment}
                    autoId={id}
                    // @ts-ignore
                    handler={createOrder}
                    title='Добавить заказ'
                    btnName='Добавить'
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalOrderAdd;