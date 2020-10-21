const express = require('express');
const _ = require('underscore');
const { verificaToken } = require('../middlewares/autenticacion');
const app = express();

const Producto = require('../models/producto');

//=====================================
// Mostrar todos los productos
//=====================================
app.get('/producto',verificaToken,(req,res) => {
  //trae todos los productos
  //populate: usuario categoria
  //paginado
  let desde = Number(req.query.desde) || 0;
  let limite = Number(req.query.limite) || 5;

  Producto.find({disponible: true})
    .skip(desde)
    .limit(5)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec((err, productoDB) => {

      if(err) {
          return res.status(500).json({
              ok: false,
              err
          });
      }

      if(!productoDB) {
          return res.status(400).json({
              ok: false,
              err
          });
      }

      res.json({
        ok: true,
        producto: productoDB
      });


    });



});


//=====================================
// Mostrar producto por id
//=====================================
app.get('/producto/:id',verificaToken,(req,res) => {
  //populate: usuario categoria
  //paginado
  let id = req.params.id;

  Producto.findById(id)
    .populate('usuario', 'nombre email')
    .populate('categoria', 'descripcion')
    .exec((err,productoDB) => {

        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                  message: 'El ID no es correcto'
                }
            });
        }

        res.json({
          ok: true,
          producto: productoDB
        });
  });

});

//=====================================
// Buscar productos
//=====================================
app.get('/producto/buscar/:termino',verificaToken,(req,res) => {

    let termino = new RegExp(req.params.termino,'i');


    Producto.find({nombre: termino})
        .populate('categoria', 'descripcion')
        .exec((err,productoDB) => {

            if(err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if(!productoDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                      message: 'No se encontro ese termino'
                    }
                });
            }

            res.json({
              ok: true,
              producto: productoDB
            });


        });



});

//=====================================
// Crear producto
//=====================================
app.post('/producto', verificaToken, (req,res) => {
  //grabar el usuario
  //grabar una categoria del listado
  let body = req.body;

  let producto = new Producto({
      usuario:  req.usuario._id,
      nombre: body.nombre,
      precioUni: body.precioUni,
      descripcion: body.descripcion,
      disponible: body.disponible,
      categoria: body.categoria
  });

  producto.save((err,productoDB) =>{

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!productoDB) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.status(201).json({
      ok: true,
      producto: productoDB
    });


  });


});


//=====================================
// Actualizar producto
//=====================================
app.put('/producto/:id',verificaToken,(req,res) => {
  //grabar el usuario
  //grabar una categoria del listado
  let id = req.params.id;
  let body = req.body;

  Producto.findById(id,(err,productoDB) => {

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!productoDB) {
        return res.status(400).json({
            ok: false,
            err: {
              message: 'El ID no existe'
            }
        });
    }

      productoDB.nombre = body.nombre;
      productoDB.precioUni = body.precioUni;
      productoDB.descripcion = body.descripcion;
      productoDB.disponible= body.disponible;
      productoDB.categoria = body.categoria;

      productoDB.save((err,productoActualizado) => {

        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
          ok: true,
          producto: productoActualizado
        });

      });


  });

});


//=====================================
// Borrar producto
//=====================================
app.delete('/producto/:id',verificaToken,(req,res) => {
  //grabar el usuario
  //grabar una categoria del listado
  //disponible a falso borrado logico
  let id = req.params.id;

  Producto.findById(id, (err,productoDB) => {

    if(err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    if(!productoDB) {
        return res.status(400).json({
            ok: false,
            err: {
              message: 'El ID no existe'
            }
        });
    }

    productoDB.disponible = false;

    productoDB.save((err,productoEliminado) => {

      if(err) {
          return res.status(500).json({
              ok: false,
              err
          });
      }

      res.json({
        ok: true,
        producto: productoEliminado,
        mensaje: 'Producto Eliminado'
      });

    });


  });


});


module.exports = app;
