import {makeAutoObservable} from 'mobx';

export default class UserStore {
    _isAuth: boolean;

    constructor() {
       this._isAuth = true;  //false
       makeAutoObservable(this); 
    };

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    };

    get isAuth() {
        return this._isAuth;
    };
};