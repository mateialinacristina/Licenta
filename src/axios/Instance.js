import axios from "axios";

const instance = axios.create({baseURL:"http://localhost:7075/api/"})

export default instance;