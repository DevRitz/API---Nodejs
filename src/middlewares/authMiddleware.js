const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Nenhum token, autorização negada" });
  }

  try {
    const decoded = jwt.verify(token, "supersecretjwtkey"); 
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token não é válido" });
  }
};

