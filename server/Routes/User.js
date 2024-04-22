const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {User} = require('../models')
const {sign} = require('jsonwebtoken')

router.post('/', async (req, res) => {
    try {
      const { Username, Password } = req.body;
  
      const existingUser = await User.findOne({ where: { Username } });
  
      if (existingUser) {
        return res.status(201).json({ error: "Usuário já existente" });
      }
  
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      await User.create({
        Username,
        Password: hashedPassword,
      });
  
      res.status(200).json({ message: "Usuário criado com sucesso" });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });


router.post('/login', async (req,res) =>{
    const {Username, Password} = req.body
    const user = await User.findOne({where: {Username: Username}})

    if (!user) {
        return res.json({error: "Usuário não existe"})
    }

    bcrypt.compare(Password, user.Password).then((match) =>{
        if (!match) {
            return res.json({ error: "Usuário com a senha não combinam"})
        }

        const accessToken = sign({username: user.Username, id: user.id}, "Tokenimportant")

        res.json(accessToken)
    })
})

router.post('/user/login', async (req, res) => {
  const { Username, Password } = req.body;
  const user = await User.findOne({ where: { username: Username } });

  if (!user || !bcrypt.compareSync(Password, user.Password)) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  res.status(200).json({ user });
});


router.get('/login', async (req,res) =>{
  const users = await User.findAll({
    attributes: ['id', 'Username', 'isAdmin'],
  });
    res.status(200).json(users)
})

router.put('/login/:id', async (req, res) => {
  const userUpdated = req.body;
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }

    await user.update(userUpdated); 

    res.status(200).json({ msg: "Usuário atualizado", user: userUpdated }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro ao atualizar o usuário." });
  }
});


module.exports = router