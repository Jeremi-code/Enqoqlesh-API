import express from 'express'
import { addAdmin,removeAdmin } from '../controller/adminController'
import { apiKeyMiddleware } from '../middleware/authMiddleware'
const adminRouter = express.Router

adminRouter.post('/admin',apiKeyMiddleware,addAdmin)
adminRouter.delete('/admin/apiKey',apiKeyMiddleware,removeAdmin)

export default adminRouter