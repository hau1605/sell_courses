const express = require('express');
const connectDB = require('./db/connection');
const cors = require('cors');
const coursesRoutes = require('./routes/coursesRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const topicsRoutes = require('./routes/topicsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const lecturersRoutes = require('./routes/lecturersRoutes');
const adminRoutes = require('./routes/adminRoutes');
const topWeeksRoutes = require('./routes/topWeeksRoutes');
const facebookUsersRoutes = require('./routes/facebookUsersRoutes');
const config = require('./config/config.js');

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/lecturers', lecturersRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/topWeeks', topWeeksRoutes);
app.use('/api/facebookUsers', facebookUsersRoutes);

// Start server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

