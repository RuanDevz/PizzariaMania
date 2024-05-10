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

router.get('/:id',async (req,res) =>{
  let {id} = req.params
  const getorderbyid = req.body
  
  try{
    const existingProduct = await Order.findByPk(id)

    if(!existingProduct){
      res.status(400).json({message: "Pedido não encontrado"})
    }
    res.status(200).json({existingProduct})

  }catch(error){
    res.status(500).json({error: "Erro interno do servidor"})
  }
})

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
  const OrdersUpdate = req.body;
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);
    
    if (!order) {
      return res.status(404).json({ msg: "Pedido não encontrado." });
    }

    await order.update(OrdersUpdate); 

    res.status(200).json({ msg: "Pedido atualizado", order: OrdersUpdate }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro ao atualizar o pedido." });
  }
});



router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const existingOrder = await Order.findByPk(id);

    if (!existingOrder) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }

    await existingOrder.destroy(); 

    return res.status(200).json({ message: "Pedido removido com sucesso!" }); 
  } catch (error) {
    console.error("Erro ao remover pedido:", error);
    return res.status(500).json({ error: "Erro interno do servidor" }); 
  }
});




module.exports = router;
