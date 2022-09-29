import axios from 'axios'
const API_URL = process.env.REACT_APP_THEME_API_URL

export default  function requestPassword(email) {
    return axios.post(API_URL, {
        email,
    })
}

