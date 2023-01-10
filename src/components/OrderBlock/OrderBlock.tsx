import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IOrder, IAuto } from '../../types/types';
import { AUTO_ROUTE, AUTOS_ROUTE, NOTFOUND_ROUTE } from '../../utils/consts';
// import { deleteOrder, fetchOneOrder } from '../../http/orderAPI';
// import { fetchCountries } from '../../http/countryAPI';
// import {Context} from '../../index';
import ModalOrderUpdate from '../Modals/ModalOrderUpdate';

import './orderBlock.sass';


const OrderBlock: React.FunctionComponent = () => {
    // const {library} = useContext(Context);
    // const [order, setOrder] = useState<IOrder>({} as IOrder);    
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    const order: IOrder = {
        id: 1,
        opened: '07.01.2023',
        closed: '09.01.2023',
        // activities: [
        //     {
        //         id: 1,
        //         name: 'ремонт тормаза',
        //         price: 1000
        //     }
        // ],
        // autoparts: [
        //     {
        //         id: 1,
        //         name: 'колодка',
        //         price: 700
        //     }
        // ],
        cost: 2000,
        income: 2000,
        profit: 1300,
        comment: 'Ну и дела',
        userId: 1,
        autoId: 1
    };

    const auto: IAuto = {
            id: 1,
            stamp: "Reno",
            model: "Logan",
            year: 2006,
            vin: "XXLSRAG00276SRAG222",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
    };
    
    // useEffect(() => {
    //     fetchCountries().then(data => library.setCountries(data));
    //     fetchOneOrder(id)
    //         .then(data => setOrder(data))
    //         .catch(() => navigate(NOTFOUND_ROUTE))
    //         .finally(() => setLoading(false));
    // }, []);

    // useEffect(() => {
    //     library.setSelectedCountry(countryOrder[0]);
    // }, [order]);

    // const countryOrder: ICountry[] = library.countries.filter(country => country.id === order.countryId);

    const removeOrder = () => {
        if (window.confirm('Вы действительно хотите заказ?')) {
            // deleteOrder(order.id);
            // navigate(AUTHORS_ROUTE);
        }        
    };

    // if (loading) {
    //     return <Spinner animation={"border"}/>
    // }

    return (
        <div>
            <Helmet>
                <title>{order.opened} {auto.stamp} {auto.model}</title>
                <meta name="description" content={`${order.opened} ${auto.stamp} ${auto.model}`} />
            </Helmet>

            <div className="order">
                    <div 
                        className="order__name"
                        onClick={() => {navigate(AUTO_ROUTE + `/${order.autoId}`)}}  // (AUTO_ROUTE + `/${authorBook[0].id}`)
                    >
                        {auto.stamp} {auto.model} {auto.stateNumber}
                    </div>
                    <div className="order__description">заказ открыт: {order.opened}</div>
                    {order.closed && <div className="order__description">заказ закрыт: {order.closed}</div>}
                    {order.cost && <div className="order__description">стоимость: {order.cost}p</div>}
                    {order.income && <div className="order__description">оплачено: {order.income}p</div>}
                    {order.profit && <div className="order__description">прибыль: {order.profit}p</div>}
                    {order.comment && <div className="order__description">комментарий: {order.comment}</div>}
                    
                    <Button className="order__button" variant={"outline-primary"} onClick={() => setVisible(true)}>Редактировать</Button>
                    <Button className="order__button" variant={"outline-danger"} onClick={removeOrder}>Удалить</Button>
            </div>
            
            <ModalOrderUpdate 
                show={visible} 
                onHide={() => setVisible(false)} 
                order={order}
            />
        </div>
    );
};

export default OrderBlock;