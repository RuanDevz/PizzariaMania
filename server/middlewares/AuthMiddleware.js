const { verify, TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) {
        return res.status(401).json({ error: "Token não fornecido." });
    }

    try {
        const validToken = verify(accessToken, "Tokenimportant");
        req.user = validToken; // Se necessário, você pode acessar informações do usuário em rotas subsequentes
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            return res.status(401).json({ error: "Token expirado." });
        } else if (err instanceof JsonWebTokenError) {
            return res.status(401).json({ error: "Token inválido." });
        } else {
            return res.status(500).json({ error: "Erro ao verificar o token." });
        }
    }
};

module.exports = validateToken;
