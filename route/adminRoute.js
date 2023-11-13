import express from 'express'
import { addAdmin,removeAdmin } from '../controller/adminController'
const adminRouter = express.Router

adminRouter.post('/admin',addAdmin)
adminRouter.delete('/admin/apiKey',removeAdmin)

export default adminRouter