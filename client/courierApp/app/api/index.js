import axios from 'react-native-axios'

const baseUrl = 'http://localhost:3000/'

const getProductById = (productId) => axios.get(baseUrl + 'products/id/' + productId)

const API = {
  getProductById
}

export default API
