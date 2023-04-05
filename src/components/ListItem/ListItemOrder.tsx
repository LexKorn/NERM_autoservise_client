import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';

import { IOrder, IActivity, IMaster } from '../../types/types';

import { fetchActivities } from '../../http/activitiesAPI';
import { fetchMasters } from '../../http/mastersAPI';

import './listItem.sass';

interface ListItemOrderProps {
    item: IOrder;
    onClick: (item: IOrder) => void;
};


const ListItemOrder: React.FC<ListItemOrderProps> = ({item, onClick}) => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [activitiesOrder, setActivitiesOrder] = useState<IActivity[]>([]);
    const [masters, setMasters] = useState<IMaster[]>([]);
    const [mastersOrder, setMastersOrder] = useState<IMaster[]>([]);

    useEffect(() => {
        fetchActivities().then(data => setActivities(data));
        fetchMasters().then(data => setMasters(data));
    }, []);

    useEffect(() => {
        setActivitiesOrder(activities.filter(activity => activity.orderId === item.id));
    }, [activities]);

    useEffect(() => {
        setMastersOrder(masters.filter(master => master.id === item.masterId));
    }, [masters]);

    return (
        <Card 
            className="list-item order-card shadow"
            onClick={() => onClick(item)}
        >
            <div className="order-card__common">
                <div className="order-card__opened">{item.opened} <span>-</span></div>
                <div className="order-card__activity">{activitiesOrder.length ? activitiesOrder[0].name.substring(0, 17) : ''}...</div>
                <div><span>|</span> {mastersOrder.length ? mastersOrder[0].master : ''}</div>
            </div>                
            <div className="order-card__closed">{item.closed}</div>
        </Card>      
    );
};

export default ListItemOrder;