const express = require('express');
const UserController = require('../controllers/user');
const upload = require('../multer');
// const UserController = require('../controllers/User');

const router = express.Router();

/* GET users listing. */
router.post('/create-user/', upload.single('file'), UserController.Create);

module.exports = router;
