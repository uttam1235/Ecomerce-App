import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryControlller,
  singleCategoriesController,
  updateCategoryController, 
} from "./../controllers/categoryController.js";
const router = express.Router();  

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll category
router.get("/get-category", categoryController);
//single categories
router.get("/single-category/:slug", singleCategoriesController);

//delete category 
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryControlller)


export default router;
 