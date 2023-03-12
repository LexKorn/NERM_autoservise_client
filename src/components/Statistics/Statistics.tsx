import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';

import { Context } from '../..';

import './statistics.sass';

const Statistics: React.FC = observer(() => {
    const [quantityAutos, setQuantityAutos] = useState<number>(0);
    const [quantityOrders, setQuantityOrders] = useState<number>(0);
    const {service} = useContext(Context);

    useEffect(() => {
        setQuantityAutos(service.autos.length);
        setQuantityOrders(service.orders.length);
    }, [service.autos, service.orders]);

    return (
        <>
            <div className='statistics'>Статистика: заказов: {quantityOrders},  автомобилей: {quantityAutos}</div>
        </>
    );
});

export default Statistics;