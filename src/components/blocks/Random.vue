<template>
  <div class="random-film">
    <h2>Случайный фильм</h2>
    <p class="sub-h2 middot">
      <a href="/">Угадай кино</a>
      <a href="/">Розыгрыш призов</a>
    </p>
    <a class="random-film__reload nolink" href="/"><i class="fa fa-refresh" aria-hidden="true"></i></a>

    <div class="film-with-back">
      <a href="" class="nolink">
        <img :src="randomFilm.back" alt="" class="film-with-back__back">
        <img :src="randomFilm.img" alt="" class="film-with-back__img">
        <span class="film-with-back__info">
          <span class="film-with-back__name">
            <span class="link">{{randomFilm.title}}</span>
            <span class="small middot">
              <span>{{randomFilm.titleTranslit}}</span>
              <span>{{randomFilm.genre}}</span>
              <span>{{randomFilm.duration}}</span>
              <span>{{randomFilm.year}}</span>
            </span>
          </span>
          <span class="rating">
            <span class="rating__value">
              <span>{{randomFilm.rating}}</span>
              <span class="small">{{randomFilm.votes}}</span>
            </span>
          </span>
        </span>
      </a>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  name: "Random",
  props: "randomFilm",
  data() {
    return {
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
    };
  }
}
</script>
