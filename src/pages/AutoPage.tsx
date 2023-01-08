import React from 'react';

import AutoBlock from '../components/AutoBlock/AutoBlock';
import OrderList from '../components/OrderList/OrderList';
import { IActivity } from '../types/types';


const AuthorPage: React.FC = () => {
    const activities: IActivity[] = [
        {
            id: 1,
            name: 'ремонт тормоза',
            price: 1000
        },
        {
            id: 2,
            name: 'замена колодки',
            price: 500
        },
    ];

    return (
        <div>
            <AutoBlock />
            <OrderList title="Заказы :" orderItem={activities} />
        </div>
    );
};

export default AuthorPage;