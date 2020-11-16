const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({ useTempFiles: true }));
//app.use(fileUpload());

app.put('/upload', function(req, res) {

    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se se ha seleccionado ningún archivo.'
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

    archivo.mv(`uploads/${archivo.name}`, function(err) {
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