import React from 'react';
import {Button, Form, Container} from 'react-bootstrap';

interface CUTestProps {
    id: number;
    name: string;
    phone: string;
    country: string;
    setName: (name: string) => void;
    setPhone: (phone: string) => void;
    setCountry: (country: string) => void;
    handler: (id: number, test: FormData) => Promise<unknown>;
    title: string;
    btnName: string;
};


const CUTest: React.FC<CUTestProps> = ({id, name, phone, country, setName, setPhone, setCountry, handler, title, btnName}) => {

    const onClick = () => {
        if (!name.trim() || !phone.trim() || !country.trim()) {
            return alert('Все поля обязательны для заполнения');
        } 
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('country', country);

        if (btnName === 'Добавить') {
            // @ts-ignore
            // handler(formData)
            handler(name, phone, country)
                .then(() => {
                    setName('');
                    setPhone('');
                    setCountry('');
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === 'Обновить') {
            handler(id, formData)
                .then(() => {
                    setName('');
                    setPhone('');
                    setCountry('');
                })
                .catch(err => alert(err.response.data.message));
        }        
    };


    return (
        <Container className="d-flex justify-content-center">
            <div>
                <h1>{title}</h1>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите имя"
                    />
                    <Form.Control
                        className="mt-3"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Введите телефон"
                    />
                    <Form.Control
                        className="mt-3"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        placeholder="Введите страну"
                    />
                </Form>
                <Button variant={"outline-dark"} onClick={onClick} className="mt-3">{btnName}</Button>
            </div>
        </Container>
    );
};

export default CUTest;