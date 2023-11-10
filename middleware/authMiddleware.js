const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
        message: 'Unauthorized',
        });
    }
    next();
    }


export { apiKeyMiddleware}