import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Button, Form, Dropdown} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

// import { Context } from '../index';
// import { fetchCountries } from '../http/countryAPI';
// import { AUTHORS_ROUTE } from '../utils/consts';
// import ModalCountry from './Modals/ModalCountry';

interface CUOrderProps {
    id: number;
    opened: string;
    closed?: string;
    cost?: number;
    income?: number;
    profit?: number;
    comment: string;
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


const CUOrder: React.FC<CUOrderProps> = observer(({id, opened, closed, cost, income, profit, comment, setOpened, setClosed, setCost, setIncome, setProfit, setComment, handler, title, btnName}) => {
    // const {library} = useContext(Context);
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    // useEffect(() => {
    //     fetchCountries().then(data => library.setCountries(data));
    // }, [visible]);


    const onClick = () => {
        // if (!name.trim() || !description.trim()) {
        //     return alert('Все поля обязательны для заполнения');
        // } else if (!file) {
        //     return alert('Фото необходимо загрузить');
        // } else if (!library.selectedCountry.id) {
        //     return alert('Страну необходимо указать');        
        // }

        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('description', description);
        // formData.append('photo', file);
        // formData.append('countryId', `${library.selectedCountry.id}`);

        // if (btnName === 'Добавить') {
        //     // @ts-ignore 
        //     handler(formData)
        //         .then(() => {
        //             library.setSelectedCountry({
        //                 id: 0,
        //                 name: '',
        //                 userId: 0
        //             });
        //             navigate(AUTHORS_ROUTE);
        //         })
        //         .catch(err => alert(err.response.data.message));
        // } else {
        //     handler(id, formData)
        //         .then(() => {
        //             library.setSelectedCountry({
        //                 id: 0,
        //                 name: '',
        //                 userId: 0
        //             });
        //             navigate(AUTHORS_ROUTE);
        //         })
        //         .catch(err => alert(err.response.data.message));
        // }
    };


    return (
        <Container className="d-flex justify-content-center">
            <div>
                <h1>{title}</h1>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={opened}
                        onChange={e => setOpened(e.target.value)}
                        placeholder="Когда открыт заказ"
                    />
                    <Form.Control
                        className="mt-3"
                        value={closed}
                        onChange={e => setClosed(e.target.value)}
                        placeholder="Когда закрыт заказ"
                    />  
                    <Form.Control
                        className="mt-3"
                        value={cost}
                        type="number"
                        onChange={e => setCost(+e.target.value)}
                        placeholder="Стоимость"
                    />
                    <Form.Control
                        className="mt-3"
                        value={income}
                        type="number"
                        onChange={e => setIncome(+e.target.value)}
                        placeholder="Оплачено"
                    />
                    <Form.Control
                        className="mt-3"
                        value={profit}
                        type="number"
                        onChange={e => setProfit(+e.target.value)}
                        placeholder="Прибыль"
                    />
                    <Form.Control
                        className="mt-3"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Комментарий"
                    /> 
                                      
                    <Dropdown className="mt-3 mb-3">
                        {/* <Dropdown.Toggle variant={"outline-dark"}>{library.selectedCountry.name || 'Выберите страну'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {library.countries.map(country => 
                                <Dropdown.Item 
                                    onClick={() => library.setSelectedCountry(country)} 
                                    key={country.id} >
                                        {country.name}
                                </Dropdown.Item>                                
                            )}
                            <Dropdown.Item onClick={() => setVisible(true)} >Добавить / удалить страну</Dropdown.Item>
                        </Dropdown.Menu> */}
                    </Dropdown>            
                </Form>
                <Button variant={"outline-dark"} onClick={onClick} className="mt-3">{btnName}</Button>           
            </div>   
            {/* <ModalCountry show={visible} onHide={() => setVisible(false)} /> */}
        </Container>
    );
});

export default CUOrder;