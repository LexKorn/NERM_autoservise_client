import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Button, Form, Dropdown} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { IStamp, IModel } from '../../types/types';
// import { fetchCountries } from '../http/countryAPI';
// import { AUTHORS_ROUTE } from '../utils/consts';
import ModalStamp from '../Modals/ModalStamp';
import ModalModel from '../Modals/ModalModel';
import ModalStampModel from '../Modals/ModalStampModel';

interface CUAutoProps {
    id: number;
    year?: number;
    vin?: string;
    stateNumber: string;
    owner: string;
    phone: string;
    setStamp: (stamp: string) => void;
    setModel: (model: string) => void;
    setYear: (year: number) => void;
    setVin: (vin: string) => void;
    setStateNumber: (stateNumber: string) => void;
    setOwner: (owner: string) => void;
    setPhone: (phone: string) => void;
    handler: (id: number, auto: FormData) => Promise<unknown>;
    title: string;
    btnName: string;
};


const CUAuto: React.FC<CUAutoProps> = observer(({id, year, vin, stateNumber, owner, phone, setStamp, setModel, setYear, setVin, setStateNumber, setOwner, setPhone, handler, title, btnName}) => {
    const {service} = useContext(Context);
    const navigate = useNavigate();
    // const [visibleStamp, setVisibleStamp] = useState<boolean>(false);
    // const [visibleModel, setVisibleModel] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [item, setItem] = useState<string>('');

    const stamps: IStamp[] = [
        {
            id: 1,
            stamp: 'Reno',
            userId: 1
        },
        {
            id: 2,
            stamp: 'Toyota',
            userId: 1
        },
        {
            id: 3,
            stamp: 'Лада',
            userId: 1
        },
    ];

    const models: IModel[] = [
        {
            id: 1,
            model: 'Logan',
            userId: 1
        },
        {
            id: 2,
            model: 'Camrry',
            userId: 1
        },
        {
            id: 3,
            model: 'Калина',
            userId: 1
        },
    ];

    useEffect(() => {
        // fetchStamps().then(data => service.setStamps(data));
        // fetchModels().then(data => service.setModels(data));
        service.setStamps(stamps);
        service.setModels(models);
    }, [visible]);
// }, [visibleStamp, visibleModel]);


    const onClick = () => {
        // if (!name.trim() || !description.trim()) {
        //     return alert('Все поля обязательны для заполнения');
        // } else if (!file) {
        //     return alert('Фото необходимо загрузить');
        // } else if (!library.selectedCountry.id) {
        //     return alert('Страну необходимо указать');        
        // }

        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('description', description);
        // formData.append('photo', file);
        // formData.append('countryId', `${library.selectedCountry.id}`);

        // if (btnName === 'Добавить') {
        //     // @ts-ignore 
        //     handler(formData)
        //         .then(() => {
        //             library.setSelectedCountry({
        //                 id: 0,
        //                 name: '',
        //                 userId: 0
        //             });
        //             navigate(AUTHORS_ROUTE);
        //         })
        //         .catch(err => alert(err.response.data.message));
        // } else {
        //     handler(id, formData)
        //         .then(() => {
        //             library.setSelectedCountry({
        //                 id: 0,
        //                 name: '',
        //                 userId: 0
        //             });
        //             navigate(AUTHORS_ROUTE);
        //         })
        //         .catch(err => alert(err.response.data.message));
        // }
    };

    const showStamp = () => {
        setVisible(true);
        setItem('stamp');
    };

    const showModel = () => {
        setVisible(true);
        setItem('model');
    };


    return (
        <Container className="d-flex justify-content-center">
            <div>
                <h1>{title}</h1>
                <Form>
                    <Dropdown className="mt-3 mb-3">
                        <Dropdown.Toggle variant={"outline-dark"}>{service.selectedStamp.stamp || 'Выберите марку'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {service.stamps.map(stamp => 
                                <Dropdown.Item 
                                    onClick={() => service.setSelectedStamp(stamp)} 
                                    key={stamp.id} >
                                        {stamp.stamp}
                                </Dropdown.Item>                                
                            )}
                            <Dropdown.Item onClick={showStamp} >Добавить / удалить марку</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>  
                    <Dropdown className="mt-3 mb-3">
                        <Dropdown.Toggle variant={"outline-dark"}>{service.selectedModel.model || 'Выберите модель'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {service.models.map(model => 
                                <Dropdown.Item 
                                    onClick={() => service.setSelectedModel(model)} 
                                    key={model.id} >
                                        {model.model}
                                </Dropdown.Item>                                
                            )}
                            <Dropdown.Item onClick={showModel} >Добавить / удалить модель</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <label htmlFor="year" className="mt-2">Год выпуска</label> 
                    <Form.Control
                        value={year}
                        type="number"
                        onChange={e => setYear(+e.target.value)}
                        placeholder="Год выпуска"
                    />
                    <label htmlFor="vin" className="mt-3">VIN номер</label> 
                    <Form.Control
                        value={vin}
                        onChange={e => setVin(e.target.value)}
                        placeholder="VIN номер"
                    /> 
                    <label htmlFor="stateNumber" className="mt-3">гос.номер</label> 
                    <Form.Control
                        value={stateNumber}
                        onChange={e => setStateNumber(e.target.value)}
                        placeholder="гос.номер авто"
                    />
                    <label htmlFor="owner" className="mt-3">Владелец</label> 
                    <Form.Control
                        value={owner}
                        onChange={e => setOwner(e.target.value)}
                        placeholder="Владелец авто"
                    />    
                    <label htmlFor="phone" className="mt-3">Телефон</label> 
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Телефон владельца"
                    />        
                </Form>
                <Button variant={"outline-dark"} onClick={onClick} className="mt-3">{btnName}</Button>           
            </div>   
            {/* <ModalStamp show={visibleStamp} onHide={() => setVisibleStamp(false)} />
            <ModalModel show={visibleModel} onHide={() => setVisibleModel(false)} /> */}
            <ModalStampModel show={visible} onHide={() => setVisible(false)} item={item} />
        </Container>
    );
});

export default CUAuto;