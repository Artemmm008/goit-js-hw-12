import axios from "axios";

const API_KEY = "53393653-1acdc9704f6308d207f4a2045"; 
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1) {
    
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
    };

    const response = await axios.get(BASE_URL, { params })   

    return response.data;   

}
