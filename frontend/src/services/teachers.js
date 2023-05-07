import axios from "axios";

class TeacherDataService {
    getAll() {
        return axios.get(`http://52.74.237.230:8000/api/lecturers`)
    }
}

export default new TeacherDataService();