import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { IOrder, IActivity, IAutopart } from '../../types/types';
// import { fetchActivitys, deleteActivity } from '../../http/activityAPI';
// import { fetchOneOrder } from '../../http/orderAPI';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import ListItemOrder from '../ListItem/ListItemOrder';
import ModalActivityUpdate from '../Modals/ModalActivityUpdate';
import ModalActivityAdd from '../Modals/ModalActivityAdd';

import './orderList.sass';

// interface OrderListProps {
//     orderItem: (IActivity | IAutopart)[];
// };

// @ts-ignore
export default function OrderList<T> ({title, orderItem}) {
    const [activity, setActivity] = useState<IActivity>({} as IActivity);
    const [activitys, setActivitys] = useState<IActivity[]>([]);
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const [toggle, setToggle] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleActivity, setVisibleActivity] = useState<boolean>(false);
    const {id} = useParams();

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


    const removeItem = (item: IAutopart | IActivity) => {
        if (window.confirm('Вы действительно хотите удалить цитату?')) {
            // deleteActivity(item.id);
            setToggle(!toggle);
        }
    };

    const editItem = (item: IAutopart | IActivity) => {
        // setActivity(item);
        if (title === "Работы:") {
            setVisible(true);
        } else if (title === "Запчасти:") {
            alert('Модалка с запчастями')
        }
    };

    const handler = () => {
        if (title === "Работы:") {
            setVisibleActivity(true);
        } else if (title === "Запчасти:") {
            alert('Модалка с запчастями')
        }
    }


    return (
        <Container className="activities">
            {!loading && <div className="activities__title">
                <h3>{title}</h3>
                <i className="bi bi-plus-circle activities__title_icon" onClick={handler}></i>
            </div>}
            <List 
                items={orderItem}
                renderItem={(item: IAutopart | IActivity) => 
                    <ListItem 
                        onDelete={() => removeItem(item)} 
                        onEdit={() => editItem(item)}
                        item={item} 
                        key={item.id} 
                    />
                } 
            />
            <ModalActivityAdd
                show={visibleActivity} 
                onHide={() => setVisibleActivity(false)} 
                orderId={order.id}
            />
            <ModalActivityUpdate
                show={visible} 
                onHide={() => setVisible(false)} 
                orderId={order.id}
                activity={activity}
            />
        </Container> 
    );
};