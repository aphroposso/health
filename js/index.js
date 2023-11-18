const express = require("express");
const router = express.Router();
const PORT = 5500;
//home page route.
router.get("/", function(req, res){
    res.send("UPHSA Home Page");
});