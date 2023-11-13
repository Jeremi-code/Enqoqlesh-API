import express from 'express'
import { addAdmin,removeAdmin } from '../controller/adminController.js'
import { adminRouteMiddleware } from '../middleware/authMiddleware.js'
const adminRouter = express.Router()

adminRouter.post('/admin',adminRouteMiddleware,addAdmin)
adminRouter.delete('/admin/:apiKey',adminRouteMiddleware,removeAdmin)

export default adminRouter