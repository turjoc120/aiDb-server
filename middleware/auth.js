import admin from "../utils/firebase.js";

const checkAuth = async (req, res, next) => {
    let { authorization } = req.headers;
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

        // removing the (,) form token coming from some requests 
        let token = req.headers.authorization.split(' ')[1];
        if (token.charAt(token.length - 1) === ',') {
            token = token.slice(0, token.length - 1)
        }
        const decodeVal = await admin.auth().verifyIdToken(token);

        if (decodeVal) {
            // req.user.uid = decodeVal.uid;
            console.log("hit...decode");
            return next();
        }
        return res.json({ message: 'not authorized' });

    } catch (error) {
        console.log(error)
    }
}

export default checkAuth