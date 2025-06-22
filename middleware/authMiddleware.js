import statuscodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1]; // Extract token from Bearer header

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(statuscodes.UNAUTHORIZED).json({ msg: "No token provided" });

    }
    const token = authHeader.split(' ')[1]; // Extract token from Bearer header
    // console.log("Token received:", token);
    // console.log("Authorization header:", authHeader);

    try {
        const {username, userid} = jwt.verify(token, process.env.JWT_SECRET);
        req.user={username, userid};
        next(); // Proceed to the next middleware or route handler

        // return res.status(statuscodes.OK).json({ msg: "Token is valid", user: decoded });
        // req.user = decoded; // Attach user info to request object
        // next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(statuscodes.UNAUTHORIZED).json({ msg: "Invalid token" });
    }
}

export default authMiddleware;