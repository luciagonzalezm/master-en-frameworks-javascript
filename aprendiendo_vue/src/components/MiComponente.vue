<template>
  <section id="content">
    <h2 class="subheader">{{ titulo }}</h2>
    <hr />
    <h1>Este es MI COMPONENTE</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
    <h2 class="subheader">Reactividad</h2>
    <input type="text" v-model="nombre" />
    <p>
      Mi nombre es: <strong>{{ nombre }}</strong>
    </p>
    <h2 class="subheader">Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    <p>
      Mi edad es: <strong>{{ edad }}</strong>
    </p>
    <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
      Eres mayor de edad
    </p>
    <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
      Eres de avanzada edad
    </p>
    <p class="alert-danger-provisional" v-else>Eres menor de edad</p>
    <h2 class="subheader">Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
    </ol>
  </section>
</template>
<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi componente",
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: ["Batman vs Superman", "El señor de los anillos", "Spiderman", "Anabelle"],
    };
  },
};
</script>