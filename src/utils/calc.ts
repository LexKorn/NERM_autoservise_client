import { IActivity, IAutopart } from "../types/types";

export const convertNumToStr = (num: number) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const convertStrToNum = (str: string) => {
    return Number(str.replace(/\s+/g, ''));
};

export const calcSum = (arr: (IActivity | IAutopart)[]) => {
    const result = arr.reduce((sum, current) => {
        return sum += current.price;
    }, 0);
    return result;
};