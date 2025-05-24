const express = require('express');
const router = express.Router();
const { saveCustomerDetails } = require('../controllers/customerController');

router.post('/', saveCustomerDetails);

module.exports = router;
