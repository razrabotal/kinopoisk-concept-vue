<template>
  <Main :persona="persona" :banners="banners" :history="history" :random-film="randomFilm"></Main>
</template>

<script>
  import Main from './_Main.vue'

  export default {
    name: "Page",
    components: {
      Main
    },
    props: ["banners", "history", "randomFilm"],
    data() {
      return {
        persona: '',
      };
    },
    created: function(){
      fetch('https://api.myjson.com/bins/9ivun')
       .then((response) => {
           if(response.ok) {
             return response.json();
           }
           throw new Error('Network response was not ok');
       })
       .then((json) => {
           this.persona = json;
           sortBy(this.persona.films[0].items, 'year');
           setTimeout(function () {
             reInitial();
           }, 1)
       })
       .catch((error) => {
           console.log(error);
       });
    }
  }
</script>
