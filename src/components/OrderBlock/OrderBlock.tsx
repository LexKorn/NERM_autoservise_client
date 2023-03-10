import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IOrder, IAuto, IStamp, IModel } from '../../types/types';
import { AUTO_ROUTE, AUTOS_ROUTE, NOTFOUND_ROUTE } from '../../utils/consts';
import { fetchOneOrder, deleteOrder } from '../../http/ordersAPI';
import { fetchOneAuto } from '../../http/autosAPI';
// import { fetchModels } from '../../http/modelsAPI';
// import { fetchStamps } from '../../http/stampsAPI';
import {Context} from '../../index';
import ModalOrderUpdate from '../Modals/ModalOrderUpdate';

import './orderBlock.sass';


const OrderBlock: React.FunctionComponent = () => {
    const {service} = useContext(Context);
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const [auto, setAuto] = useState<IAuto>({} as IAuto);
    const [modelAuto, setModelAuto] = useState<IModel[]>([]);
    const [stampAuto, setStampAuto] = useState<IStamp[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchOneOrder(id).then(data => setOrder(data));
    }, []);

    useEffect(() => {
        if (order) {
            fetchOneAuto(order.autoId).then(data => {
                setAuto(data);
            });
        }
    }, [order]);

    useEffect(() => {
        if (auto) {
            setModelAuto(service.models.filter(model => model.id === auto.modelId));
            setStampAuto(service.stamps.filter(stamp => stamp.id === auto.stampId));
            setLoading(false);
        }
    }, [auto]);

    const removeOrder = () => {
        if (window.confirm('Вы действительно хотите заказ?')) {
            // deleteOrder(order.id);
            // navigate(AUTHORS_ROUTE);
        }        
    };

    if (loading) {
        return <Spinner animation={"border"}/>
    }

    return (
        <div>
            <Helmet>
                <title>{`${order.opened} ${stampAuto.length && stampAuto[0].stamp} ${modelAuto.length && modelAuto[0].model}`}</title>
                <meta name="description" content={`${order.opened} ${stampAuto.length && stampAuto[0].stamp} ${modelAuto.length && modelAuto[0].model}`} />
            </Helmet>

            <div className="order">
                <div 
                    className="order__name"
                    onClick={() => {navigate(AUTO_ROUTE + `/${order.autoId}`)}}  // (AUTO_ROUTE + `/${authorBook[0].id}`)
                >
                    {`${stampAuto.length && stampAuto[0].stamp} ${modelAuto.length && modelAuto[0].model} ${auto && auto.stateNumber}`}
                </div>
                <div className="order__description">заказ открыт: {order.opened}</div>
                {order.closed && <div className="order__description">заказ закрыт: {order.closed}</div>}
                <div className="order__description">мастер: {order.masterId}</div>
                {order.cost && <div className="order__description">стоимость: {order.cost}p</div>}
                {order.income && <div className="order__description">оплачено: {order.income}p</div>}
                {order.profit && <div className="order__description">прибыль: {order.profit}p</div>}
                {order.comment && <div className="order__description">комментарий: {order.comment}</div>}
                
                <Button className="order__button" variant={"outline-primary"} onClick={() => setVisible(true)}>Редактировать</Button>
                <Button className="order__button" variant={"outline-danger"} onClick={removeOrder}>Удалить</Button>
            </div>
            
            <ModalOrderUpdate 
                show={visible} 
                onHide={() => setVisible(false)} 
                order={order}
            />
        </div>
    );
};

export default OrderBlock;