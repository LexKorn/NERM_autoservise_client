import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Helmet} from "react-helmet";

import List from '../components/List/List';
import AutoItem from '../components/AutoItem/AutoItem';
import Statistics from '../components/Statistics/Statistics';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import { IAuto } from '../types/types';
import { Context } from '../index';
// import { fetchAuthors } from '../http/authorAPI';


const AuthorsPage: React.FC = observer(() => {
    const {service} = useContext(Context);
    // const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const autos: IAuto[] = [
        {
            id: 1,
            stamp: "Reno",
            model: "Logan",
            year: 2006,
            vin: "XXLSRAG",
            stateNumber: "АБ123В190",
            owner: "Лёха",
            phone: '+7 123 456 78 90',
            userId: 1
        },
        {
            id: 2,
            stamp: "Toyota",
            model: "Camrry",
            year: 2011,
            vin: "XXLSRAG",
            stateNumber: "МН456К190",
            owner: "Иван",
            phone: '+7 985 766 78 90',
            userId: 1
        },
        {
            id: 3,
            stamp: "Лада",
            model: "Калина",
            stateNumber: "ЛК789К150",
            owner: "Саня",
            phone: '+7 903 123 78 94',
            userId: 1
        },
    ];

    useEffect(() => {
        service.setAutos(autos);
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