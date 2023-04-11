import axios from "axios";

class CoursesDataService {
    getAll(currentPage,price) {
        if (currentPage!==null){
            if(price!==null)
                return axios.get(`http://localhost:4000/api/courses?page=${currentPage}&priceRanges=${price}`)    
            else 
                return axios.get(`http://localhost:4000/api/courses?page=${currentPage}`)
        }
        else return axios.get(`http://localhost:4000/api/courses`)
    }
    getCourseById(id) {
        return axios.get(`http://localhost:4000/api/courses/${id}`)
    }
}

export default new CoursesDataService();