import React, {useState, useEffect, useContext} from 'react';

import { IAuto, IOrder, IStamp, IModel } from '../../types/types';
import { Context } from '../../index';

import './searchPanel.sass';

interface SearchPanelOrdersProps {
    // autos: IAuto[];
    orders: IOrder[];
    stamps: IStamp[];
    models: IModel[];
};


const SearchPanelOrders: React.FC<SearchPanelOrdersProps> = ({orders, stamps, models}) => { 
    const {service} = useContext(Context);
    const [directionSort, setDirectionSort] = useState<boolean>(true);
    const [condition, setCondition] = useState<string>('stampId');
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        service.setVisibleOrders(sortHandler(search(orders, value)));
    }, [value, directionSort]);


    function search(items: (IOrder)[], term: string) {   
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return (
                service.stamps.filter(stamp => stamp.id === item.autoId)[0].stamp.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                service.models.filter(model => model.id === item.autoId)[0].model.toLowerCase().indexOf(term.toLowerCase()) > -1
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
                    <button className='sort__btn' onClick={sortDate}>закрыт</button>
                    <button className='sort__btn' onClick={sortDate}>не закрыт</button>
                    <button className='sort__btn' onClick={sortDate}>все</button>
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