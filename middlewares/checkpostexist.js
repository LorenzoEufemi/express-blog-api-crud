// DATI

const myPosts = require("../data");


const checkPostExist = (req, res, next) => { //funzione controlla se è stato inserito id corretto
    const postId = parseInt(req.params.id);
    const post = myPosts.find((curPost) => curPost.id === postId);
    if (post !== undefined) {
        next()
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non gtrovato"
        })
    }
};

module.exports = checkPostExist;