import axios from "axios";
import { BASE_URL } from "../config/config";

class BillingDataService {
    postBilling(billings) {
        return axios.post(`${BASE_URL}/api/billings/purchase`, (billings))
    }
    getBilling(email) {
        return axios.get(`${BASE_URL}/api/billings/${email}/data`);
    }
   
}       

export default new BillingDataService();