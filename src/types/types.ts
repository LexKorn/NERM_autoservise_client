export interface IAuto {
    id: number;
    stamp: string;
    model: string;
    year?: number;
    vin?: string;
    stateNumber: string;
    owner: string;
    phone: string;
    userId: number;
};

export interface IActivity {
    id: number;
    name: string;
    price: number;
    orderId: number;
    userId: number;
};

export interface IAutopart {
    id: number;
    name: string;
    price: number;
    orderId: number;
    userId: number;
};

export interface IOrder {
    id: number;
    opened: string;
    closed?: string;
    // activities?: IActivity[];
    // autoparts?: IAutopart[];
    cost?: number;
    income?: number;
    profit?: number;
    comment?: string;
    userId: number;
    autoId: number;
};