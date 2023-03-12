import React, {useState, useEffect, useContext} from 'react';

import { IAuto, IOrder, IStamp, IModel } from '../../types/types';
import { fetchAutos } from '../../http/autosAPI';
import { Context } from '../../index';

import './searchPanel.sass';

interface SearchPanelOrdersProps {
    orders: IOrder[];
    stamps: IStamp[];
    models: IModel[];
};


const SearchPanelOrders: React.FC<SearchPanelOrdersProps> = ({orders, stamps, models}) => { 
    const {service} = useContext(Context);
    const [directionSort, setDirectionSort] = useState<boolean>(true);
    const [condition, setCondition] = useState<string>('createdAt');
    const [value, setValue] = useState<string>('');
    const [filter, setFilter] = useState<string>('Все');

    useEffect(() => {
        service.setVisibleOrders(sortHandler(filterPost(search(orders, value), filter)));
    }, [value, directionSort, filter, orders]);

    useEffect(() => {
        fetchAutos()
            .then(data => service.setAutos(data))
            .catch(err => alert(err.message));
    }, []);

    function search(items: (IOrder)[], term: string) {   
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            const orderAuto: IAuto[] = service.autos.filter(auto => auto.id === item.autoId);

            return (
                stamps.filter(stamp => stamp.id === orderAuto[0].stampId)[0].stamp.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                models.filter(model => model.id === orderAuto[0].modelId)[0].model.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        }); 
    };

    function sortHandler(items: IOrder[]) {
        let sortElems: IOrder[] = [];
  
        if (directionSort) {
            sortElems = [...items].sort((a, b) => {
                // @ts-ignore
                return a[condition] > b[condition] ? 1 : -1;
            });
        } else {
            sortElems = [...items].sort((a, b) => {
                // @ts-ignore
                return a[condition] < b[condition] ? 1 : -1;
            });
        }
        return sortElems;
    };

    function filterPost(items: IOrder[], filter: string) {
        switch (filter) {
            case 'closed':
                return items.filter(item => item.closed);
            case 'no-closed':
                return items.filter(item => !item.closed);
            case 'All':
                return items;
            default:
                return items;
        }
    };

    const sortStamp = () => {
        setDirectionSort(!directionSort);
        setCondition('stampId');
    };

    const sortDate = () => {
        setDirectionSort(!directionSort);
        setCondition('createdAt');
    };


    return (
        <>  
            <div className='sort'>
                <div className="sort__title">Сортировать по:</div>
                <div className="sort__btns">
                    <button className='sort__btn' onClick={sortStamp}>Марка авто</button>
                    <button className='sort__btn' onClick={sortDate}>Время добавления</button>

                    <button className='sort__btn' onClick={() => setFilter('closed')}>закрыт</button>
                    <button className='sort__btn' onClick={() => setFilter('no-closed')}>не закрыт</button>
                    <button className='sort__btn' onClick={() => setFilter('All')}>Все</button>
                </div>                
            </div>
            <input 
                className='search' 
                type='text' 
                placeholder='Начните вводить марку или модель' 
                value={value}
                onChange={e => setValue(e.target.value)}
            />            
        </>
    );
};

export default SearchPanelOrders;