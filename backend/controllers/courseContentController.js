import CourseContentDAO from "../dao/courseContentDAO.js";
import CourseContent from "../models/courseContentModel.js";

// Create new course_content
async function createCourseContent(req, res) {
  try {
    const { course_id, lesson_count, content } = req.body;

    const newCourseContent = new CourseContent({
      course_id,
      lesson_count,
      content,
    });

    const savedCourseContent = await CourseContentDAO.create(newCourseContent);

    res.status(201).json(savedCourseContent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create course content" });
  }
}

// Get course_content by course_id
async function getCourseContentByCourseId(req, res) {
  try {
    const { course_id } = req.params;

    const courseContent = CourseContentDAO.getCourseContentByCourseId(course_id);

    if (!courseContent) {
      return res.status(404).json({ error: "Course content not found" });
    }

    res.json(courseContent);
  } catch (error) {
    res.status(500).json({ error: "Failed to get course content" });
  }
}

// Update course_content by course_id
async function updateCourseContentByCourseId(req, res) {
  try {
    const { course_id } = req.params;
    const { lesson_count, content } = req.body;

    const updatedCourseContent = await CourseContent.findOneAndUpdate(
      { course_id },
      { lesson_count, content },
      { new: true }
    );

    if (!updatedCourseContent) {
      return res.status(404).json({ error: "Course content not found" });
    }

    res.json(updatedCourseContent);
  } catch (error) {
    res.status(500).json({ error: "Failed to update course content" });
  }
}

export {
  createCourseContent,
  getCourseContentByCourseId,
  updateCourseContentByCourseId,
};
