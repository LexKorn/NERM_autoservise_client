import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IAuto, IStamp, IModel } from '../../types/types';
import { AUTOS_ROUTE, NOTFOUND_ROUTE } from '../../utils/consts';
// import { deleteAuto, fetchOneAuto } from '../../http/autoAPI';
// import { fetchCountries } from '../../http/countryAPI';
import {Context} from '../../index';
import ModalAutoUpdate from '../Modals/ModalAutoUpdate';

import './autoBlock.sass';


const AutoBlock: React.FunctionComponent = () => {
    const {service} = useContext(Context);
    // const [auto, setAuto] = useState<IAuto>({} as IAuto);    
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    const auto: IAuto = {
            id: 1,
            stampId: 1,
            modelId: 1,
            year: 2006,
            vin: "XXLSRAG00276SRAG222",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
    };

    const stamps: IStamp[] = [{
        id: 1,
        stamp: "Reno",
        userId: 1
    }];

    const models: IModel[] = [{
        id: 1,
        model: "Logan",
        userId: 1
    }];
    
    useEffect(() => {
        // fetchStamps().then(data => service.setStamps(data));
        // fetchModels().then(data => service.setModels(data));
        service.setStamps(stamps);
        service.setModels(models);

        // fetchOneAuto(id)
        //     .then(data => setAuto(data))
        //     .catch(() => navigate(NOTFOUND_ROUTE))
        //     .finally(() => setLoading(false));
    }, []);

    // useEffect(() => {
    //     service.setSelectedStamp(stampAuto[0]);
    //     service.setSelectedModel(modelAuto[0]);
    // }, []);  //[auto]

    const stampAuto: IStamp[] = service.stamps.filter(stamp => stamp.id === auto.stampId);
    const modelAuto: IModel[] = service.models.filter(model => model.id === auto.modelId);

    useEffect(() => {
        service.setSelectedStamp(stampAuto[0]);
        service.setSelectedModel(modelAuto[0]);
    }, [stampAuto, modelAuto]);  //[auto]

    const removeAuto = () => {
        if (window.confirm('Вы действительно хотите удалить автомобиль? Все заказы, связанные с ним, будут удалены.')) {
            // deleteAuto(auto.id);
            // navigate(AUTHORS_ROUTE);
        }        
    };

    // if (loading) {
    //     return <Spinner animation={"border"}/>
    // }

    return (
        <div>
            <Helmet>
                <title>{`${service.selectedStamp && service.selectedStamp.stamp} ${service.selectedModel && service.selectedModel.model}`}</title>
                <meta name="description" content={`Страничка ${service.selectedStamp && service.selectedStamp.stamp} ${service.selectedModel && service.selectedModel.model}`} />
            </Helmet>

            <div className="auto">
                    <div className="auto__name">{`${service.selectedStamp && service.selectedStamp.stamp} ${service.selectedModel && service.selectedModel.model} ${auto.year ? auto.year : ''}`}</div>
                    <div className="auto__description">гос.номер: {auto.stateNumber}</div>
                    {auto.vin && <div className="auto__description">VIN: {auto.vin}</div>}
                    <div className="auto__description">владелец: {auto.owner}</div>
                    <div className="auto__description">телефон: {auto.phone}</div>
                    <Button className="auto__button" variant={"outline-primary"} onClick={() => setVisible(true)}>Редактировать</Button>
                    <Button className="auto__button" variant={"outline-danger"} onClick={removeAuto}>Удалить</Button>
            </div>

            <ModalAutoUpdate
                show={visible} 
                onHide={() => setVisible(false)} 
                auto={auto}
            />
        </div>
    );
};

export default AutoBlock;