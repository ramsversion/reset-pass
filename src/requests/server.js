import axios from 'axios'
const API_URL = process.env.REACT_APP_THEME_API_URL + 'auth/create-url-reset-password';

export default async function requestPassword(email: any) {
    const res = await axios.get(API_URL, { params: { email: email } });
    return res;
}

