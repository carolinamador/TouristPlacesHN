var express = require('express');
var apirouter = express.Router();

function api(db){
  //collections
  var Dest = db.collection("destino");


  //rutas
    apirouter.get("/ObtenerDestino",
      function(req, res){
        var query= {};
        Dest.find(query).toArray(function(err, vDest){
          if(err){
            res.status(500).json({"error":err});
          }else{
            res.status(200).json({"destinos":vDest});
          }
        }) // Users.find toArray

          //status(200)--->peticion atendida corectatamente
          //status(300)--->peticion atendida pero se extrae cache
          //status(400)--->no se encuentra servicio solicitado
          //status(500)--->error en server
      }
  )// ObtenerDestino

  apirouter.get("/ObtenerUser/:isbn",
    function(req, res){
      res.status(500).json({"error":"funcion no implemetada"});
    }
  )//ObtenerUser

  apirouter.post("/ModificarUser/:isbn",
    function(req, res){
      res.status(500).json({"error":"funcion no implemetada"});
    }
  )//ModificarUser

  apirouter.put("/agregarUser/:isbn",
    function(req, res){
      res.status(500).json({"error":"funcion no implemetada"});
    }
  )//agregarUser

  apirouter.delete("/EliminarUser/:isbn",
    function(req, res){
      res.status(500).json({"error":"funcion no implemetada"});
    }
  )//EliminarUser

  return apirouter;

}

module.exports = api;
