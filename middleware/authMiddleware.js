import AdminModel from '../model/admin.js'
const adminRouteMiddleware = (req, res, next) => {
    const API_KEY = req.headers['api-key'];
    if (API_KEY !== process.env.API_KEY || API_KEY == undefined) {
        return res.status(401).json({
        message: 'Unauthorized',
        });
    }
    next();
    }
const defaultRouteMiddleware = (req,res,next) => {
    const API_KEY = req.headers['api-key']
    const admin =  AdminModel.findOne({apiKey:API_KEY})
    if (admin )
        next ()
    else {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
}

export { adminRouteMiddleware,defaultRouteMiddleware}