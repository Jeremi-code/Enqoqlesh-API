import express from 'express'
import { addAdmin,removeAdmin } from '../controller/adminController'
import { adminRouteMiddleware } from '../middleware/authMiddleware'
const adminRouter = express.Router

adminRouter.post('/admin',adminRouteMiddleware,addAdmin)
adminRouter.delete('/admin/apiKey',adminRouteMiddleware,removeAdmin)

export default adminRouter