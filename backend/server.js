import express from 'express';
import cors from 'cors';
import courses from './api/courses.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/courses", courses);
app.use("/api/v1/searchCourses", courses);


app.use('*', (req, res) => {
    res.status(404).json({error: "Not found"})
});

export default app;
