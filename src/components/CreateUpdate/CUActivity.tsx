import React from 'react';
import {Container, Button, Form } from 'react-bootstrap';

interface CUNameProps {
    id: number;
    name: string;
    price: number;
    setName: (name: string) => void;
    setPrice: (price: number) => void;
    orderId: number;
    handler: (id: number, name: string, price: number, orderId: number) => Promise<unknown>;
    title: string;
    btnName: string;
    onHide: () => void;
};


const CUName: React.FC<CUNameProps> = ({id, name, setName, price, setPrice, orderId, handler, title, btnName, onHide}) => {
    const onClick = () => {
        if (!name.trim() || !price) {
            return alert('Поля обязательны для заполнения');
        }

        if (btnName === 'Добавить') {
            // @ts-ignore 
            handler(name, price, orderId)
                .then(() => {
                    setName('');
                    setPrice(0);
                    onHide();
                })
                .catch(err => alert(err.response.data.message));
        } else {
            handler(id, name, price, orderId)
                .then(() => {
                    setName('');
                    setPrice(0);
                    onHide();
                })
                .catch(err => alert(err.response.data.message));
        }
    };


    return (
        <Container className="d-flex flex-column justify-content-center">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <Form>
                <label htmlFor="name" className="mt-3">Работа</label> 
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Введите название работы"
                />
                <label htmlFor="name" className="mt-3">Стоимость</label> 
                <Form.Control
                    value={price}
                    onChange={e => setPrice(+e.target.value)}
                    placeholder="Введите стоимость работы"
                />
            </Form>
            <Button variant={"outline-dark"} onClick={onClick} className="mt-3" style={{width: 100}}>{btnName}</Button>
        </Container>
    );
};

export default CUName;