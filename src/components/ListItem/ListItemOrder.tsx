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
            {item.opened} - {activitiesOrder.length ? activitiesOrder[0].name : ''}... | {masterOrder[0].master} <b>{item.closed}</b>
        </Card>      
    );
};

export default ListItemOrder;