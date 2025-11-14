# Marketplace de Artesanías - Frontend

Plantilla base de frontend para un marketplace de impacto social de artesanías mexicanas.

## Tecnologías

- **React 18** con **Vite** (desarrollo rápido)
- **JavaScript** (sin TypeScript)
- **Tailwind CSS** (estilos)
- **React Query** (manejo de estado asíncrono)
- **Zustand** (estado global del carrito)
- **React Router** (navegación)
- **react-i18next** (internacionalización ES/EN)
- **Axios** (cliente HTTP)
- **Workbox** (PWA básico)

## Arquitectura Hexagonal

```
/src
├── /app                    # Capa de Aplicación
│   ├── App.jsx
│   ├── main.jsx
│   ├── /routes             # Páginas de la aplicación
│   └── /layouts            # Layouts reutilizables
│
├── /domain                 # Capa de Dominio (lógica de negocio)
│   ├── /entities           # Entidades del negocio (Product, Cart, Order)
│   ├── /services           # Servicios del dominio
│   └── /ports              # Interfaces para adaptadores
│
├── /infrastructure         # Capa de Infraestructura (adaptadores)
│   ├── /api                # Adaptadores HTTP (productApi, orderApi)
│   ├── /storage            # Adaptadores de persistencia
│   ├── /i18n               # Configuración de idiomas
│   └── /mock               # Datos mock para desarrollo
│
├── /ui                     # Capa de Presentación
│   ├── /components         # Componentes React
│   └── /hooks              # Custom hooks
│
└── /core                   # Núcleo transversal
    ├── /store              # Estado global (Zustand)
    ├── /context            # Contextos de React
    └── /routing            # Configuración de rutas
```

### Flujo de Datos

1. **UI Layer** → Los componentes solicitan datos
2. **Application Layer** → Las rutas coordinan las peticiones
3. **Domain Layer** → Los servicios ejecutan la lógica de negocio
4. **Infrastructure Layer** → Los adaptadores conectan con APIs externas

**Ventaja**: Para conectar el backend real solo necesitas cambiar los adaptadores en `/infrastructure/api` sin tocar la UI ni la lógica de negocio.

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=https://api.tu-backend.com
VITE_API_TIMEOUT=10000
VITE_ENABLE_MOCK_DATA=true  # false para usar API real
```

## Funcionalidades Implementadas

### 🏠 Home / Catálogo
- Grid responsive de productos
- Datos mock de 6 productos artesanales
- Integración con React Query para caching

### 🛍️ Detalle de Producto
- Galería de imágenes con navegación
- Información del artesano
- Agregar al carrito

### 🛒 Carrito de Compras
- Agregar/eliminar productos
- Actualizar cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### 🌍 Internacionalización
- Español (ES) e Inglés (EN)
- Toggle en navbar
- Traducciones en `/infrastructure/i18n/locales/`

### ♿ Accesibilidad (WCAG AA)
- Botón A+ para aumentar tamaño de fuente
- Modo alto contraste
- Tamaños táctiles mínimos 44x44px
- Navegación por teclado
- Contraste de colores AA

### 🎨 Panel del Artesano
- Dashboard con estadísticas mock
- Listado de productos del artesano
- Preparado para CRUD completo

### 📱 PWA
- Manifest.json configurado
- Service Worker básico
- Cacheo de recursos estáticos

## Configuración del Backend

El cliente HTTP está configurado en `/src/infrastructure/api/httpClient.js`:

- **URL Base**: `VITE_API_URL` del .env
- **Timeout**: 10 segundos
- **Autenticación**: JWT Bearer Token automático
- **Interceptores**: Manejo de errores 401, 403, 404, 500
- **Proxy de desarrollo**: Vite proxy `/api` → `http://localhost:3000`

### Cambiar de Mock a API Real

1. En `.env` cambia: `VITE_ENABLE_MOCK_DATA=false`
2. Configura tu backend URL: `VITE_API_URL=https://tu-api.com`
3. Los adaptadores en `/infrastructure/api/` automáticamente usarán la API real

## Datos Mock

Los datos se encuentran en `/src/infrastructure/mock/products.js`:

- 6 productos artesanales
- 2 artesanos con historias
- Imágenes de Pexels (placeholders)

## Rutas Disponibles

```
/                        → Home / Catálogo
/product/:id             → Detalle de producto
/cart                    → Carrito de compras
/artisan/dashboard       → Panel del artesano (mock)
/artisan/products        → Productos del artesano
```

## Estructura de Componentes

```
/ui/components
├── /common              # Botones, Inputs, Modals reutilizables
├── /product             # ProductCard, ProductGallery
└── /navigation          # Navbar, Footer
```

## Próximos Pasos

1. **Conectar Backend Real**: Actualiza los adaptadores en `/infrastructure/api/`
2. **Autenticación Real**: Implementa login/registro con tu API
3. **Checkout**: Agregar flujo de pago completo
4. **Búsqueda y Filtros**: Agregar búsqueda por categoría, precio, etc.
5. **Panel del Artesano**: CRUD completo de productos
6. **Optimización**: Lazy loading de rutas, compresión de imágenes

## Comandos Útiles

```bash
# Instalar nuevas dependencias
npm install [paquete]

# Limpiar caché de Vite
rm -rf node_modules/.vite

# Limpiar todo y reinstalar
rm -rf node_modules package-lock.json && npm install
```

## Notas de Desarrollo

- **Mock Data**: Por defecto está activo para desarrollo sin backend
- **React Query DevTools**: Disponibles en desarrollo (esquina inferior izquierda)
- **Hot Reload**: Vite proporciona HMR automático
- **ESLint**: Configurado para JavaScript/JSX

## Soporte

Para problemas o preguntas sobre la arquitectura, revisa los comentarios en el código fuente, especialmente en:

- `/src/domain/` para entender las entidades de negocio
- `/src/infrastructure/api/httpClient.js` para la configuración HTTP
- `/src/core/store/cartStore.js` para el manejo del carrito

---

**Hecho con ❤️ para artesanos mexicanos**
