//DATI
const myPosts = require("../data");


//index
const index = (req, res) => {

    let postTosend = myPosts
    const queryString = req.query;
    if (queryString.tags !== undefined) {     //imposto map per rendere tutti i tags di Mypost minuscoli        
        postTosend = myPosts.filter((curPost, i) => curPost.tags.map((curItem) => curItem.toLowerCase()).includes(queryString.tags.toLowerCase())) // filtro mypost cercando post con tags richiesti 
    }
    const result = {
        post: postTosend,
        total: postTosend.length
    };
    res.json(result);

};

//show
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const postToFind = myPosts.find((curItem, i) => curItem.id === postId)

    res.json(postToFind);


};

//create
const create = (req, res) => {
    const newPost = req.body;

    // const lastItemIndex = myPosts.length - 1;  //calcolo successivo id
    // const lastItem = myPosts[lastItemIndex];
    // const newIndex = lastItem.id + 1;
    // newPost.id = newIndex;
    newPost.id = myPosts[myPosts.length - 1].id + 1;
    myPosts.push(newPost);
    res.statusCode = 201;
    res.json(newPost);
};

//update
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const newData = req.body;
    const indexToUpdate = myPosts.findIndex((curPost, i) => curPost.id === postId) //trovo index elemento da modificare
    newData.id = postId; // aggiungo chiave id a newdata

    myPosts[indexToUpdate] = newData; //sostituisco elemento nella posizione di elemento da modificare con l'oggetto newdata
    res.json(newData);


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

    myPosts.splice(postIndex, 1);
    res.sendStatus(204)
    console.log(myPosts)

};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};

