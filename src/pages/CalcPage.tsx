import React from 'react';
import {Helmet} from "react-helmet";

const CalcPage: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Калькулятор</title>
                <meta name="description" content="Калькулятор" />
            </Helmet>

            Со временем здесь будет калькулятор
        </div>
    );
};

export default CalcPage;