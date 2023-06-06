import axios from "axios";
import { BASE_URL } from "../config/config";

class TeacherDataService {
    getAll() {
        return axios.get(`${BASE_URL}/api/lecturers`)
    }
}

export default new TeacherDataService();