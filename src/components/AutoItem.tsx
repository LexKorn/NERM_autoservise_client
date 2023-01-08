import React from 'react';
import { Card } from 'react-bootstrap';

import { IAuto } from '../types/types';

interface AutoItemProps {
    auto: IAuto;
    onClick: (auto: IAuto) => void;
};


const AutoItem: React.FC<AutoItemProps> = ({auto, onClick}) => {    
    return (
        <Card 
            className="d-flex justify-content-between shadow" 
            style={{padding: 10, marginTop: 15, flexDirection: 'row', fontSize: 18, lineHeight: '35px', cursor: 'pointer'}}
            onClick={() => onClick(auto)}
        >
            <b>{auto.stamp} {auto.model} {auto.stateNumber}</b> {auto.owner}
        </Card>
    );
};

export default AutoItem;