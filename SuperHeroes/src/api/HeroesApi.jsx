
import axios from "axios";

const baseURL = 'https://api-heroes-fimlm.herokuapp.com';
// const baseUrl = 'https://davidmartinez.com.co/REACT_JS/SuperHeroes/db.json';

const heroApi = axios.create({ baseURL })

export default heroApi;