import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import OrderBlock from '../components/OrderBlock/OrderBlock';
import OrderList from '../components/OrderList/OrderList';
import { IActivity, IAutopart } from '../types/types';
import { fetchActivities } from '../http/activitiesAPI';
import { fetchAutoparts } from '../http/autopartsAPI';


const OrderPage: React.FC = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [activitiesOrder, setActivitiesOrder] = useState<IActivity[]>([]);
    const [autoparts, setAutoparts] = useState<IAutopart[]>([]);
    const [autopartsOrder, setAutopartsOrder] = useState<IAutopart[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams();

    useEffect(() => {
        fetchActivities().then(data => setActivities(data));
        fetchAutoparts().then(data => {
            setAutoparts(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (activities.length) {
            setActivitiesOrder(activities.filter(activity => activity.orderId === Number(id)));
        }
    }, [activities]);

    useEffect(() => {
        if (autoparts.length) {
            setAutopartsOrder(autoparts.filter(autopart => autopart.orderId === Number(id)));
        }
    }, [autoparts]);


    return (
        <div>
            <OrderBlock />
            {loading ? <Spinner /> : 
                <div>
                    <OrderList title="Работы:" orderItems={activitiesOrder} />
                    <OrderList title="Запчасти:" orderItems={autopartsOrder} />
                </div>
            }
        </div>
    );
};

export default OrderPage;