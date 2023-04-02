import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {Spinner} from 'react-bootstrap';

import OrderBlock from '../components/OrderBlock/OrderBlock';
import OrderList from '../components/OrderList/OrderList';
import { IActivity, IAutopart } from '../types/types';
import { fetchActivities } from '../http/activitiesAPI';
import { fetchAutoparts } from '../http/autopartsAPI';
import { Context } from '..';


const OrderPage: React.FC = observer(() => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [activitiesOrder, setActivitiesOrder] = useState<IActivity[]>([]);
    const [autoparts, setAutoparts] = useState<IAutopart[]>([]);
    const [autopartsOrder, setAutopartsOrder] = useState<IAutopart[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [cost, setCost] = useState<number>(0);
    const [activitiesPrice, setActivitiesPrice] = useState<number>(0);
    const [autopartsPrice, setAutopartsPrice] = useState<number>(0);
    const {id} = useParams();
    const {service} = useContext(Context);

    useEffect(() => {
        fetchActivities().then(data => setActivities(data));
        fetchAutoparts().then(data => {
            setAutoparts(data);
            setLoading(false);
        });
    }, [service.toggle]);

    useEffect(() => {
        if (activities.length) {
            setActivitiesOrder(activities.filter(activity => activity.orderId === Number(id)));
        }
    }, [activities]);

    useEffect(() => {
        if (activitiesOrder.length) {
            setActivitiesPrice(calcSum(activitiesOrder));
        }
    }, [activitiesOrder]);

    useEffect(() => {
        if (autopartsOrder.length) {
            setAutopartsPrice(calcSum(autopartsOrder));
        }
    }, [autopartsOrder]);

    useEffect(() => {
        setCost(activitiesPrice + autopartsPrice);
    }, [activitiesPrice, autopartsPrice]);

    useEffect(() => {
        if (autoparts.length) {
            setAutopartsOrder(autoparts.filter(autopart => autopart.orderId === Number(id)));
        }
    }, [autoparts]);

    const calcSum = (arr: (IActivity | IAutopart)[]) => {
        const result = arr.reduce((sum, current) => {
            return sum += current.price;
        }, 0);
        return result;
    };


    return (
        <div>
            <OrderBlock cost={cost} activitiesPrice={activitiesPrice} autopartsPrice={autopartsPrice} />
            {loading ? <Spinner /> : 
                <div>
                    <OrderList title="Работы:" orderItems={activitiesOrder} />
                    <OrderList title="Запчасти:" orderItems={autopartsOrder} />
                </div>
            }
        </div>
    );
});

export default OrderPage;