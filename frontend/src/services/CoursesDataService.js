import axios from "axios";

class CoursesDataService {
    getAll() {
        return axios.get(`http://localhost:4000/api/courses`)
    }
    getCourseById(id) {
        return axios.get(`http://localhost:4000/api/courses/${id}`)
    }
}

export default new CoursesDataService();