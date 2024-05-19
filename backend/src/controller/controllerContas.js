const ContaDB = require("../model/contasModel");

module.exports = {
  get: async (req, res) => {
    try {
      const resultConts = await ContaDB.find();
      res.json({ resultConts });
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },

  getById: async (req, res) => {
    const url = req.params.id;
    nome = url;

    try {
      const resultConts = await ContaDB.findOne({ nome: nome });
      res.json({ resultConts });
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },
  post: async (req, res) => {
    try {
      const resultConts = await ContaDB.create({
        id: req.body.id,
        nome: req.body.nome,
        tipo: req.body.tipo,
        mes: req.body.mes,
        ano: req.body.ano,
        value: req.body.value,
        user: req.body.user,
      });
      res.json({ message: "Criado com sucesso" });
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },
  put: async (req, res) => {
    try {
      const url = req.params.id;
      id = url;
      const resultConts = await ContaDB.updateOne(
        { id: id },
        {
          nome: req.body.nome,
          tipo: req.body.tipo,
          mes: req.body.mes,
          ano: req.body.ano,
          value: req.body.value,
          user: req.body.user,
        }
      );
      res.json({message: "Dados Atualizados com sucesso"})
    } catch (err) {
      res.json({ message: "Falha na Atualização dos dados" });
    }
  },

  delete: async (req, res) => {
    try{
      const url = req.params.id
      id = url;

      const resultConst = await ContaDB.deleteOne({id : id});

      res.json({message : "Dados deletados com sucesso"});

    }catch(err){
      res.json({ message: "Falha ao deletar usuário"})
    }
  },
};
