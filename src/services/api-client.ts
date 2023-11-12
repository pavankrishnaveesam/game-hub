import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"22d7405f90a8460aa760150eeec23f1c"
    }
})