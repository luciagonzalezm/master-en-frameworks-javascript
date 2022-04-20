<template src="./CreateArticle.html"></template>
<script>
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";
export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      url: Global.url,
      submitted: false,
      file: "",
      isEdit: true,
    };
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  validations: {
    article: {
      title: { required },
      content: { required },
    },
  },
  methods: {
    save() {
      this.submitted = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article)
          .then((res) => {
            if (res.data.status === "success") {
              //Subida de archivo
              if (
                this.file !== null &&
                this.file !== undefined &&
                this.file !== ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal(
                        "Artículo editado",
                        "El artículo se ha editado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/articulo/" + this.article._id);
                    } else {
                      //Mostrar alerta de error
                      swal(
                        "Edición fallida",
                        "El artículo no se ha editado bien",
                        "error"
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "El artículo se ha editado correctamente",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/articulo/" + this.article._id);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
      });
    },
  },
};
</script>