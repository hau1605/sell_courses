import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";


import coursesRoutes from './routes/coursesRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import topicsRoutes from './routes/topicsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import lecturersRoutes from './routes/lecturersRoutes.js';
import topWeeksRoutes from './routes/topWeeksRoutes.js';
import facebookUsersRoutes from './routes/facebookUsersRoutes.js';

import { PORT } from "./config/config.js";
import * as config from "./config/config.js";

const start = async () => {
  const app = express();
  connectDB();

  // Middleware
  app.use(express.json());
  app.use(cors());

  const admin = new AdminJS({});

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  // Routes
  app.use("/api/courses", coursesRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/categories", categoriesRoutes);
  app.use("/api/topics", topicsRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api", loginRoutes);
  app.use("/api/lecturers", lecturersRoutes);
  app.use("/api/topWeeks", topWeeksRoutes);
  app.use("/api/facebookUsers", facebookUsersRoutes);

  // Start server
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
