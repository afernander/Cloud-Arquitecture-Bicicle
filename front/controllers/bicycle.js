require('dotenv').config('./.env');
const http = require('http');
const request = require('request');
var passport = require('passport');
const route = "http://back:3000";

exports.create_get = function (req, res) {
  res.render("bicycles/create");
};

exports.get_info = function (req, res) {
  res.render("info");
};

exports.create_post = function (req, res, next) {
  try {
    const options = {
      method: 'POST',
      url: route + '/api/bicicletas/create',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        color: req.body.color,
        modelo: req.body.modelo,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        rented: false
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        throw new Error(error);
      }
      console.log(body);
    });

    res.redirect('/bicicletas');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};


exports.update_get = function (req, res, next) {
  const endpoint = route + '/api/bicicletas/' + req.params.id + '/show'
  console.log(req.params.id);
  try{
    http.get(endpoint, (resp) => {
      let data = '';
      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        bici = JSON.parse(data)
        console.log(bici);
        res.render('bicycles/update', bici)
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(404).send("Not Found");
  }
};

exports.update_post = function (req, res, next) {
  try {
    console.log(req.body);
    const options = {
      method: 'PUT',
      url: route + '/api/bicicletas/' + req.body.id + '/update',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        color: req.body.color,
        modelo: req.body.modelo,
        latitud: req.body.lat,
        longitud: req.body.lng,
        alquilada: req.body.alquilada,
        rented: false
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) {
        throw new Error(error);
      }

      console.log(body);
    });

    res.redirect('/bicicletas');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.alquilar = function (req, res, next) {
  try {
    console.log(req.body);
    const options = {
      method: 'PUT',
      url: route + '/api/bicicletas/' + req.body.id + '/alquilar',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        alquilada: req.body.alquilada,
        rented: false
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });

    res.redirect('/bicicletas')
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.list = function (req, res, next) {
  const list_bicycle_endpoint = route + '/api/bicicletas/list';
  const endpoint = list_bicycle_endpoint;
  http.get(endpoint, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      bicycles = JSON.parse(data);
      var data2 = {
        bicycles: bicycles,
      };
      if (req.user) {
        data2.iduser = req.user.id;
      }
      res.render('bicycles/index', data2);
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
    next(err); // pasar el objeto de error a la función next()
  });

  try {
    // bloque try
  } catch (error) {
    console.error("service not available");
    next("service not available"); // pasar el objeto de error a la función next()
  }
};



exports.list2 = function (req, res, next) {
  const list_bicycle_endpoint = route + '/api/bicicletas/list'
  const endpoint = list_bicycle_endpoint
  http.get(endpoint, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      try {
        bicycles = JSON.parse(data)
        res.render('index', bicycles)
      } catch (error) {
        console.log("Error parsing JSON data: " + error.message);
        res.status(500).send("Error parsing JSON data");
      }
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.status(500).send("Error fetching data from API");
  });
};

exports.show = function (req, res, next) {
  try {
    const endpoint = route + '/api/bicicletas/' + req.params.id + '/show'
    console.log(req.params.id);
    http.get(endpoint, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        bici = JSON.parse(data)
        res.render('bicycles/show', bici)
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  } catch (error) {
    next(error);
  }
};


exports.delete = function (req, res, next) {
  const options = {
    method: 'DELETE',
    url: route + '/api/bicicletas/' + req.body.id + '/delete'
  };

  try {
    request(options, function (error, response, body) {
      if (error) {
        throw new Error(error);
      }
      console.log(body);
    });
    res.redirect('/bicicletas');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
