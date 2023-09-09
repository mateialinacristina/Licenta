import axios from "axios";

const instance = axios.create({baseURL:"https://localhost:7075/api/"})

export default instance;