import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IAuto } from '../../types/types';
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
            stamp: "Reno",
            model: "Logan",
            year: 2006,
            vin: "XXLSRAG00276SRAG222",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
    };
    
    // useEffect(() => {
    //     fetchCountries().then(data => library.setCountries(data));
    //     fetchOneAuto(id)
    //         .then(data => setAuto(data))
    //         .catch(() => navigate(NOTFOUND_ROUTE))
    //         .finally(() => setLoading(false));
    // }, []);

    // useEffect(() => {
    //     library.setSelectedCountry(countryAuto[0]);
    // }, [auto]);

    // const countryAuto: ICountry[] = library.countries.filter(country => country.id === auto.countryId);

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
                <title>{auto.stamp} {auto.model}</title>
                <meta name="description" content={`Страничка ${auto.stamp} ${auto.model}`} />
            </Helmet>

            <div className="auto">
                    <div className="auto__name">{auto.stamp} {auto.model} {auto.year ? auto.year : ''}</div>
                    <div className="auto__description">гос.номер: {auto.stateNumber}</div>
                    {auto.vin && <div className="auto__description">VIN: {auto.vin}</div>}
                    <div className="auto__description">владелец: {auto.owner}</div>
                    <div className="auto__description">телефон: {auto.phone}</div>
                    {/* <div className="auto__country">{countryAuto.length > 0 ? countryAuto[0].name : ''}</div> */}
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