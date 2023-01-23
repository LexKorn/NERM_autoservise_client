import React, {useContext} from 'react';
import { Card } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';

import { IAuto, IOrder, IActivity, IStamp, IModel } from '../../types/types';
import { Context } from '../../index';

import './orderItem.sass';

interface OrderItemProps {
    order: IOrder;
    onClick: (order: IOrder) => void;
};


const OrderItem: React.FC<OrderItemProps> = observer(({order, onClick}) => {    
    const {service} = useContext(Context);
    // const autoOrder: IAuto[] = service.autos.filter(auto => auto.id === order.autoId);
    

    const autoOrder: IAuto[] = [
        {
            id: 1,
            stampId: 1,
            modelId: 1,
            year: 2006,
            vin: "XXLSRAG00276SRAG222",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
        }
    ];

    const activitiesOrder: IActivity[] = [
        {
            id: 1,
            name: 'ремонт тормоза',
            price: 1000,
            orderId: 1,
            userId: 1
        },
        {
            id: 2,
            name: 'замена колодки',
            price: 500,
            orderId: 1,
            userId: 1
        },
    ];

    const stampAuto: IStamp[] = service.stamps.filter(stamp => stamp.id === autoOrder[0].stampId);
    const modelAuto: IModel[] = service.models.filter(model => model.id === autoOrder[0].modelId);

    if (stampAuto.length && modelAuto.length) {
        return (
            <Card 
                className="order-card shadow"
                onClick={() => onClick(order)}
            >
                {order.opened} - {stampAuto[0].stamp} {modelAuto[0].model} - {Array.isArray(activitiesOrder) && activitiesOrder[0].name}... ..  {order.cost} / {order.profit}
                <b>{order.closed}</b>
                {/* {autoOrder[0].owner} */}
            </Card>        
        );
    } else {
        return (
            <div></div>
        );
    }
});

export default OrderItem;