import React from 'react';

import AutoBlock from '../components/AutoBlock/AutoBlock';
import OrderList2 from '../components/OrderList/OrderList2';
import { IOrder } from '../types/types';


const AuthorPage: React.FC = () => {
    const orders: IOrder[] = [
        {
            id: 1,
            opened: '07.01.2023',
            closed: '09.01.2023',
            activities: [
                {
                    id: 1,
                    name: 'ремонт тормаза',
                    price: 1000
                }
            ],
            autoparts: [
                {
                    id: 1,
                    name: 'колодка',
                    price: 700
                }
            ],
            cost: 2000,
            income: 2000,
            profit: 1300,
            comment: 'Ну и дела',
            userId: 1,
            autoId: 1
        },
        {
            id: 2,
            opened: '05.01.2023',
            activities: [
                {
                    id: 2,
                    name: 'ремонт генератора',
                    price: 2000
                }
            ],
            autoparts: [
                {
                    id: 1,
                    name: 'ремень',
                    price: 500
                }
            ],
            cost: 2500,
            income: 2500,
            profit: 2000,
            userId: 1,
            autoId: 2
        },
        {
            id: 3,
            opened: '08.01.2023',
            userId: 1,
            autoId: 3
        }
    ];

    return (
        <div>
            <AutoBlock />
            <OrderList2 title="Заказы :" orderItem={orders} />
        </div>
    );
};

export default AuthorPage;