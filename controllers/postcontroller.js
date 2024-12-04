//DATI
const myPosts = require("../data");


//index
const index = (req, res) => {
    

    let postTosend
    const queryString = req.query;
    if (queryString.tags !== undefined) {
        postTosend = myPosts.filter((curPost, i) => curPost.tags.includes(queryString.tags))
    }
    const result = {
        post : postTosend,
        total : postTosend.length
    };
    res.json(result);
    res.json(myPosts)
};
//show
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const postToFind = myPosts.find((curItem, i) => curItem.id === postId)
    if (postToFind === undefined) {
        res.statusCode = 404
        res.json({
            error: true,
            message: "Post non trovato"
        })
    } else {
        res.json(postToFind);
    }

};
//create
const create = (req, res) => {
    res.send("Qui aggiungo un nuovo post")
};
//update
const update = (req, res) => {
    const postId = req.params.id;
    res.send("Qui aggiorno dati di un post " + postId);
};
//modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.send("Qui aggiorno solo alcuni dati di un post " + postId);
};
//destroy
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = myPosts.findIndex((curPost, i) => curPost.id === postId);
    if (postIndex === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato"
        })
    } else {
        myPosts.splice(postIndex, 1);
        res.sendStatus(204)
        console.log(myPosts)
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};

