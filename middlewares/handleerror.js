const handleError = (err, req, res, next) => { //funzione che gestisce errore
res.statusCode = 500;
res.json({
    error : true,
    message : "Errore interno del server!"
})
};

module.exports = handleError;