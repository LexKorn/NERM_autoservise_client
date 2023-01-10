import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

// import { updateOrder } from '../../http/orderAPI';
import { IOrder } from '../../types/types';
import CUOrder from '../CreateUpdate/CUOrder';

interface ModalOrderUpdateProps {
    show: boolean;
    onHide: () => void;
    order: IOrder;
};

const updateOrder = (id: number, order: FormData) => {};


const ModalOrderUpdate: React.FC<ModalOrderUpdateProps> = ({show, onHide, order}) => {
    const [opened, setOpened] = useState<string>(order.opened);
    const [closed, setClosed] = useState<string | undefined>(order.closed);
    const [cost, setCost] = useState<number | undefined>(order.cost);
    const [income, setIncome] = useState<number | undefined>(order.income);
    const [profit, setProfit] = useState<number | undefined>(order.profit);
    const [comment, setComment] = useState<string | undefined>(order.comment);
    
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
                    id={order.id}
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
                    // @ts-ignore
                    handler={updateOrder}
                    title='Обновить заказ'
                    btnName='Обновить'
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalOrderUpdate;