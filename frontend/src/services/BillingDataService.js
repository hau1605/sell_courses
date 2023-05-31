import axios from "axios";

class BillingDataService {
    postBilling(billings) {
        return axios.post(`http://localhost:8000/api/billings/purchase`, (billings))
    }
}       

export default new BillingDataService();