export const studLogout = (req,res)=>{
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.clearCookie('Session'); 
        res.redirect('/login');
    });
}