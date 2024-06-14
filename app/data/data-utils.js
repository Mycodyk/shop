import { data } from './data';

export const getClothesByCategory = (category) => {
    return data.filter((clothes) => {
        return clothes.category.find((item) => item.name = category)
    });
};

export const getClothesByName = (name) => {
    return data.filter((clothes) => {
        return clothes.name.toLowerCase().includes(name.toLowerCase());
    });
};

export const getClothesById = (id) => {
    return data.find((clothes) => {
        return clothes.id === Number(id);
    });
};