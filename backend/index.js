import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import CoursesDAO from "./dao/coursesDAO.js";

async function main() {
    dotenv.config();
    const client = new mongodb.MongoClient(process.env.SELLCOURSES_DB_URI);
    const port = process.env.PORT || 80;
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        await CoursesDAO.injectDB(client);

        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    };
}
main().catch(console.error);