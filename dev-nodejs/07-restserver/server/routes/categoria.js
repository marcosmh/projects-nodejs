const express = require('express');
const _ = require('underscore');

const { verificaToken,verificaAdminRole } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');


//=====================================
// Mostrar todas la categorias
//=====================================
app.get('/categoria',(req,res) => {

  Categoria.find({})
    .sort('descripcion')
    .populate('usuario','nombre email')
    .exec((err,categoriaDB) => {

      if(err) {
          return res.status(500).json({
              ok: false,
              err
          });
      }

      if(!categoriaDB) {
          return res.status(400).json({
              ok: false,
              err
          });
      }

      res.json({
        ok: true,
        categorias: categoriaDB
      });

    });

});

//=====================================
// Mostar una categoria por ID
//=====================================
app.get('/categoria/:id',(req,res) => {
  //Categoria.findById()
  let id = req.params.id;
  console.log("id:" + id);

  Categoria.findById(id,(err,categoriaDB) => {

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!categoriaDB) {
        return res.status(400).json({
            ok: false,
            err: {
              message: 'El ID no es correcto'
            }
        });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });

  });

});

//=====================================
// Crear una nueva categoria
//=====================================
app.post('/categoria',verificaToken,(req,res) => {
  //regresa la nueva categoria

  let body = req.body;

  let categoria = new Categoria({
      descripcion: body.descripcion,
      usuario: req.usuario._id
  });

  categoria.save((err,categoriaDB)=> {

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!categoriaDB) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });

  });

});


//=====================================
// Actualizar Categoria
//=====================================
app.put('/categoria/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  console.log("id: "+id);
  let body = req.body;

  let descCategoria = {
    descripcion: body.descripcion
  }

  //Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true}, (err,categoriaDB) => {
  Categoria.findOneAndUpdate(id,descCategoria, { new: true, runValidators: true}, (err,categoriaDB) => {

    console.log("error: "+err);
    console.log("categoriaDB: "+categoriaDB);

      if(err) {
          return res.status(500).json({
              ok: false,
              err
          });
      }

      if(!categoriaDB) {
          return res.status(400).json({
              ok: false,
              err
          });
      }

      res.json({
        ok: true,
        categoria: categoriaDB
      });


    });

});



//=====================================
// Borrar una categoria
//=====================================
app.delete('/categoria/:id',(req,res) => {
  //solo un administrador puede borrar categorias
  //Categoria.findByIdAndRemove

  let id = req.params.id;
  console.log("id: " +  id);

  Categoria.findByIdAndRemove(id,[verificaToken, verificaAdminRole],(err,categoriaDB) => {
  //Categoria.findOneAndDelete(id,[verificaToken, verificaAdminRole], (err,categoriaDB) => {

    console.log("error: "+err);
    console.log("categoriaDB: "+categoriaDB);

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!categoriaDB) {
        return res.status(400).json({
            ok: false,
            err: {
              message: 'El id no existe'
            }
        });
    }

    res.json({
      ok: true,
      categoria: categoriaDB,
      message: 'Categoria Eliminada'
    });

  });




});



module.exports = app;
