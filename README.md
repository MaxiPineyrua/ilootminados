# iLOOTminados - Catálogo de Veladores Gamer
- Link de la APP web: https://ilootminados.vercel.app/ (funciona mal cuando se actualiza la página admin no regresa al home. Si descarga el repo, la app funciona perfecto.)
## 👥 Integrantes
- Walter Maximiliano Piñeyrúa

---

## 📌 Descripción
Aplicación web desarrollada en React que simula un catálogo de veladores temáticos inspirados en videojuegos. Permite visualizar productos, ver detalles, y gestionar un panel de administración con operaciones CRUD.

---

## 🎮 Temática
Veladores gamer inspirados en franquicias de videojuegos como God of War, Doom, Resident Evil, entre otros.

---

## 🔐 Usuarios y roles

La aplicación simula dos tipos de usuarios:

### 👤 Usuario común
- Puede ver el catálogo de veladores
- Puede ver el detalle de cada producto
- Usuario: usuario
- Contraseña: 1234

### 🔑 Administrador
- Puede acceder al panel de administración
- Puede agregar nuevos veladores
- Puede editar veladores existentes
- Puede eliminar veladores
- Puede realizar lo mismo que el usuario común.
- Usuario: admin
- Contraseña: 1234

---
## ▶️ Instrucciones para levantar el proyecto

1. Clonar el repositorio:
  git clone https://github.com/MaxiPineyrua/ilootminados

2. Instalar dependencias:
  npm install

3. Ejecutar el proyecto:
  npm run dev

4. Abrir en el navegador:
  http://localhost:5173

---

## ⚙️ Funcionalidades principales

- Login y logout simulado
- Sistema de roles (admin / usuario)
- Catálogo de veladores
- Vista de detalle de cada velador
- CRUD completo en panel de administración:
  - Crear veladores
  - Editar veladores
  - Eliminar veladores
- Validaciones básicas en formularios
- Uso de datos locales en formato JSON

---

## 🧱 Tecnologías utilizadas

- React.js
- React Router
- Context API
- Hooks (useState, useContext, useParams, useNavigate)
- JSON local como fuente de datos

---

## 📁 Estructura del proyecto

- components/ → componentes reutilizables (Navbar)
- pages/ → vistas principales (Catalogo, Admin, Login, Detalle)
- context/ → manejo de usuario y roles
- data/ → archivos JSON (veladores y categorías)

---

## 🚀 Estado del proyecto

Proyecto funcional sin backend, con datos simulados en frontend.

---