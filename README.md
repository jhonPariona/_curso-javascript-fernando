# JavaScript Moderno Guía Definitiva Construye +15 Proyectos

- **Incrustar js**

```js
//antes de cierre body
<script>
  console.log('JS incrustado');
</script>

//externo tbn antes del cierre de bbody
<script src='path/archivo.js'></script>
```

- **crear string** Existen 3 formas
  ```js
  const name = "string a guardar";
  const name = String("string a guardar");
  const name = new String("string a guardar");
  ```
  - **obtener tamaño** con length `variableString.length`
  - **remplaza** con replace
  - **corta** con slice(si le pasas primero un numero menor no hace nada) y substring(si le pasas primero un numero menor los invierte) `slice(indiceInicioIncluido, indiceFinalExcluido)`

## DOM

Interfaz stándar que nos ayuda a acceder a los elementos de una página
![DOM]("../images/Screenshot_20200913_172617.png")

[Udmy note recorrer dom](https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/learn/lecture/21851110?start=69#notes)

**document** es todo el HTML que tenemos desde el Doctype, head, body

- **getElementsByClassName** retorna un html collections con los elementos que tienen la clase indicada.
-
