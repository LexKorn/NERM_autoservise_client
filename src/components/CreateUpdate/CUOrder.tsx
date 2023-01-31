import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import {Container, Button, Form} from 'react-bootstrap';
// import { observer } from 'mobx-react-lite';

interface CUOrderProps {
    id: number;
    opened: string;
    closed?: string;
    cost?: number;
    income?: number;
    profit?: number;
    comment?: string;
    autoId: string | undefined;
    setOpened: (opened: string) => void;
    setClosed: (closed: string) => void;
    setCost: (cost: number) => void;
    setIncome: (income: number) => void;
    setProfit: (profit: number) => void;
    setComment: (comment: string) => void;
    handler: (id: number, auto: FormData) => Promise<unknown>;
    title: string;
    btnName: string;
};


const CUOrder: React.FC<CUOrderProps> = ({id, opened, closed, cost, income, profit, comment, autoId, setOpened, setClosed, setCost, setIncome, setProfit, setComment, handler, title, btnName}) => {
    // const navigate = useNavigate();
    // const [visible, setVisible] = useState<boolean>(false);


    const onClick = () => {
        if (!opened.trim()) {
            return alert('Дата открытия заказа обязательна для заполнения');
        }

        const formData = new FormData();
        formData.append('opened', opened);
        // @ts-ignore 
        formData.append('closed', closed);
        formData.append('cost', `${cost}`);
        formData.append('income', `${income}`);
        formData.append('profit', `${profit}`);
        // @ts-ignore 
        formData.append('comment', comment);
        // @ts-ignore 
        formData.append('autoId', autoId);

        if (btnName === 'Добавить') {
            // @ts-ignore 
            handler(formData)
                // .then(() => onHide())
                .catch(err => alert(err.response.data.message));
        } else {
            handler(id, formData)
                // .then(() => onHide())
                .catch(err => alert(err.response.data.message));
        }
    };


    return (
        <Container className="d-flex justify-content-center">
            <div>
                <h1>{title}</h1>
                <Form>
                    <label htmlFor="opened" className="mt-3">Открытие</label> 
                    <Form.Control
                        value={opened}
                        onChange={e => setOpened(e.target.value)}
                        placeholder="Когда открыт заказ"
                    />
                    <label htmlFor="closed" className="mt-3">Закрытие</label> 
                    <Form.Control
                        value={closed}
                        onChange={e => setClosed(e.target.value)}
                        placeholder="Когда закрыт заказ"
                    />  
                    <label htmlFor="cost" className="mt-3">Стоимость</label> 
                    <Form.Control
                        value={cost}
                        type="number"
                        onChange={e => setCost(+e.target.value)}
                        placeholder="Стоимость"
                    />
                    <label htmlFor="income" className="mt-3">Оплачено</label> 
                    <Form.Control
                        value={income}
                        type="number"
                        onChange={e => setIncome(+e.target.value)}
                        placeholder="Оплачено"
                    />
                    <label htmlFor="profit" className="mt-3">Прибыль</label> 
                    <Form.Control
                        value={profit}
                        type="number"
                        onChange={e => setProfit(+e.target.value)}
                        placeholder="Прибыль"
                    />
                    <label htmlFor="comment" className="mt-3">Комментарий</label> 
                    <Form.Control as="textarea"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Комментарий"
                        maxLength={700}
                    />       
                </Form>
                <Button variant={"outline-dark"} onClick={onClick} className="mt-3">{btnName}</Button>           
            </div>
        </Container>
    );
};

export default CUOrder;