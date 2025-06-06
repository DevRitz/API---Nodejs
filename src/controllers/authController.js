const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "Usuário já existe" });
    }

    user = new User({
      username,
      password, 
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      "supersecretjwtkey",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erro do Servidor");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: "Credenciais inválidas" });
    }

    // Comparação direta da senha
    if (user.password !== password) {
      return res.status(400).json({ msg: "Credenciais inválidas" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      "supersecretjwtkey",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erro do Servidor");
  }
};
