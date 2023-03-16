import React, {useContext, useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';

import { IAuto, IOrder, IActivity, IStamp, IModel, IMaster } from '../../types/types';
import { fetchMasters } from '../../http/mastersAPI';
import { Context } from '../../index';

import './orderItem.sass';

interface OrderItemProps {
    order: IOrder;
    onClick: (order: IOrder) => void;
};


const OrderItem: React.FC<OrderItemProps> = observer(({order, onClick}) => {    
    const {service} = useContext(Context);
    const [modelAuto, setModelAuto] = useState<IModel[]>([]);
    const [stampAuto, setStampAuto] = useState<IStamp[]>([]);
    const [autoOrder, setAutoOrder] = useState<IAuto[]>([]);
    const [activitiesOrder, setActivitiesOrder] = useState<IActivity[]>([]);

    useEffect(() => {
        setAutoOrder(service.autos.filter(auto => auto.id === order.autoId));
        setActivitiesOrder(service.activities.filter(activity => activity.orderId === order.id));
        fetchMasters().then(data => service.setMasters(data));
    }, []);

    useEffect(() => {
        if (autoOrder.length) {
            setModelAuto(service.models.filter(model => model.id === autoOrder[0].modelId));
            setStampAuto(service.stamps.filter(stamp => stamp.id === autoOrder[0].stampId));
        }
    }, [autoOrder]);

    const masterOrder: IMaster[] = service.masters.filter(master => master.id === order.masterId);


    if (stampAuto.length && modelAuto.length && masterOrder.length) {
        return (
            <Card 
                className="order-card shadow"
                onClick={() => onClick(order)}
            >
                <div className="order-card__common">
                    <div className="order-card__opened">{order.opened} <span>-</span></div>
                    <div className="order-card__auto">{stampAuto[0].stamp} {modelAuto[0].model} <span>-</span></div>
                    <div className="order-card__activity">{activitiesOrder.length ? activitiesOrder[0].name.substring(0, 17) : ''}...</div>
                    <div><span>|</span> {masterOrder[0].master}</div>
                </div>                
                <div className="order-card__closed">{order.closed}</div>
            </Card>        
        );
    } else {
        return (
            <div></div>
        );
    }
});

export default OrderItem;