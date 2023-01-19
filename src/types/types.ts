export interface IStamp {
    id: number;
    stamp: string;
    userId: number;
};

export interface IModel {
    id: number;
    model: string;
    userId: number;
};

export interface IAuto {
    id: number;
    stampId: number;
    modelId: number;
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
    cost?: number;
    income?: number;
    profit?: number;
    comment?: string;
    userId: number;
    autoId: number;
};