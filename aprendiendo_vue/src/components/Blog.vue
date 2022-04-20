<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";
import axios from "axios";
import Global from "../Global";
export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  data() {
    return {
      url: Global.url,
      articles: null,
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>