const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// importo las rutas
const categoriasRoutes = require('./routes/categorias');
app.use(categoriasRoutes);

// ruta de inicio
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de categorías'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
