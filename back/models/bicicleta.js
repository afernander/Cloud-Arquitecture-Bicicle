const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/mydatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

let Bicicleta = function(id, color, modelo, latitud, longitud) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.latitud = latitud;
  this.longitud = longitud;
};

Bicicleta.prototype.toString = function() {
  return `id: ${this.id}| color: ${this.color}`;
};

Bicicleta.allBicis = function(callback) {
  db.all('SELECT * FROM bicicletas', [], function(err, rows) {
    if (err) {
      console.error(err.message);
    }
    let bicis = rows.map((row) => {
      return new Bicicleta(row.id, row.color, row.modelo, row.latitud, row.longitud);
    });
    callback(null, bicis);
  });
};

Bicicleta.add = function(bici, callback) {
  db.run('INSERT INTO bicicletas (id, color, modelo, latitud, longitud) VALUES (?, ?, ?, ?, ?)', [bici.id, bici.color, bici.modelo, bici.latitud, bici.longitud], function(err) {
    if (err) {
      console.error(err.message);
    }
    callback(null);
  });
};

Bicicleta.findById = function(id, callback) {
  db.get('SELECT * FROM bicicletas WHERE id = ?', [id], function(err, row) {
    if (err) {
      console.error(err.message);
    }
    if (row) {
      let bici = new Bicicleta(row.id, row.color, row.modelo, row.latitud, row.longitud);
      callback(null, bici);
    } else {
      callback(new Error(`No existe una bicicleta con el id ${id}`));
    }
  });
};

Bicicleta.removeById = function(id, callback) {
  db.run('DELETE FROM bicicletas WHERE id = ?', [id], function(err) {
    if (err) {
      console.error(err.message);
    }
    callback(null);
  });
};

Bicicleta.updateById = function(id, newBici, callback) {
  db.run('UPDATE bicicletas SET color = ?, modelo = ?, latitud = ?, longitud = ? WHERE id = ?', [newBici.color, newBici.modelo, newBici.latitud,newBici.longitud, id], function(err) {
    if (err) {
      console.error(err.message);
    }
    callback(null);
  });
};

module.exports = Bicicleta;