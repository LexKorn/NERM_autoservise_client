import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { IOrder, IActivity, IAutopart } from '../../types/types';
// import { fetchActivitys, deleteActivity } from '../../http/activityAPI';
// import { fetchOneOrder } from '../../http/orderAPI';
import List from '../List/List';
import ListItemOrder from '../ListItem/ListItemOrder';
import ModalOrderAdd from '../Modals/ModalOrderAdd';

import './orderList.sass';

// interface OrderListProps {
    // title: string;
//     orderItem: (IOrder)[];
// };

// @ts-ignore
export default function OrderList2<T> ({title, orderItem}) {
    const [activity, setActivity] = useState<IActivity>({} as IActivity);
    const [activitys, setActivitys] = useState<IActivity[]>([]);
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const [toggle, setToggle] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const {id} = useParams();
    const navigate = useNavigate();


    // useEffect(() => {
    //     fetchActivitys()
    //         .then(data => setActivitys(data))
    //         .catch(err => alert(err.message));
    // }, [toggle, visible, visibleActivity]);

    // useEffect(() => {
    //     fetchOneOrder(id)
    //         .then(data => setOrder(data))
    //         .catch(err => alert(err.message))
    //         .finally(() => setLoading(false));
    // }, []);

    // const orderActivitys: IActivity[] = activitys.filter(activity => activity.orderId === order.id);


    return (
        <Container className="activities">
            {!loading && <div className="activities__title">
                <h3>{title}</h3>
                <i className="bi bi-plus-circle activities__title_icon" onClick={() => setVisible(true)}></i>
            </div>}
            <List 
                items={orderItem}
                renderItem={(item: IOrder) => 
                    <ListItemOrder
                        onClick={(item) => navigate('/order/' + item.id)} 
                        item={item} 
                        key={item.id} 
                    />
                } 
            />
            <ModalOrderAdd
                show={visible} 
                onHide={() => setVisible(false)}
            />
        </Container> 
    );
};