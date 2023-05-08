import axios from "axios";

class CoursesDataService {

    getAll(currentPage, price = null, sort = null,level=null,categories=null) {

        return axios.get(`http://52.74.237.230:8000/api/courses?coursePerPage=6&page=${currentPage}&priceRanges=${price}&sort=cost&sortOrder=${sort}&level=${level}&categories=${categories}`)
    }

getHotCourse(){
    return axios.get(`http://52.74.237.230:8000/api/courses?coursePerPage=8&sort=numberOfView&sortOrder=dsc`)
}
getNewCourse(){
    return axios.get(`http://52.74.237.230:8000/api/courses?coursePerPage=6&sort=uploadDate&sortOrder=dsc`)
}
getCourseById(id) {
    return axios.get(`http://52.74.237.230:8000/api/courses/${id}`)
}
updateCourseById(id,updateCourse){
    return axios.put(`http://52.74.237.230:8000/api/courses/${id}`,updateCourse);
}
}

export default new CoursesDataService();