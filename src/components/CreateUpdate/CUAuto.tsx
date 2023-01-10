import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Button, Form, Dropdown} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

// import { Context } from '../index';
// import { fetchCountries } from '../http/countryAPI';
// import { AUTHORS_ROUTE } from '../utils/consts';
// import ModalCountry from './Modals/ModalCountry';

interface CUAutoProps {
    id: number;
    stamp: string;
    model: string;
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


const CUAuto: React.FC<CUAutoProps> = observer(({id, stamp, model, year, vin, stateNumber, owner, phone, setStamp, setModel, setYear, setVin, setStateNumber, setOwner, setPhone, handler, title, btnName}) => {
    // const {library} = useContext(Context);
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    // useEffect(() => {
    //     fetchCountries().then(data => library.setCountries(data));
    // }, [visible]);


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


    return (
        <Container className="d-flex justify-content-center">
            <div>
                <h1>{title}</h1>
                <Form>
                    <label htmlFor="stamp" className="mt-3">Марка</label> 
                    <Form.Control
                        value={stamp}
                        onChange={e => setStamp(e.target.value)}
                        placeholder="Марка авто"
                    />
                    <label htmlFor="model" className="mt-3">Модель</label> 
                    <Form.Control
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        placeholder="Модель авто"
                    />  
                    <label htmlFor="year" className="mt-3">Год выпуска</label> 
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
                                      
                    <Dropdown className="mt-3 mb-3">
                        {/* <Dropdown.Toggle variant={"outline-dark"}>{library.selectedCountry.name || 'Выберите страну'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {library.countries.map(country => 
                                <Dropdown.Item 
                                    onClick={() => library.setSelectedCountry(country)} 
                                    key={country.id} >
                                        {country.name}
                                </Dropdown.Item>                                
                            )}
                            <Dropdown.Item onClick={() => setVisible(true)} >Добавить / удалить страну</Dropdown.Item>
                        </Dropdown.Menu> */}
                    </Dropdown>            
                </Form>
                <Button variant={"outline-dark"} onClick={onClick} className="mt-3">{btnName}</Button>           
            </div>   
            {/* <ModalCountry show={visible} onHide={() => setVisible(false)} /> */}
        </Container>
    );
});

export default CUAuto;