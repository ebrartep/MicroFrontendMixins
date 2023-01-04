import Swal from "sweetalert2";

export default {
    data() {
      return { /* data */ }
    },
    methods: {
      successMsq() {
        Swal.fire(
          "Başarılı!",
          "İşleminiz başarılı bir şekilde oluşmuştur.",
          "success"
        );
      },

    },
  }