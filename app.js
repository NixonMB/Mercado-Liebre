const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter")

let PORT = 3001;

app.listen(PORT, console.log("listening to port " + PORT));


//Middleware
app.use(express.static("public"));   //La utilizo para indicar que lo que se encuentra en la carpeta "public", es info que le permitimos que se tome desde la info pública del servidor
app.set("view engine", "ejs"); //Le indico que voy a usar partials.


//Rutas
app.use("/", mainRouter);
app.use("/register", mainRouter);
app.use("/login", mainRouter);
