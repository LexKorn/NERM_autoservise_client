import React, {useState, useEffect} from 'react';

// import { fetchAuthors } from '../../http/authorAPI';
// import { fetchBooks } from '../../http/bookAPI';

import './statistics.sass';

const Statistics: React.FC = () => {
    const [quantityAutos, setQuantityAutos] = useState<number>(0);
    const [quantityOrders, setQuantityOrders] = useState<number>(0);

    useEffect(() => {
        // fetchAuthors().then(data => setQuantityAuthors(data.length));
        // fetchBooks().then(data => setQuantityBooks(data.length));
        setQuantityAutos(3);
        setQuantityOrders(3);
    }, []);

    return (
        <>
            <div className='statistics'>Статистика: заказов: {quantityOrders},  автомобилей: {quantityAutos}</div>
        </>
    );
};

export default Statistics;