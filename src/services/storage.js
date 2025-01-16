export const setLocalStorage = (id, data) => {
    localStorage.setItem(id, JSON.stringify(data));
};

export const getLocalStorage = (id = '') => {
    const item = localStorage.getItem(id);
    return item ? JSON.parse(item) : null;
};

export const getAllLocalStorage = () => {
    const keys = Object.keys(localStorage);
    return keys.map((key) => JSON.parse(localStorage.getItem(key)),
    );
};

export const removeLocalStorage = (id) => {
    localStorage.removeItem(id);
};
