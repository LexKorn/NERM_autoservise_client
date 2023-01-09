import React from 'react';
import { Card } from 'react-bootstrap';

import { IAuto } from '../../types/types';

import './autoItem.sass';

interface AutoItemProps {
    auto: IAuto;
    onClick: (auto: IAuto) => void;
};


const AutoItem: React.FC<AutoItemProps> = ({auto, onClick}) => {    
    return (
        <Card 
            className="auto-card shadow"
            onClick={() => onClick(auto)}
        >
            <b>{auto.stamp} {auto.model} {auto.stateNumber}</b> {auto.owner}
        </Card>
    );
};

export default AutoItem;