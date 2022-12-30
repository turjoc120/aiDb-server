import admin from "../utils/firebase.js";

const auth = async (req, res, next) => {
    let { authorization } = req.headers;
    console.log("token ------ " + authorization);
    console.log("uid ------ " + req.headers.uid);
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

        const token = req.headers.authorization.split(' ')[1];
        const decodeVal = await admin.auth().verifyIdToken(token);

        if (decodeVal) {
            req.user = decodeVal;
            console.log("hit...decone");
            return next();
        }
        return res.json({ message: 'not authorized' });

    } catch (error) {
        console.log(error)
    }
}

export default auth