import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Helmet} from "react-helmet";

import List from '../components/List/List';
import OrderItem from '../components/OrderItem/OrderItem';
// import FilterPanel from '../components/FilterPanel/FilterPanel';
// import Statistics from '../components/Statistics/Statistics';
import { IOrder } from '../types/types';
// import { fetchOrders } from '../http/orderAPI';
// import { fetchAuthors } from '../http/authorAPI';
// import { Context } from '../index';


const MainPage: React.FC = observer(() => {
    // const {library} = useContext(Context);
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [filter, setFilter] = useState<string>('Все');
    const navigate = useNavigate();

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

    // useEffect(() => {
    //     getOrders();
    //     fetchAuthors().then(data => library.setAuthors(data));
    // }, []);
  
    // function getOrders() {
    //     fetchOrders()
    //         .then(data => library.setOrders(data))
    //         .catch(err => alert(err.message))
    //         .finally(() => setLoading(false));
    // }


    return (        
        <Container>
            <Helmet>
                <title>Список заказов</title>
                <meta name="description" content="Список заказов" />
            </Helmet>

            {/* <Statistics /> */}
            {/* <FilterPanel value={value} setValue={setValue} filter={filter} setFilter={setFilter} elems={library.orders} /> */}
            <h1 style={{textAlign: 'center'}}>Список заказов:</h1>
            {loading ? <Spinner animation={"border"}/> :
                <List 
                    items={orders} 
                    renderItem={(order: IOrder) => 
                        <OrderItem 
                            order={order} 
                            onClick={(order) => navigate('/order/' + order.id)}                         
                            key={order.id} 
                        />
                    } 
                />
            }           
        </Container>
    );
});

export default MainPage;