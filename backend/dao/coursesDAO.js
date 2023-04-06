import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let courses;

// Define a class for accessing the courses data
export default class CoursesDAO{
    // Define a static method to inject the database connection
    static async injectDB(conn){
        // If the courses collection is already defined, return
        if(courses){
            return;
        }
        try{
            // Otherwise, assign the courses collection from the database
            courses = await conn.db(process.env.SELLCOURSES_NS).collection('courses');
        }
        catch(e){
            // Handle any errors in connecting to the database
            console.error(`unable to connect in CoursesDAO: ${e}`);
        }
    }

    // Define a static method to get the courses data
    static async getCourses({
            filters = null,
            page = 0,
            coursesPerPage = 2,
        } = {}){
            // Declare a variable to store the query object
            let query;
            // If there are any filters, construct the query object accordingly
            if(filters){
                if("name" in filters){
                    query = {$text: { $search: filters['name']}};
                }
                // else if("rated" in filters){
                //     query = {"rated": { $eq: filters['rated']}}
                // }
            }
            
            // Declare a variable to store the cursor object
            let cursor;
            try{
                // Find the matching documents from the courses collection with pagination
                cursor = await courses
                    .find(query)
                    .limit(coursesPerPage)
                    .skip(coursesPerPage * page);
                // Convert the cursor to an array of documents
                const coursesList = await cursor.toArray();
                // Count the total number of matching documents
                const totalNumCourse = await courses.countDocuments(query);
                // Return an object with the courses list and the total number of courses
                return {coursesList, totalNumCourse};
            }
            catch(e){
                // Handle any errors in finding the documents
                console.error(`Unable to issue find command, ${e}`);
                // Return an empty object with no courses and zero count
                return {coursesList:[], totalNumCourses: 0};
            }
        }

        static async getCourseById(id) {
            try {
                return await courses.aggregate([
                {
                    $match: { _id: new ObjectId(id),}
                },
                {
                    $lookup: {
                        from: 'courses',
                        localField: '_id',
                        foreignField: 'course_id',
                        as: 'courses',
                    }
                }
                ]).next();
            }
            catch (e) {
                console.error(`something went wrong in getCourseById: ${e}`);
                throw e;
            }
        }
}
