import React, {useContext} from 'react';
import { Card } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';

import { IAuto, IOrder } from '../../types/types';
// import { Context } from '../index';

import './orderItem.sass';

interface OrderItemProps {
    order: IOrder;
    onClick: (order: IOrder) => void;
};


const OrderItem: React.FC<OrderItemProps> = observer(({order, onClick}) => {    
    // const {library} = useContext(Context);
    // const autoOrder: IAuto[] = library.autos.filter(auto => auto.id === order.autoId);

    const autoOrder: IAuto[] = [
        {
            id: 1,
            stamp: "Reno",
            model: "Logan",
            year: 2006,
            vin: "XXLSRAG00276SRAG222",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
        }
    ];

    if (autoOrder.length > 0) {
        return (
            <Card 
                className="order-card shadow"
                onClick={() => onClick(order)}
            >
                {order.opened} - {autoOrder[0].stamp} {autoOrder[0].model} - {Array.isArray(order.activities) && order.activities[0].name}... 
                <b>{order.closed}</b>
                {/* {order.opened} - {autoOrder[0].stamp} {autoOrder[0].model} - {autoOrder[0].owner} <b>{order.closed}</b> */}
            </Card>        
        );
    } else {
        return (
            <div></div>
        );
    }
});

export default OrderItem;