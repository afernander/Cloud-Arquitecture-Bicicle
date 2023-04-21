

/* /* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router; */

const express = require("express");
const router = express.Router();
const bicicletaController = require("../controllers/bicicleta");

router.get("/", bicicletaController.list);
router.get("/bicicletas/:id/show", bicicletaController.show);
router.get("/bicicletas/create", bicicletaController.create_get);
router.post("/create", bicicletaController.create_post);
router.get("/bicicletas/:id/update", bicicletaController.update_get);
router.post("/bicicletas/:id/update", bicicletaController.update_post);
router.post("/bicicletas/:id/delete", bicicletaController.delete);

module.exports = router;
