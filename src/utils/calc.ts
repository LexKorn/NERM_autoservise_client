export const convertNumToStr = (num: number) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};  

export const convertStrToNum = (str: string) => {
    return Number(str.replace(/\s+/g, ''));
};  