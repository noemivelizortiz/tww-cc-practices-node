const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {validatorGetItem} = require('../validators/storage')
const { 
    getItems,
    getItem, 
    updateItem, 
    deleteItem, 
    createItem,
} = require('../controllers/storage');


/**
 * lista de items
 */
 
router.get('/', getItems);
/**
 * detalle de items
 */
router.get('/:id', validatorGetItem, getItem);
/**
 * eliminar item
 */
router.delete('/:id', validatorGetItem, deleteItem);
/**
 * crear item
 */
router.post('/', uploadMiddleware.single('myfile') , createItem);


module.exports = router;