import admin from "../utils/firebase.js";

const auth = async (req, res, next) => {
    let { authorization } = req.body;

    if (!authorization) {
        return res.status(403).json({
            errors: [
                {
                    msg: "unauthorized",
                },
            ],
        });
    }
    try {

        const token = req.body.authorization.split(' ')[1];
        const decodeVal = await admin.auth().verifyIdToken(token);

        if (decodeVal) {
            req.user = decodeVal;
            console.log("hit...");
            return next();
        }
        return res.json({ message: 'not authorized' });

    } catch (error) {
        console.log(error)
    }
}

export default auth