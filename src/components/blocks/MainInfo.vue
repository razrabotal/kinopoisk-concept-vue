<template>
  <div class="info">
    <div class="info__left">
      <img :src="persona.img" alt="">

      <div class="info__buttons">
        <div class="btn-select dropdown">
          <button class="btn-round btn-round--default btn-toggle">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            &nbsp;Добавить в избранное
          </button>
          <span class="btn-select__arrow arrow-icon nolink dropdown__label"></span>
          <ul class="btn-select__list dropdown__main">
            <li><a href="/"><i class="fa fa-inbox" aria-hidden="true"></i>Визионеры кинематографа</a></li>
            <li><a href="/"><i class="fa fa-inbox" aria-hidden="true"></i>Актеры двойники</a></li>
            <li><a href="/"><i class="fa fa-inbox" aria-hidden="true"></i>Великолепные злодеи</a></li>
            <li class="btn-select__li-gray"><a href="/"><i class="fa fa-comment-o" aria-hidden="true"></i>Примечания</a></li>
          </ul>
        </div>

        <button class="btn-round btn-round--default"><i class="fa fa-share" aria-hidden="true"></i></button>
      </div>

      <div class="info__notes">
        <small>{{ persona.subscribersCount }} подписчиков</small>
        <small>{{ persona.collectionsCount }} коллекций</small>
      </div>

      <div v-if="persona.rewards" class="info__rewards">
        <span v-for="item in persona.rewards">
          <img v-if="item === 'oskar'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/oscar-awards-full.svg" alt="Оскар">
          <img v-if="item === 'globus'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/golden_globes-awards-full.svg" alt="Золотой глобус">
          <img v-if="item === 'cezar'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/cesar-awards-full.svg" alt="Сезар">
          <img v-if="item === 'venice'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/venice-awards-full.svg" alt="Венецианский кинофестиваль">
          <img v-if="item === 'cannes'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/cannes-awards-full.svg" alt="Каннский кинофестиваль">
          <img v-if="item === 'bafta'" src="https://yastatic.net/yandex-kinopoisk-icons-static/awards/60/bafta-awards-full.svg" alt="Британская академия">
        </span>
      </div>
    </div>

    <div class="info__right">
      <p v-if="persona.editNotConfirm" class="service-text">Информация на этой странице еще не проверена редакцией Кинопоиска</p>

      <h1>{{ persona.name }}</h1>

      <p class="sub-h1 middot">
        <span v-for="item in persona.characters" onerror="Error">{{ item }}</span>
      </p>

      <div class="table">
        <div v-for="item in persona.table" class="table__row">
          <div class="table__label">{{item.label}}</div>

          <div class="table__values">
            <div v-for="value in item.values" class="table__value">
              <div v-if="value.spoiler" class="table__spoiler"></div>
              <div class="table__value__main middot">
                <span v-for="valuevalue in value.main">
                    <a v-if="valuevalue.src" :href="valuevalue.src">{{valuevalue.value}}</a>
                    <span v-else>{{valuevalue.value}}</span>
                </span>
              </div>
              <div class="table__value__note middot">
                <span class="small" v-for="valuevalue in value.note">
                    {{valuevalue}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "MainInfo",
    props: ['persona']
  }
</script>
