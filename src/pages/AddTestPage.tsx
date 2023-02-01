import React, { useState } from 'react';
import {Helmet} from "react-helmet";

import CUTest from '../components/CreateUpdate/CUTest';
import { createTest } from '../http/testAPI';


const AddTestPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    
    return (
        <>
            <Helmet>
                <title>Добавить тест</title>
                <meta name="phone" content="Добавить тест" />
            </Helmet>

            <CUTest 
                id={0}
                name={name}
                phone={phone}
                country={country}
                setName={setName}
                setPhone={setPhone}
                setCountry={setCountry}
                // @ts-ignore
                handler={createTest}
                title='Добавить тест'
                btnName='Добавить'
            />
        </>
    );
};

export default AddTestPage;