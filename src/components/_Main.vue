<template>
  <main>
    <Background :banners="banners"></Background> <!-- Брендирование -->

    <div class="main-wrap">
      <div class="main center">

        <div class="persona">
          <div class="persona__main">
            <div class="persona__left">
              <MainInfo :persona="persona"></MainInfo> <!-- Основная информация -->
              <div v-if="banners.banner" class="banner">
                <a href="" class="nolink">
                  <img :src="banners.banner.src" :alt="banners.banner.name">
                </a>
              </div>
              <Tabs :persona="persona"></Tabs> <!-- Табы -->
              <FilmList :persona="persona"></FilmList> <!-- Фильмы -->
            </div>

            <div class="persona__right">
              <Biography :persona="persona"></Biography> <!-- Биография -->
              <Photo :persona="persona"></Photo> <!-- Фотографии -->
              <Connect :persona="persona"></Connect> <!-- Связи -->
              <div v-if="banners.bannerFilm" class="bannerFilm">
                <a class="nolink" :href="banners.bannerFilm.href">
                  <img :src="banners.bannerFilm.img" :alt="banners.bannerFilm.title">
                </a>
              </div>
              <Materials :persona="persona"></Materials> <!-- Материалы -->
              <Sites :persona="persona"></Sites> <!-- Сайты -->
              <div class="correct">
                <button class="btn small">Править&nbsp;страницу</button>
                <span>Если нашли ошибки<br>или знаете интересные факты</span>
              </div>
            </div>
          </div>

          <div class="persona__bottom">
            <Collections :persona="persona"></Collections>
            <Random :random-film="randomFilm"></Random>
          </div>

          <div class="persona__bottom-2">
            <History :history="history"></History>
          </div>

          <div class="persona__footer">
            <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/6598-200.png" alt="Конец страницы">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script type="text/javascript">
import Modal from './elements/Modal.vue'

import FilmList     from './blocks/FilmList.vue'
import Background   from './blocks/Background.vue'
import MainInfo     from './blocks/MainInfo.vue'
import Tabs         from './blocks/Tabs.vue'
import Biography    from './blocks/Biography.vue'
import Photo        from './blocks/Photo.vue'
import Materials    from './blocks/Materials.vue'
import Connect      from './blocks/Connect.vue'
import Sites        from './blocks/Sites.vue'
import Collections  from './blocks/Collections.vue'
import Random       from './blocks/Random.vue'
import History      from './blocks/History.vue'

export default {
  name: "Main",
  components: {
    Modal, Background, FilmList, MainInfo, Tabs, Biography, Photo, Materials, Connect, Sites, Collections, Random, History
  },
  props: ["banners", "history", "randomFilm", "persona"]
};

</script>
