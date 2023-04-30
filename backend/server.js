import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";
import {
  coursesRoutes,
  cartRoutes,
  categoriesRoutes,
  topicsRoutes,
  usersRoutes,
  loginRoutes,
  lecturersRoutes,
  topWeeksRoutes,
  facebookUsersRoutes,
} from "./routes/index.js";
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
