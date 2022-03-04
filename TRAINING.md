# InitialAngularCore

## PRACTICE 1

- Creación de un módulo nuevo dentro de auth-layout. El trabajo consiste en replicar el mismo
  trabajo realizado en el módulo usuarios pero en este caso con POSTs. Que contenga dos páginas, el listado
  de posts y el detalle de un post.
  Las apis para post son: https://jsonplaceholder.typicode.com/posts y https://jsonplaceholder.typicode.com/posts/1

### Pasos a seguir

- Crear carpeta post que cuelgue de src/app/modules/auth-layout/modules
- Crear carpetas pages, services que cuelguen de src/app/modules/auth-layout/modules/posts
- Crear posts.module.ts
- Crear posts-routing.module.ts
- crear páginas de listado y detalle de posts
- Añadir nueva ruta autorizada con path: 'posts' en src/app/modules/auth-layout/auth-layout-routing.module.ts

## PRACTICE 2

Creación de nuevos componentes de usuarios para visualizar los datos del listado con una tabla de material y el detalle
de un usuario con la librería bootstrap. Es obligatorio usar INPUT/OUTPUT para comunicar los componentes
con la página que use los componentes.

### Pasos a seguir

- Crear las carpetas users-table y users-detail desde src/app/modules/auth-layout/modules/users/components
- En este caso me apoyaría del comando ng generate component 'path/nombre-del-componente' para que sea mas sencillo
  la creación de ambos componentes.
- Una vez creados, definirlos en el módulo de users src/app/modules/auth-layout/modules/users/users.module.ts. Deben quedar definidos en la sección de "declarations".
- Usar el componente users-table en la página de listado. users-table debe recibir a través de un Input todo el listado
  (o users) recogido en la página.
- Crear un output en users-table para que al hacer click en una fila de la tabla se comunique con la página y desde esta poder navegar al detalle de un usuario.
- Usar el componente users-detail desde la página de detalle de usuario. users-detail debe recibir a través de un Input todo el detalle (o user) recogido en la página.

- La tabla debe mostrar los siguientes campos del listado de usuarios:
  "id"
  "name"
  "username"
  "email"
- El detalle debe mostrar los siguientes campos de un usuario:
  "name"
  "username"
  "email"
  "phone"
  "website"
  "company": "name", "catchPhrase", "bs"

- Información a tener en cuenta:
  https://material.angular.io/components/table/overview
  https://angular.io/guide/inputs-outputs
  https://medium.com/williambastidasblog/angular-decoradores-input-y-output-70af5f43a04
  https://www.youtube.com/watch?v=acxmiISz5Ag&ab_channel=JamesSchneider-Programaci%C3%B3nInform%C3%A1tica

## PRACTICE 3

- Convertir las dos páginas realizadas en el primer ejercicio (detalle de posts y listado de posts) en dos módulos independientes.

### Pasos a seguir

- Crear la carpeta modules dentro de src/app/modules/auth-layout/modules/posts
- Crear las carpetas "page" dentro de ambos módulos creados anteriormente
- Mover ambas páginas ya realizadas a cada una de las carpetas "page" creadas
- Definir la carga "perezosa" de cada path dentro del routing de post.
- Crear un servicio independiente para cada uno de los nuevos módulos. Un servicio que consulte el listado
  y otro que consulte el detalle.

Como resultado final se espera tener el mismo código que teníamos antes pero en diferentes módulos. Haría hincapié en como esta definido src/app/modules/auth-layout/auth-layout-routing.module.ts porque deberíamos encontrar algo muy similar pero a mas profundidad.
