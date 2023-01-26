import { $authHost } from ".";

export const createAuto = async (auto: FormData) => {
    const {data} = await $authHost.post('api/autos', auto);
    return data;
};

export const fetchAutos = async () => {
    const {data} = await $authHost.get('api/autos');
    return data;
};

export const fetchOneAuto = async (id: number) => {
    const {data} = await $authHost.get('api/autos/' + id);
    return data;
};

export const updateAuto = async (id: number, auto: FormData) => {
    const {data} = await $authHost.put('api/autos/' + id, auto);
    return data;
};

export const deleteAuto = async (id: number) => {
    const {data} = await $authHost.delete('api/autos/' + id);
    return data;
};