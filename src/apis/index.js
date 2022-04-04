import axios from 'axios'

const BASE_URL = 'https://api-kt-shop.herokuapp.com/api'

const apis = {
    getKeyboard: () => axios.get(`${BASE_URL}/keyboard`),
    getKeycap: () => axios.get(`${BASE_URL}/keycap`),
    getSwitch: () => axios.get(`${BASE_URL}/switch`),
}

export default apis
