let courses;

export default class CoursesDAO{
    static async injectDB(conn){
        if(courses){
            return;
        }
        try{
            courses = await conn.db(process.env.SELLCOURSES_NS).collection('courses');
        }
        catch(e){
            console.error(`unable to connect in CoursesDAO: ${e}`);
        }
    }

    static async getCourses({
            filters = null,
            page = 0,
            coursesPerPage = 4,
        } = {}){
            let query;
            if(filters){
                if("name" in filters){
                    query = {$text: { $search: filters['name']}};
                }
                // else if("rated" in filters){
                //     query = {"rated": { $eq: filters['rated']}}
                // }
            }

            let cursor;
            try{
                cursor = await courses.find(query).limit(coursesPerPage).skip(coursesPerPage * page);
                const coursesList = await cursor.toArray();
                const totalNumCourse = await courses.countDocuments(query);
                return {coursesList, totalNumCourse};
            }
            catch(e){
                console.error(`Unable to issue find command, ${e}`);
                return {coursesList:[], totalNumCourses: 0};
            }
        }
}