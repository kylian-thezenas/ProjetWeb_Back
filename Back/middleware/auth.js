const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
       const userName = decodedToken.userName;
       req.auth = {
           userName: userName
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};