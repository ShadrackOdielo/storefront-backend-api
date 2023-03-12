import { Application } from "express";
import dashboardRouter from "./dashboardRoutes";
import orderRouter from "./orderRoutes";
import productRouter from "./productRoutes";
import userRouter from "./userRoutes";

const routes = (app: Application) => {
  app.use("/users", userRouter);
  app.use("/products", productRouter);
  app.use("/orders", orderRouter);
  app.use("/dashboard", dashboardRouter);
};

export default routes;