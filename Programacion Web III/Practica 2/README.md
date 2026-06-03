# Práctica 2 - Programación Web 3

## Instalación rápida

1. **Instalar dependencias:**
```bash
npm install
```

2. **Crear la base de datos** (ver más abajo)

3. **Ejecutar:**
```bash
npm run dev
```

Listo! Entra a `http://localhost:3000`

---

## Crear la Base de Datos

### Opción 1: Con phpMyAdmin (la más fácil)

1. Abre `http://localhost/phpmyadmin`
2. Login (usuario: root, sin contraseña)
3. Click en "SQL"
4. Copia TODO el contenido del archivo `sql/esquema.sql`
5. Pégalo en el cuadro blanco
6. Dale al botón "Ejecutar"

### Opción 2: Con terminal

```bash
mysql -u root < sql/esquema.sql
```

---

## Los 5 Ejercicios

### 1️⃣ POST /categorias
Crear una categoría nueva

```json
POST /categorias
{
  "nombre": "Hogar",
  "descripcion": "Cosas para el hogar"
}
```

### 2️⃣ GET /categorias
Ver todas las categorías

```
GET /categorias
```

### 3️⃣ GET /categorias/:id
Ver 1 categoría con sus productos

```
GET /categorias/1
```

### 4️⃣ PATCH /categorias/:id
Actualizar una categoría

```json
PATCH /categorias/1
{
  "nombre": "Electrónica Nueva"
}
```

### 5️⃣ DELETE /categorias/:id
Borrar una categoría (y sus productos)

```
DELETE /categorias/1
```

---

## Estructura de carpetas

```
practica-2/
├── server.js
├── package.json
├── .env
├── routes/
│   └── categorias.js
├── controllers/
│   └── categoriasController.js
├── db/
│   └── conexion.js
└── sql/
    └── esquema.sql
```

---

## Probar con Thunder Client

1. Abre VS Code
2. Extensiones → Busca "Thunder Client" → Instala
3. Abre Thunder Client y prueba los endpoints

Ejemplo:
- Método: POST
- URL: http://localhost:3000/categorias
- Body: `{ "nombre": "Hogar" }`
- Click "Send"

---

Eso es todo! 😊
