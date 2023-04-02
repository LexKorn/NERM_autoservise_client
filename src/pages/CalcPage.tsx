import React, {useState, useContext, useEffect} from 'react';
import {Container, Button, Form, Dropdown, Modal} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IAuto, IOrder, IStamp, IModel, IMaster } from '../types/types';
import { Context } from '..';

import './calcPage.sass';


const CalcPage: React.FC = () => {
    const {service} = useContext(Context);
    const [dateFrom, setDateFrom] = useState<string>('');
    const [dateTo, setDateTo] = useState<string>('');
    const [filMast, setFilMast] = useState<IMaster>({} as IMaster);

    function filterMaster(items: IOrder[]) {
        if (filMast.id) {
            return items.filter(item => item.masterId === filMast.id);
        } else {
            return items;
        }
    };

    const onCalc = () => {};
    
    return (
        <Container className="calc">
            <Helmet>
                <title>Калькулятор</title>
                <meta name="description" content="Калькулятор" />
            </Helmet>

            <h3 className="calc__title">Выберите период, в который были закрыты заказы:</h3>
            <Form className="calc__form">
                <div className="calc__form_date">
                    <label htmlFor="dateFrom" className="mt-3">от какого числа включительно</label> 
                    <Form.Control
                        type="date"
                        value={dateFrom}
                        onChange={e => setDateFrom(e.target.value)}
                    />
                </div>
                <div className="calc__form_date">
                    <label htmlFor="dateTo" className="mt-3">до какого числа включительно</label> 
                    <Form.Control
                        type="date"
                        value={dateTo}
                        onChange={e => setDateTo(e.target.value)}
                    />
                </div>
                
                <Dropdown className="calc__form_drop">
                    <Dropdown.Toggle variant={"outline-dark"}>{filMast.master || 'Мастер'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {service.masters.map(master => 
                            <Dropdown.Item 
                                onClick={() => setFilMast(master)} 
                                key={master.id} >
                                    {master.master}
                            </Dropdown.Item>                                
                        )}
                        <Dropdown.Item onClick={() => setFilMast({} as IMaster)} >Все</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </Form>
            <Button variant={"outline-dark"} onClick={onCalc} className="calc__btn">Сделать расчёт</Button> 
        </Container>
    );
};

export default CalcPage;