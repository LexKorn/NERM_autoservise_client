import {makeAutoObservable} from 'mobx';

import { IAuto, IActivity, IAutopart, IOrder, IStamp, IModel } from '../types/types';

export default class ServiceStore {
    _stamps: IStamp[];
    _models: IModel[];
    _autos: IAuto[];
    _orders: IOrder[];
    _selectedStamp: IStamp;
    _selectedModel: IModel;
    _visibleAutos: IAuto[];
    _visibleOrders: IOrder[];

    constructor() {
       this._stamps = [];
       this._models = [];
       this._autos = [];
       this._orders = [];
       this._selectedStamp = {} as IStamp;
       this._selectedModel = {} as IModel;
       this._visibleAutos = [];
       this._visibleOrders = [];

       makeAutoObservable(this); 
    };

    setStamps(stamps: IStamp[]) {
        this._stamps = stamps;
    };
    setModels(models: IModel[]) {
        this._models = models;
    };
    setAutos(autos: IAuto[]) {
        this._autos = autos;
    };
    setOrders(orders: IOrder[]) {
        this._orders = orders;
    };
    setSelectedStamp(stamp: IStamp) {
        this._selectedStamp = stamp;
    };
    setSelectedModel(model: IModel) {
        this._selectedModel = model;
    };
    setVisibleAutos(visibleAutos: IAuto[]) {
        this._visibleAutos = visibleAutos;
    };
    setVisibleOrders(visibleOrders: IOrder[]) {
        this._visibleOrders = visibleOrders;
    };


    get stamps() {
        return this._stamps;
    };
    get models() {
        return this._models;
    };
    get autos() {
        return this._autos;
    };
    get orders() {
        return this._orders;
    };
    get selectedStamp() {
        return this._selectedStamp;
    };
    get selectedModel() {
        return this._selectedModel;
    };
    get visibleAutos() {
        return this._visibleAutos;
    };
    get visibleOrders() {
        return this._visibleOrders;
    };
};