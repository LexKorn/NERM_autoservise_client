import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IOrder, IAuto, IStamp, IModel, IMaster } from '../../types/types';
import { AUTO_ROUTE, MAIN_ROUTE } from '../../utils/consts';
import { fetchOneOrder, deleteOrder } from '../../http/ordersAPI';
import { fetchOneAuto } from '../../http/autosAPI';
import { fetchStamps } from '../../http/stampsAPI';
import { fetchModels } from '../../http/modelsAPI';
import {Context} from '../../index';
import { convertNumToStr } from '../../utils/calc';
import ModalOrderUpdate from '../Modals/ModalOrderUpdate';

import './orderBlock.sass';

interface OrderBlockProps {
    cost: number;
    activitiesPrice: number;
    autopartsPrice: number;
};


const OrderBlock: React.FunctionComponent<OrderBlockProps> = ({cost, activitiesPrice, autopartsPrice}) => {
    const {service} = useContext(Context);
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const [auto, setAuto] = useState<IAuto>({} as IAuto);
    const [models, setModels] = useState<IModel[]>([]);
    const [modelAuto, setModelAuto] = useState<IModel[]>([]);
    const [stamps, setStamps] = useState<IStamp[]>([]);
    const [stampAuto, setStampAuto] = useState<IStamp[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [visible, setVisible] = useState<boolean>(false);
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();

    const masterOrder: IMaster[] = service.masters.filter(master => master.id === order.masterId);

    useEffect(() => {
        fetchOneOrder(id)
            .then(data => setOrder(data))
            .catch(err => alert(err.message))

        fetchStamps()
            .then(data => setStamps(data))
            .catch(err => alert(err.message));

        fetchModels()
            .then(data => setModels(data))
            .catch(err => alert(err.message));
    }, []);

    useEffect(() => {
        if (order) {
            fetchOneAuto(order.autoId).then(data => {
                setAuto(data);
                setLoading(false);
            });
        }
    }, [order]);

    useEffect(() => {
        if (auto) {
            setModelAuto(models.filter(model => model.id === auto.modelId));
            setStampAuto(stamps.filter(stamp => stamp.id === auto.stampId));
        }
    }, [auto]);

    useEffect(() => {
        if (masterOrder.length) {
            service.setSelectedMaster(masterOrder[0]);
        }
    }, [masterOrder]);

    const removeOrder = () => {
        if (window.confirm('Вы действительно хотите заказ?')) {
            deleteOrder(order.id);
            navigate(MAIN_ROUTE);
        }        
    };

    if (loading) {
        return <Spinner animation={"border"}/>
    }

    return (
        <div>
            <Helmet>
                <title>{`${order.opened} ${stampAuto.length ? stampAuto[0].stamp : ''} ${modelAuto.length ? modelAuto[0].model : ''}`}</title>
                <meta name="description" content={`${order.opened} ${stampAuto.length ? stampAuto[0].stamp : ''} ${modelAuto.length ? modelAuto[0].model : ''}`} />
            </Helmet>

            <div className="order">
                <div 
                    className="order__name"
                    onClick={() => {navigate(AUTO_ROUTE + `/${order.autoId}`)}} 
                >
                    {`${stampAuto.length ? stampAuto[0].stamp : ''} ${modelAuto.length ? modelAuto[0].model : ''} ${auto ? auto.stateNumber : ''}`}
                </div>
                <div className="order__description">заказ открыт: {order.opened}</div>
                {order.closed && <div className="order__description">заказ закрыт: {order.closed}</div>}
                <div className="order__description">мастер: {masterOrder.length ? masterOrder[0].master : ''}</div>
                {cost ? <div className="order__description">стоимость: {convertNumToStr(cost)}p</div> : ''}
                {activitiesPrice ? <div className="order__description">работы: {convertNumToStr(activitiesPrice)}p</div> : ''}
                {autopartsPrice ? <div className="order__description">запчасти: {convertNumToStr(autopartsPrice)}p</div> : ''}
                {order.income ? <div className="order__description">оплачено: {convertNumToStr(order.income)}p</div> : ''}
                {/* {order.cost && <div className="order__description">стоимость: {order.cost}p</div>} */}
                {/* {order.profit && <div className="order__description">прибыль: {order.profit}p</div>} */}
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