import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_USER = process.env.REACT_APP_API_USER;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

export const fetchCompanies = async (page, limit, order) => {
    try {
        const response = await axios.get(`${API_URL}/api/list/`, {
            params: {
                page: page,
                limit: limit,
                order: order
            },
            auth: {
                username: API_USER,
                password: API_PASSWORD
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}