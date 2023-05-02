const Bicicleta = require("../models/bicicleta");

exports.create = function (req, res) {
  const bicicleta = new Bicicleta(req.body);
  bicicleta
    .add()
    .then(() => {
      res.status(200).json("Bicicleta created successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Internal Server Error!");
    });
};

exports.list = function (req, res) {
  Bicicleta.allBicis().then((Bicicletas) => {
      if (Bicicletas.length !== 0) {
          res.status(200).json(Bicicletas)
      } else {
          res.status(404).send('Bicicletas not found');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
  });
};

exports.show = function (req, res) {
  Bicicleta.findById(req.params.id).then((Bicicleta) => {
      console.log(Bicicleta)
      if (Bicicleta != null) {
          res.status(200).json(Bicicleta)
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};

exports.update = function (req, res) {
  Bicicleta.updateById(req.params.id, req.body).then((Bicicleta) => {
      if (Bicicleta) {
          res.status(200).json('Bicicleta updated Successfully!')
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};

exports.delete = function (req, res) {
  Bicicleta.removeById(req.params.id).then((Bicicleta) => {
      if (Bicicleta) {
          res.status(200).json('Bicicleta deleted Successfully!')
      } else {
          res.status(404).send('Bicicleta Not found!');
      }
  }).catch((err) => {
      res.status(500).send('Internal Server Error!');
      console.log(err);
  });
};
