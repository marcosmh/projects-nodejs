const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({ useTempFiles: true }));
//app.use(fileUpload());

const Usuario = require('../models/usuario');

app.put('/upload/:tipo/:id', function(req, res) {

    let tipo = req.params.tipo;
    let id = req.params.id;

    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se se ha seleccionado ningún archivo.'
                }
            });
    }


    //valida tipo de archivo
    let tiposPermitidos = ['productos', 'usuarios'];
    if (tiposPermitidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            error: {
                message: 'Los tipos permitidos son' + tiposPermitidos.join(',')
            }
        });
    }


    let archivo = req.files.archivo;
    let archivoSplit = archivo.name.split('.');
    let extension = archivoSplit[archivoSplit.length - 1];

    //Extensiones permitidas
    let extensionesPermitidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesPermitidas.indexOf(extension) < 0) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'Las extensiones permitidas son ' + extensionesPermitidas.join(',')
                }
            })
    }

    let nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`;
    console.log("nombreArchivo: " + nombreArchivo);

    archivo.mv(`uploads/${tipo}/${nombreArchivo}`, function(err) {

        if (err) {
            res.status(400)
                .json({
                    ok: false,
                    err: {
                        message: 'Error al cargar el archivo.'
                    }
                });
        }


        res.json({
            ok: true,
            message: 'Archivo cargado correctamente.'
        });
    });

});

module.exports = app;