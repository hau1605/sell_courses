import * as coursesDAO from '../dao/coursesDAO.js';

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
  const sort = req.query.sort || 'cost';
  const sortOrder = req.query.sortOrder === "asc" ? 1 : -1
  const level = req.query.level || '';
  const categories = req.query.categories || '';
  const ranges = priceRanges.split(',').map(range => range.split('-').map(Number));
  const arrLevel=level.split(',');
  const rangeQueries = ranges.map(range => {
    return {
      cost: {
        $gte: range[0],
        $lte: range[1]
      }
    };
  });
  const levelQueries = arrLevel.map(range => {
    return {
      level: {
        $eq:range
      }
    };
  });
  let filters = '';
  if (priceRanges!==''&&level!=='') {
    filters = {
      $and: [
        { $or: rangeQueries },
        { categories: { $regex: categories, $options: "i" } },
        {$or:levelQueries}
      ]
    }
  }
  else if (priceRanges === ''&&level!=='') {
    filters = {
      $and: [
        { categories: { $regex: categories, $options: "i" } },
        {$or:levelQueries}
      ]
    }
  } else if (level === ''&&priceRanges!==''){
    filters = {
      $and: [
        { categories: { $regex: categories, $options: "i" } },
        { $or: rangeQueries },
      ]
    }}
    else {filters = {
      $and: [
        { categories: { $regex: categories, $options: "i" } },
      ]
    }}
  
  if (filters === '') {
    filters = {};
  }
  const courses = await coursesDAO.getCourses(filters, page, coursesPerPage,sort,sortOrder);
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
async function getCourseByName(req, res) {
  try {
    const name = req.params.name;
    const course = await coursesDAO.getCourseByName(name);
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

export {
  createCourse,
  getAllCourses,
  getCourses,
  getCourseById,
  getCourseByName,
  updateCourse,
  deleteCourse
};

