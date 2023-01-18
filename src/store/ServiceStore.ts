import {makeAutoObservable} from 'mobx';

import { IAuto, IActivity, IAutopart, IOrder } from '../types/types';

export default class ServiceStore {
    _autos: IAuto[];
    _orders: IOrder[];
    _selectedAuto: IAuto;
    _visibleAutos: IAuto[];
    _visibleOrders: IOrder[];

    constructor() {
       this._autos = [];
       this._orders = [];
       this._selectedAuto = {} as IAuto;
       this._visibleAutos = [];
       this._visibleOrders = [];

       makeAutoObservable(this); 
    };

    setAutos(autos: IAuto[]) {
        this._autos = autos;
    };
    setOrders(orders: IOrder[]) {
        this._orders = orders;
    };
    setSelectedAuto(auto: IAuto) {
        this._selectedAuto = auto;
    };
    setVisibleAutos(visibleAutos: IAuto[]) {
        this._visibleAutos = visibleAutos;
    };
    setVisibleOrders(visibleOrders: IOrder[]) {
        this._visibleOrders = visibleOrders;
    };


    get autos() {
        return this._autos;
    };
    get orders() {
        return this._orders;
    };
    get selectedAuto() {
        return this._selectedAuto;
    };
    get visibleAutos() {
        return this._visibleAutos;
    };
    get visibleOrders() {
        return this._visibleOrders;
    };
};