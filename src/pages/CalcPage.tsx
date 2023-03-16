import React, {useState} from 'react';
import {Helmet} from "react-helmet";

const CalcPage: React.FC = () => {
    const [date, setDate] = useState();

    console.log("Date", date);
    
    return (
        <div>
            <Helmet>
                <title>Калькулятор</title>
                <meta name="description" content="Калькулятор" />
            </Helmet>

            <h2>Со временем здесь будет калькулятор</h2>
        </div>
    );
};

export default CalcPage;