import axios from "axios";
import { API_BASE_URL } from "../../config/API-Config";

class FeedService{
    getFeed(){
        return axios.get(API_BASE_URL + "/feedAll");
    }
}

export default new FeedService();