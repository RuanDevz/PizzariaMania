const express = require('express');
const router = express.Router();
const { Order } = require('../models');

router.post('/', async (req, res) => {
  const order = req.body;
  const CreateOrder = await Order.create(order);
  res.json({ CreateOrder, message: "Pedido criado com sucesso" }).status(200);
});

router.get('/', async (req, res) => {
  const GetOrders = await Order.findAll();
  res.status(201).json(GetOrders);
});

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params;

  try {
    const existingOrder = await Order.findByPk(id);

    if (!existingOrder) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.status(200).json({ existingOrder });
  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const orderData = req.body;

  try {
     let existingOrder = await Order.findByPk(id);
    if (!existingOrder) {
      return res.status(404).json({ message: "Pedido não foi encontrado" });
    }

    existingOrder = await existingOrder.update({
      Product: orderData.nomeProduto,
      Description: orderData.descricaoProduto,
      Img: orderData.urlImagem,
      Price: orderData.precoProduto
    });
    

    res.status(200).json({
      message: "Pedido atualizado com sucesso!",
      updatedOrder: existingOrder
    });
  } catch (error) {
    console.error("Erro ao editar pedido:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

module.exports = router;
