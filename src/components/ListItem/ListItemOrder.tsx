import React, {useContext, useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';

import { IOrder, IActivity, IMaster } from '../../types/types';
import { Context } from '../../index';

import './listItem.sass';

interface ListItemOrderProps {
    item: IOrder;
    onClick: (item: IOrder) => void;
};


const ListItemOrder: React.FC<ListItemOrderProps> = ({item, onClick}) => {
    const {service} = useContext(Context);
    const [activitiesOrder, setActivitiesOrder] = useState<IActivity[]>([]);

    useEffect(() => {
        setActivitiesOrder(service.activities.filter(activity => activity.orderId === item.id));
    }, []);

    const masterOrder: IMaster[] = service.masters.filter(master => master.id === item.masterId);

    return (
        <Card 
            className="list-item order-card shadow"
            onClick={() => onClick(item)}
        >
            <div className="order-card__common">
                <div className="order-card__opened">{item.opened} <span>-</span></div>
                <div className="order-card__activity">{activitiesOrder.length ? activitiesOrder[0].name.substring(0, 17) : ''}...</div>
                <div><span>|</span> {masterOrder.length ? masterOrder[0].master : ''}</div>
            </div>                
            <div className="order-card__closed">{item.closed}</div>
        </Card>      
    );
};

export default ListItemOrder;