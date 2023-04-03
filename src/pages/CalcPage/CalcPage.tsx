import React, {useState, useContext, useEffect} from 'react';
import {Container, Button, Form, Dropdown, Spinner} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IOrder, IMaster, IActivity, IAutopart } from '../../types/types';
import { fetchMasters } from '../../http/mastersAPI';
import { fetchOrders } from '../../http/ordersAPI';
import { fetchActivities } from '../../http/activitiesAPI';
import { fetchAutoparts } from '../../http/autopartsAPI';
import { Context } from '../..';

import './calcPage.sass';


const CalcPage: React.FC = () => {
    // const {service} = useContext(Context);
    const [dateFrom, setDateFrom] = useState<string>('');
    const [dateTo, setDateTo] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [masters, setMasters] = useState<IMaster[]>([]);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [ordersDate, setOrdersDate] = useState<IOrder[]>([]);
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [autoparts, setAutoparts] = useState<IAutopart[]>([]);
    const [filMast, setFilMast] = useState<IMaster>({} as IMaster);

    useEffect(() => {
        fetchMasters().then(data => setMasters(data));
        fetchOrders().then(data => setOrders(data));
        fetchActivities().then(data => setActivities(data));
        fetchAutoparts().then(data => {
            setAutoparts(data);
            setLoading(false);
        });
    }, []);

    function filterMaster(items: IOrder[]) {
        if (filMast.id) {
            return items.filter(item => item.masterId === filMast.id);
        } else {
            return items;
        }
    };

    function filterDate(items: IOrder[]) {
        return items.filter(item => {
            if (item.closed ) {
                return item.closed >= dateFrom && item.closed <= dateTo
            }
        });
    };

    const onCalc = () => {
        if (!dateFrom.trim() || !dateTo.trim()) {
            return alert('Необходимо выбрать период');
        }

        setOrdersDate(filterMaster(filterDate(orders)));

        setVisible(true);
    };

    if (loading) {
        return <Spinner />
    }
    
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
                    <label htmlFor="dateTo" className="mt-3">до какого числа</label> 
                    <Form.Control
                        type="date"
                        value={dateTo}
                        onChange={e => setDateTo(e.target.value)}
                    />
                </div>
                
                <Dropdown className="calc__form_drop">
                    <Dropdown.Toggle variant={"outline-dark"}>{filMast.master || 'Мастер'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {masters.map(master => 
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

            {visible ? 
                <div className="calc__result">
                    <div className="calc__result_title">За период с {dateFrom} по {dateTo} :</div>
                    <div className="calc__result_answer">количество закрытых заказов: <span>{ordersDate.length}</span></div>
                    <div className="calc__result_answer">общая стоимость заказов: <span>{1000} р.</span></div>
                    <div className="calc__result_answer">общая стоимость работ: <span>{1000} р.</span></div>
                    <div className="calc__result_answer">общая стоимость запчастей: <span>{1000} р.</span></div>
                    <ul>
                        {ordersDate.map(order =>
                            <li key={order.id}>{order.opened}</li>
                        )}
                    </ul>
                </div>
                :
                <div></div>
            }
        </Container>
    );
};

export default CalcPage;