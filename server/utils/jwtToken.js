export const generateToken = (user, message, statusCode,res)=> {
    const token = user.generateToken();

    let cookieName;
    if(user.role === "Admin") {
        cookieName = "Admin"
    } else if(user.role === "Patient") {
        cookieName = "Patient"
    } else if (user.role === "Doctor") {
        cookieName = "Doctor"
    }
    
    res.status(statusCode).cookie(cookieName,token,{
        expires: new Date(Date.now()+process.env.COOKIE_EXPIRY * 24 * 60 *60*1000),
        httpOnly: true,
    }).json({
        success: true,
        message,
        user,
        token
    })
}