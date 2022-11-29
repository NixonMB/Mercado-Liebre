const path = require("path");

const mainController = {
    home:(req, res) => {

        //console.log("probando")  //Puedo usar este console.log para ver que me aparezca en la consola, y saber que app.get está entrando.
    
        //res.send("Hola Mundo");    //Lo uso solo si mandase un mensaje
    
        res.sendFile(path.resolve("./views/home.html"))  //Uso sendFile ya que devuelvo un objeto. Si devolviese un mensaje, solo usaría res.send.
    },
    register: (req, res) => {

        res.sendFile(path.resolve("./views/register.html"))
    },
    login: (req, res) => {

        res.sendFile(path.resolve("./views/login.html"))
    },

}

module.exports= mainController