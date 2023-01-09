import React from 'react';
import { Card } from 'react-bootstrap';

import { IOrder } from '../../types/types';

import './listItem.sass';

interface ListItemOrderProps {
    item: IOrder;
    onDelete: (item: IOrder) => void;
    onEdit: (item: IOrder) => void;
    onClick: (item: IOrder) => void;
};


const ListItemOrder: React.FC<ListItemOrderProps> = ({item, onDelete, onEdit, onClick}) => {
    return (
        <Card 
            className="list-item order-card shadow"
            onClick={() => onClick(item)}
        >
            <div>{item.opened} - {Array.isArray(item.activities) && item.activities[0].name}... {item.cost}</div>
            <div>
                <i className="bi bi-pencil-fill list-item__icon" onClick={() => onEdit(item)}></i>
                <i className="bi bi-trash3-fill list-item__icon" onClick={() => onDelete(item)}></i>
            </div>
        </Card>      
    );
};

export default ListItemOrder;