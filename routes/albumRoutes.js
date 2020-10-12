const express = require('express');
const {getAlbums}=require("../controllers/albumController")
const router = express.Router();


router.route('/').get(getAlbums);

module.exports = router;
