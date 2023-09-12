const {handleHttpError} = require('../utils/handleError')
/**
 * array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */




const checkRol = (roles) => (req, res, next) => {
   try{
    const {user} = req;
    console.log({ user });
    const rolesByUser = user.role; //user
    
    const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) //todo true, false
    if(!checkValueRol){
        handleHttpError(res, 'USER_NOT_PERMISSIONS', 403 )
        return;
    }

    next();
    
   }catch(e){
    handleHttpError(res, 'ERROR_PERMISSIONS', 403 )
   }
};

module.exports = checkRol;