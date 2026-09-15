const authService = require('../services/auth.service');

exports.login = (req, res) => {
  console.log("BODY :", req.body);

  const { email, password } = req.body;

  authService.login(email, password, (err, result) => {

    if (err) {
      console.log("Erreur SQL :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }

    if (result.error) {
      return res.status(401).json({ message: result.error });
    }

    res.json({
      message: "Connexion réussie",
      user: result
    });
  });
};
