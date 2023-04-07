Project Tree

my_courses_api/\
├── app.js\
├── config/\
│   ├── config.js\
│   └── db.js\
├── controllers/\
│   ├── adminController.js\
│   ├── courseController.js\
│   ├── categoryController.js\
│   ├── topicController.js\
│   ├── facebookUserController.js\
│   ├── lecturerController.js\
│   ├── topWeekController.js\
│   └── userController.js\
├── models/\
│   ├── Admin.js\
│   ├── Course.js\
│   ├── Category.js\
│   ├── Topic.js\
│   ├── FacebookUser.js\
│   ├── Lecturer.js\
│   ├── TopWeek.js\
│   └── User.js\
├── routes/\
│   ├── adminRoutes.js\
│   ├── courseRoutes.js\
│   ├── categoryRoutes.js\
│   ├── topicRoutes.js\
│   ├── facebookUserRoutes.js\
│   ├── lecturerRoutes.js\
│   ├── topWeekRoutes.js\
│   └── userRoutes.js\
└── middleware/\
    └── authMiddleware.js

Explanation of the project tree:

-   `app.js`: This is the main entry point of the Node.js application where Express.js is initialized and the routes are defined.
-   `config/`: This directory contains configuration files for the application, such as `config.js` for storing environment variables and `db.js` for connecting to the MongoDB database using Mongoose.js.
-   `controllers/`: This directory contains controllers that handle the logic for different API routes. For example, `adminController.js` handles API requests related to admin operations, `courseController.js` handles API requests related to courses, and so on.
-   `models/`: This directory contains Mongoose.js models that define the structure of the data for different collections in the MongoDB database. For example, `Admin.js` defines the structure of data for the `admin` collection, `Course.js` defines the structure of data for the `courses` collection, and so on.
-   `routes/`: This directory contains Express.js route handlers that define the routes for the API endpoints. For example, `adminRoutes.js` defines the routes for admin-related endpoints, `courseRoutes.js` defines the routes for course-related endpoints, and so on.
-   `middleware/`: This directory contains middleware functions that can be used to handle authentication and authorization logic for the API routes. For example, `authMiddleware.js` can be used to check if a user is authenticated before allowing access to certain routes.Explanation of the project tree:

-   `app.js`: This is the main entry point of the Node.js application where Express.js is initialized and the routes are defined.
-   `config/`: This directory contains configuration files for the application, such as `config.js` for storing environment variables and `db.js` for connecting to the MongoDB database using Mongoose.js.
-   `controllers/`: This directory contains controllers that handle the logic for different API routes. For example, `adminController.js` handles API requests related to admin operations, `courseController.js` handles API requests related to courses, and so on.
-   `models/`: This directory contains Mongoose.js models that define the structure of the data for different collections in the MongoDB database. For example, `Admin.js` defines the structure of data for the `admin` collection, `Course.js` defines the structure of data for the `courses` collection, and so on.
-   `routes/`: This directory contains Express.js route handlers that define the routes for the API endpoints. For example, `adminRoutes.js` defines the routes for admin-related endpoints, `courseRoutes.js` defines the routes for course-related endpoints, and so on.
-   `middleware/`: This directory contains middleware functions that can be used to handle authentication and authorization logic for the API routes. For example, `authMiddleware.js` can be used to check if a user is authenticated before allowing access to certain routes.
