import React from 'react';
import { Card } from 'react-bootstrap';

import { IOrder } from '../../types/types';

import './listItem.sass';

interface ListItemOrderProps {
    item: IOrder;
    onClick: (item: IOrder) => void;
};


const ListItemOrder: React.FC<ListItemOrderProps> = ({item, onClick}) => {
    return (
        <Card 
            className="list-item order-card shadow"
            onClick={() => onClick(item)}
        >
            <div>{item.opened} - {item.cost}</div>
            {/* <div>{item.opened} - {Array.isArray(item.activities) && item.activities[0].name}... {item.cost}</div> */}
        </Card>      
    );
};

export default ListItemOrder;