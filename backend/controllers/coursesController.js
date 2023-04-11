const coursesDAO = require('../dao/coursesDAO');

// Create a new course
async function createCourse(req, res) {
  try {
    const newCourse = req.body;
    const createdCourse = await coursesDAO.createCourse(newCourse);
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all courses
async function getAllCourses(req, res) {
  try {
    const courses = await coursesDAO.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getCourses(req, res) {
  const page = parseInt(req.query.page) || 1;
  const coursesPerPage = parseInt(req.query.coursePerPage) || 6;
  const priceRanges = req.query.priceRanges || '';
  const name = req.query.name||'';
  const ranges = priceRanges.split(',').map(range => range.split('-').map(Number));
  const rangeQueries = ranges.map(range => {
    return {
      cost: {
        $gte: range[0],
        $lte: range[1]
      }
    };
  });
  let filters='';
  if (priceRanges!==''&&name!=='') {
    filters = {
      $and:[
        {$or: rangeQueries},
        {name:{$regex:name,$options:"i"}}
      ]
  }}
  else if(priceRanges==='')
  {
    filters = {
      $and:[
        {name:{$regex:name,$options:"i"}}
      ]
  }}else {
    filters = {
      $and:[
        {$or: rangeQueries},
      ]
  }
  }
  if (filters==='')
  {
    filters={};
  }
  const courses = await coursesDAO.getCourses(filters, page, coursesPerPage);
  const response = {
    filters: filters,
    totalCount: courses.totalCount,
    totalPages: courses.totalPages,
    currentPage: page,
    coursesPerPage,
    products: courses.filteredCoures
  };
  res.json(response)
}
// Get a course by ID
async function getCourseById(req, res) {
  try {
    const courseId = req.params.id;
    const course = await coursesDAO.getCourseById(courseId);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a course by ID
async function updateCourse(req, res) {
  try {
    const courseId = req.params.id;
    const updatedCourse = req.body;
    const course = await coursesDAO.updateCourse(courseId, updatedCourse);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a course by ID
async function deleteCourse(req, res) {
  try {
    const courseId = req.params.id;
    await coursesDAO.deleteCourse(courseId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};

