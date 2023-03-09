import React from 'react';
import { Card } from 'react-bootstrap';

import { IOrder, IActivity } from '../../types/types';

import './listItem.sass';

interface ListItemOrderProps {
    item: IOrder;
    onClick: (item: IOrder) => void;
};


const ListItemOrder: React.FC<ListItemOrderProps> = ({item, onClick}) => {
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


    return (
        <Card 
            className="list-item order-card shadow"
            onClick={() => onClick(item)}
        >
            {item.opened} - {Array.isArray(activitiesOrder) && activitiesOrder[0].name}... - мастер: {item.masterId} <b>{item.closed}</b>
            {/* {item.opened} - {Array.isArray(activitiesOrder) && activitiesOrder[0].name}... - {item.cost} / {item.profit}  <b>{item.closed}</b> */}
            {/* <div>{item.opened} - {Array.isArray(item.activities) && item.activities[0].name}... {item.cost}</div> */}
        </Card>      
    );
};

export default ListItemOrder;