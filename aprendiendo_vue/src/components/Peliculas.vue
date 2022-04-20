<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Películas</h2>
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br />
          {{ nombre | mayusculas | concatenaYear('ESTE ES EL MEJOR AÑO') }}
        </div>

        <div class="favorita" v-if="favorita">
          La película marcada es:
          <h3>{{ favorita.title }}</h3>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <div
            v-for="pelicula in peliculasMayuscula"
            v-bind:key="pelicula.title"
          >
            <Pelicula
              :pelicula="pelicula"
              @favorita="haLLegadoLaPeliculaFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar,
  },
  methods: {
    haLLegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    },
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    },
  },
  computed: {
    peliculasMayuscula() {
      var peliculasMod = this.peliculas;
      for (var i = 0; i < this.peliculas.lenght; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + " " + this.apellidos;
    },
  },
  data() {
    return {
      nombre: "Lucía",
      apellidos: "González",
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://i2.wp.com/hipertextual.com/wp-content/uploads/2016/03/batman-v-superman-8-scaled.jpg?fit=2560%2C1285&ssl=1",
        },
        {
          title: "Gran Totino",
          year: 2015,
          image: "https://static1.abc.es/Media/201504/18/clint7--644x362.jpg",
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://areajugones.sport.es/wp-content/uploads/2021/04/el-senor-de-los-anillos.jpg",
        },
      ],
    };
  },
};
</script>