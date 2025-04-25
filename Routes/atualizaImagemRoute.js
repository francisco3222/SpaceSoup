//Codigo comentado que deveria mudar a imagem de perfil no lado do servidor
// const express = require('express');
// const multer = require('multer');
// const app = express();
//
// // Preparação do Multer
// const upload = multer({
//
//      // Destino da imagem
//     dest: 'user/',
//     limits: {
//         fileSize: 10000000, // limite 10 MB
//     },
//      // Filtro para apenas permitir ficheiros .jpg, .jpeg e .png
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Por favor enviar uma imagem dos tipos: .jpg, .jpeg ou .png).'));
//         }
//         cb(undefined, true);
//     },
// });
//
// app.post('/Routes/atualizaImagemRoute', upload.single('profilePicture'), (req, res) => {
//     res.json({ success: true });
// }, (error, req, res, next) => {
//     res.status(400).json({ error: error.message });
// });
//
// module.exports = upload;
