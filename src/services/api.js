const BASE_URL = import.meta.env.VITE_API_URL; // e.g. "http://localhost:3000"


export const request = async (path, options = {}) => {

    try {
        const res = await fetch(`${BASE_URL}${path}`, options);

        if (res.ok) {
            let result = await res.json();
            result = { ok: true, ...result }
            return result;
        } else {
            throw await res.json();
        }

    } catch (error) {
        return error;
    }
};