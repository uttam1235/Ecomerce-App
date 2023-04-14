import  express  from "express";

import {registerController,loginController,testController, forgotPasswordController, updateProfileController, getAllOrdersController, getOrdersController, orderStatusController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
//router object
const router=express.Router()


//routing 
//register|| method post 
router.post('/register',registerController)
//LOGIN||POST
router.post('/login',loginController);

//forget  password ||post 
router.post("/forgot-password",forgotPasswordController);
//test routes
router.get('/test',requireSignIn,isAdmin, testController);


//protected user route auth 
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//protected  admin route auth 
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})
//router profile 
router.put('/profile',requireSignIn,updateProfileController)


//orders
router.get('/orders',requireSignIn,getOrdersController);

//all order
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);
 
//order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)




export default router