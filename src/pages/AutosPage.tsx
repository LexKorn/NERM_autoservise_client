import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Helmet} from "react-helmet";

import List from '../components/List/List';
import AutoItem from '../components/AutoItem/AutoItem';
import Statistics from '../components/Statistics/Statistics';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import { IAuto, IStamp, IModel } from '../types/types';
import { Context } from '../index';
// import { fetchAuthors } from '../http/authorAPI';


const AuthorsPage: React.FC = observer(() => {
    const {service} = useContext(Context);
    // const [autos, setAutos] = useState<IAuto[]>([]);
    // const [stamps, setStamps] = useState<IStamp[]>([]);
    // const [models, setModels] = useState<IModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const autos: IAuto[] = [
        {
            id: 1,
            stampId: 1,
            modelId: 1,
            year: 2006,
            vin: "XXLSRAG",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
        },
        {
            id: 2,
            stampId: 2,
            modelId: 2,
            year: 2011,
            vin: "XXLSRAG",
            stateNumber: "МН456К190",
            owner: "Иван",
            phone: '+7 985 766 78 90',
            userId: 1
        },
        {
            id: 3,
            stampId: 3,
            modelId: 3,
            stateNumber: "ЛК789К150",
            owner: "Саня",
            phone: '+7 903 123 78 94',
            userId: 1
        },
    ];

    const stamps: IStamp[] = [
        {
            id: 1,
            stamp: "Reno",
            userId: 1
        },
        {
            id: 2,
            stamp: "Toyota",
            userId: 1
        },
        {
            id: 3,
            stamp: "Лада",
            userId: 1
        }
    ];

    const models: IModel[] = [
        {
            id: 1,
            model: "Logan",
            userId: 1
        },
        {
            id: 2,
            model: "Camrry",
            userId: 1
        },
        {
            id: 3,
            model: "Калина",
            userId: 1
        }
    ];

    useEffect(() => {
        service.setAutos(autos);
        service.setStamps(stamps);
        service.setModels(models);
    }, []);

    // useEffect(() => {
    //     getAuthors();
    // }, []);
  
    // function getAuthors() {
    //     fetchAuthors()
    //         .then(data => setAuthors(data))
    //         .catch(err => alert(err.message))
    //         .finally(() => setLoading(false));
    // }

    return (
        <Container>
            <Helmet>
                <title>Список автомобилей</title>
                <meta name="description" content="Список автомобилей" />
            </Helmet>

            <Statistics />
            <SearchPanel value={value} setValue={setValue} elems={autos} />
            <h1 style={{textAlign: 'center'}}>Список автомобилей:</h1>
            {loading ? <Spinner animation={"border"}/> :
                <List
                    items={autos} 
                    renderItem={(auto: IAuto) => 
                        <AutoItem 
                            onClick={(auto) => navigate('/auto/' + auto.id)} 
                            auto={auto}
                            key={auto.id} 
                        />
                    } 
                />
            }
        </Container>
    );
});

export default AuthorsPage;