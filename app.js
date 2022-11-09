const express = require("express");
const app = express();
const path = require("path");  //Uso esto para usar la función path

let PORT = 3001;

app.use(express.static("public"))   //La utilizo para indicar que lo que se encuentra en la carpeta "public", es info que le permitimos que se tome desde la info pública del servidor


app.listen(PORT, console.log("listening to port " + PORT));


app.get("/", (req, res) => {

    //console.log("probando")  //Puedo usar este console.log para ver que me aparezca en la consola, y saber que app.get está entrando.

    //res.send("Hola Mundo");    //Lo uso solo si mandase un mensaje

    res.sendFile(path.resolve("./views/home.html"))  //Uso sendFile ya que devuelvo un objeto. Si devolviese un mensaje, solo usaría res.send.
});