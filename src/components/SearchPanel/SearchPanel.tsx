import React, {useState, useEffect} from 'react';

import { IAuto, IOrder } from '../../types/types';

import './searchPanel.sass';

interface SearchPanelProps {
    value: string;
    setValue: (value: string) => void;
    elems: IAuto[];
    // elems: (IAuto | IOrder)[];
};


const SearchPanel: React.FC<SearchPanelProps> = ({value, setValue, elems}) => {
    const [directionSort, setDirectionSort] = useState<boolean>(true);
    const [condition, setCondition] = useState<string>('stamp');

    useEffect(() => {
        sortHandler();
    }, [condition]);

    // useEffect(() => {
    //     library.setVisibleAutos(search(elems, value));
    // }, [value, elems]);


    function search(items: IAuto[], term: string) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return (
                item.stamp.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.model.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.stateNumber.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        }); 
    };

    // Sort
    function sortHandler() {
        let sortElems = [];
  
        if (directionSort) {
            sortElems = [...elems].sort((a, b) => {
                // @ts-ignore
                return a[condition] > b[condition] ? 1 : -1;
            });
        } else {
            sortElems = [...elems].sort((a, b) => {
                // @ts-ignore
                return a[condition] < b[condition] ? 1 : -1;
            });
        }
  
        setDirectionSort(!directionSort);
        return sortElems;
    };


    return (
        <>
            <div className='sort'>
                <button className='sort__btn' onClick={() => setCondition('stamp')}>Марка авто</button>
                <button className='sort__btn' onClick={() => setCondition('createdAt')}>Добавление авто</button>
            </div>
            <input 
                className='search' 
                type='text' 
                placeholder='Начните вводить искомое слово' 
                value={value}
                onChange={e => setValue(e.target.value)}
            />            
        </>
    );
};

export default SearchPanel;