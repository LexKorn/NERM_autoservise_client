import React, { useState } from 'react';
import {Helmet} from "react-helmet";

import CUAuto from '../components/CreateUpdate/CUAuto';
// import { createAuthor } from '../http/authorAPI';
const createAuto = (auto: FormData) => {};

const AddAutoPage: React.FC = () => {
    const [stamp, setStamp] = useState<string>('');
    const [model, setModel] = useState<string>('');
    // @ts-ignore
    const [year, setYear] = useState<number>(null);
    const [vin, setVin] = useState<string>('');
    const [stateNumber, setStateNumber] = useState<string>('');
    const [owner, setOwner] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    
    return (
        <>
            <Helmet>
                <title>Добавить автомобиль</title>
                <meta name="description" content="Добавить автомобиль" />
            </Helmet>
            
            <CUAuto 
                id={0}
                stamp={stamp}
                model={model}
                year={year}
                vin={vin}
                stateNumber={stateNumber}
                owner={owner}
                phone={phone}
                setStamp={setStamp}
                setModel={setModel}
                setYear={setYear}
                setVin={setVin}
                setStateNumber={setStateNumber}
                setOwner={setOwner}
                setPhone={setPhone}
                // @ts-ignore
                handler={createAuto}
                title='Добавить автомобиль'
                btnName='Добавить'
            />
        </>
    );
};

export default AddAutoPage;