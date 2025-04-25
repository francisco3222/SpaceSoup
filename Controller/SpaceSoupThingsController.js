

const indexView = async function (req, res) {
    if (!req.isAuthenticated()) { // Se não está autenticado, vai para o login!
        console.log("Nop, não tem acesso!");
        return res.redirect("/login");
    }
    res.render("SpaceSoupThings");
};
module.exports = {indexView};