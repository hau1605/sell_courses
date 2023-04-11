import axios from "axios";

class CoursesDataService {
    
    getAll(currentPage=null,price=null) {
        
        if (currentPage!==null){
            if(price!==null)
                return axios.get(`http://localhost:4000/api/courses?page=${currentPage}&priceRanges=${price}`)    
            else 
                return axios.get(`http://localhost:4000/api/courses?page=${currentPage}`)
        }
        else return axios.get(`http://localhost:4000/api/courses`)
    }
    getHotCourse(){
        return axios.get(`http://localhost:4000/api/courses?coursePerPage=8&sort=numberOfView&sortOrder=asc`)
    }
    getNewCourse(){
        return axios.get(`http://localhost:4000/api/courses?coursePerPage=6&sort=uploadDate&sortOrder=dsc`)
    }
    getCourseById(id) {
        return axios.get(`http://localhost:4000/api/courses/${id}`)
    }
}

export default new CoursesDataService();