<template src="./CreateArticle.html"></template>
<script>
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";
export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      url: Global.url,
      submitted: false,
      file: "",
    };
  },
  mounted() {
    //console.log(this.article);
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
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
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
                        "Artículo creado",
                        "El artículo se ha creado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                      //Mostrar alerta de error
                      swal(
                        "Creación fallida",
                        "El artículo no se ha guardado bien",
                        "error"
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo creado",
                  "El artículo se ha creado correctamente",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/blog");
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
  },
};
</script>