const pool = require('../db/conexion');

// ========================
// INCISO 1: POST crear categoría
// ========================
async function crearCategoria(req, res) {
  try {
    const { nombre, descripcion } = req.body;
    
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    const sql = 'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)';
    const [resultado] = await pool.execute(sql, [nombre, descripcion]);

    res.status(201).json({
      id: resultado.insertId,
      nombre,
      descripcion,
      mensaje: 'Categoría creada'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// ========================
// INCISO 2: GET todas las categorías
// ========================
async function obtenerCategorias(req, res) {
  try {
    const sql = 'SELECT * FROM categorias';
    const [categorias] = await pool.execute(sql);

    res.json({
      total: categorias.length,
      datos: categorias
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// ========================
// INCISO 3: GET categoría por ID con productos
// ========================
async function obtenerCategoriaPorId(req, res) {
  try {
    const { id } = req.params;

    // busco la categoría
    const sqlCategoria = 'SELECT * FROM categorias WHERE id = ?';
    const [categorias] = await pool.execute(sqlCategoria, [id]);

    if (categorias.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    // busco los productos de esa categoría
    const sqlProductos = 'SELECT * FROM productos WHERE categoria_id = ?';
    const [productos] = await pool.execute(sqlProductos, [id]);

    res.json({
      categoria: categorias[0],
      productos: productos
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// ========================
// INCISO 4: PATCH actualizar categoría
// ========================
async function actualizarCategoria(req, res) {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    // verifico que existe
    const sqlVerificar = 'SELECT * FROM categorias WHERE id = ?';
    const [existe] = await pool.execute(sqlVerificar, [id]);

    if (existe.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    // actualizo
    const sql = 'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?';
    await pool.execute(sql, [nombre, descripcion, id]);

    res.json({ mensaje: 'Categoría actualizada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// ========================
// INCISO 5: DELETE eliminar categoría y productos
// ========================
async function eliminarCategoria(req, res) {
  try {
    const { id } = req.params;

    // primero elimino los productos
    const sqlProductos = 'DELETE FROM productos WHERE categoria_id = ?';
    await pool.execute(sqlProductos, [id]);

    // luego elimino la categoría
    const sqlCategoria = 'DELETE FROM categorias WHERE id = ?';
    const [resultado] = await pool.execute(sqlCategoria, [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.json({ mensaje: 'Categoría y productos eliminados' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoriaPorId,
  actualizarCategoria,
  eliminarCategoria
};
