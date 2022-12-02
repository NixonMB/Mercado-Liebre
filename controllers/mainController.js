const path = require("path");

const mainController = {
    home:(req, res) => {

        //console.log("probando")  //Puedo usar este console.log para ver que me aparezca en la consola, y saber que app.get está entrando.
    
        //res.send("Hola Mundo");    //Lo uso solo si mandase un mensaje
    
        res.render(("home.ejs"));  //Uso sendFile ya que devuelvo un objeto. Si devolviese un mensaje, solo usaría res.send.
    },
    register: (req, res) => {

        res.render("register.ejs");
    },
    login: (req, res) => {

        res.render("login.ejs");
    },

}

module.exports= mainController