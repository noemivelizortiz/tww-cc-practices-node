const bcryptjs = require('bcryptjs')

/**
 * contrasena sin encriptar:
 * @param {*} passwordplain 
 */

const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
};

/**
 * pasar contrasena sin ecriptar y pasar encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */

const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encrypt, compare };