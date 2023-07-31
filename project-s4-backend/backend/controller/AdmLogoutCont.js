export const admLogout=(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
            console.log("Error destroying a session")
        }
        res.clearCookie('Session'); 
        res.redirect('/login');
    });
}