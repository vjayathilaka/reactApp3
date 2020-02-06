import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cfc805c24834ca979b15ad2b690477ca7d9be015a509fe598a8d00fe740dbc8c'
    }
});
