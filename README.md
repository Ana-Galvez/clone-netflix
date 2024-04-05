# Realización de sitio tipo clon de netflix con React

### Inicialización del proyecto

- npx create-react-app clone-netflix --template redux.

### Limpieza de archivos

### Librerías

- axios(comunicación api), firebase, react-router-dom(rutas), react-uuid(id), styled-components(css).

### Pages y components

- Pages: Home, Profile, Paypal, Login, Sign Up.
- Components: Banner, Header, Plans, Rows.

### App.js - layout

- creación de rutas.
- renderización de Login o las otras páginas dependiendo si ya hay usuario o no.

### Carpeta Image

- Creación carpeta image en public.

### Home.js

- Estructura básica y creación Home.css.

### Header.js y Header.css

- Agregado de img puestas con const.
- Agregado de transparecia al 50% al hacer scroll, con useState y useEffect.
- Linkeo del logo hacia Home y el avatar a Profile.

### Banner.js y Banner.css

-Img provisoria hasta poner la api()
-Estructura básica y creación y estilos en Banner.css.

### axios.js y Requests.js

-Implementación de la api de tmbd.
-Agregado api en banner y en las rows.