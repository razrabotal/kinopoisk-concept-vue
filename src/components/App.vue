<template>
  <div id="app" class="vue">
    <Header :user="user" :background="banners.background"></Header>
    <router-view :banners="banners" :history="history" :random-film="randomFilm"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './_Header.vue'
  import Footer from './_Footer.vue'

  export default {
    name: "app",

    components: {
      Header, Footer,
    },
    data() {
      return {
        user: {
          name: 'Taras Gordienko',
          img: 'http://www.lovemarks.com/wp-content/uploads/lovemark-jesus-christ-600x600.jpg',
          level: 7,
          percent: '76%',
          notify: 4,
        },
        banners: {
          background: {
            imgSrc: 'http://kinomania.com.ua/sites/default/files/styles/image_movie_to_front/public/custominfo/image_to_front/1600x475_chips_premier.jpg?itok=4mRtoGCs',
            textButton: 'Забронировать билет',
            title: 'Трейлер «Каліфорнійський дорожній патруль»',
            trailerSrc: 'https://www.youtube.com/embed/4AORgeBoUFs?rel=0&amp;showinfo=0'
          },
          banner: {
            name: 'И жизнь, и пальмы, и кино',
            src: 'img/banner2.jpg'
          },
          bannerFilm: {
            title: "Пассажиры",
            href: "/efwwef",
            img: "https://kinogb.me/uploads/thumbs/280_395_0_90_1/1482616491_4eb98bf072.jpg"
          }
        },
        randomFilm: {
          img:'https://st.kp.yandex.net/images/film_big/612.jpg',
          back: 'http://kinogo.club/uploads/posts/2013-06/1372529896_chernyi.yastreb.1.jpg',
          href: 'https://www.kinopoisk.ru/film/507/',
          year: '2001',
          title: 'Черный Ястреб',
          titleTranslit: 'Black Hawk Down',
          genre: 'военный',
          genreKey: 'war',
          duration: '144 мин',
          rating: '6.53',
          votes: 16341,
          mark: 2
        },
        history: {
          pagesCount:45,
          queryCount:15,
          items:[
            {
              src: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_10988.jpg',
              name: 'Мартин Скорсезе',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_9271.jpg',
              name: 'Стив Бушеми',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/film_iphone/iphone360_271501.jpg',
              name: 'Байки из склепа',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2424.jpg',
              name: 'Ричард Доннер',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_8210.jpg',
              name: 'Брайан Сингер',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/film_iphone/iphone360_597687.jpg',
              name: 'Люди Икс: Дни минувшего будущего',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_659495.jpg',
              name: 'Майкл Фассбендер',
              href: ''
            },
            {
              src: 'https://st.kp.yandex.net/images/film_iphone/iphone360_530.jpg',
              name: 'Игры разума',
              href: ''
            }
          ]
        }
      };
    }
  }
</script>
