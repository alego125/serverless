const express = require('express');
const app = express();

//Indicamos que todas las rutas que nosotros llamemos con el metodo de get seran manejadas por la funcion que se indica como segundo argumento, esta funcion callback recibe dos parametros uno es el objeto request que es lo que nos esta enviando el cliente en nuestro caso es el explorador web y response es el objeto que nosotros vamos a usar para contestarle al cleinte que nos esta realizando la peticion, este cliente puede ser una pagina web o una aplicacion movil por ejemplo

app.get("*",(req,res)=>{
    console.log("Hola mundo! Mi primera aplicacion serverless")
    //Seguido del mensaje de consola mandoamos a llamar al objeto de response y al metodo send de este, el cual usaremos para enviarle al cliente objetos de json en este caso al cleinte
    res.send({message:"Chanchito Feliz"});
});


//Finalmente exportamos el modulo
//No es necesario que exportemos app, podemos exportar la funcio que recibe request y response pero como queremos manejar con la misma funcion en este caso la de index.js los llamados a todas las rutas, lo mejor sera exportar app en este caso. Cuando queramos extender nuestra aplicacion lo que haremos sera agregar mas rutas manejadas a nuestra aplicacion de express
module.exports = app;