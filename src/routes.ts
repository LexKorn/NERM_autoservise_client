import { LOGIN_ROUTE, REGISTER_ROUTE, ORDER_ROUTE, AUTO_ROUTE, AUTOS_ROUTE, MAIN_ROUTE, ADD_AUTO_ROUTE, ADD_ORDER_ROUTE, NOTFOUND_ROUTE } from "./utils/consts";
import {AddAutoPage, AddOrderPage, AutoPage, AutosPage, AuthPage, OrderPage, MainPage, Page404} from './pages';

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: ORDER_ROUTE + '/:id',
        Component: OrderPage
    },
    {
        path: ADD_ORDER_ROUTE,
        Component: AddOrderPage
    },
    {
        path: AUTOS_ROUTE,
        Component: AutosPage
    },
    {
        path: AUTO_ROUTE + '/:id',
        Component: AutoPage
    },
    {
        path: ADD_AUTO_ROUTE,
        Component: AddAutoPage
    },
    {
        path: NOTFOUND_ROUTE,
        Component: Page404
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTER_ROUTE,
        Component: AuthPage
    }
];