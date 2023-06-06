import { getAccordionUtilityClass } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../config/config";

class CoursesDataService {

    getAll(currentPage, price = null, sort = null,level=null,categories=null) {

        return axios.get(`${BASE_URL}/api/courses?coursePerPage=6&page=${currentPage}&priceRanges=${price}&sort=cost&sortOrder=${sort}&level=${level}&categories=${categories}`)
    }
getCourseByName(Name){
    return axios.get(`${BASE_URL}/api/courses/name/${Name}`)
}
getHotCourse(){
    return axios.get(`${BASE_URL}/api/courses?coursePerPage=8&sort=numberOfView&sortOrder=dsc`)
}
getNewCourse(){
    return axios.get(`${BASE_URL}/api/courses?coursePerPage=6&sort=uploadDate&sortOrder=dsc`)
}
getCourseById(id) {
    return axios.get(`${BASE_URL}/api/courses/${id}`)
}
updateCourseById(id,updateCourse){
    return axios.put(`${BASE_URL}/api/courses/${id}`,updateCourse);
}
}

export default new CoursesDataService();