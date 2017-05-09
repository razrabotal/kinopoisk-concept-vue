
<template>
  <header :class="{'header__transparent': background}">
    <div class="header-wrap">
      <div class="header center">

        <div class="header__left">
          <div class="logo"><a class="nolink" href="">кинопоиск</a></div>
        </div>

        <div class="header__center">
          <div class="search">
            <form>
              <input class="search__text" placeholder="Фильмы, сериалы, звезды..." name="search" type="search" />
              <button class="search__button"><i class="fa fa-search" aria-hidden="true"></i></button>
              <button class="search__button-sliders"><i class="fa fa-sliders" aria-hidden="true"></i></button>
            </form>
          </div>
          <nav>
            <div class="nav-wrap">
              <div class="nav center" :class="{'nav--open': navOpen}">
                <ul>
                  <li class="nav__search"></li>
                  <li><a href="/">Афиша</a></li>
                  <li><a href="/">Рейтинги</a></li>
                  <li><a href="/">Тексты</a></li>
                  <li><a href="/">Медиа</a></li>
                  <li><a href="/">Общение</a></li>
                  <li class="nav__services"></li>
                </ul>
                <span class="nav__toggle" @click="navToggle" :class="{'nav__toggle--open': navOpen}"><span class="menu-icon"></span></span>
              </div>
            </div>
          </nav>
          <div class="services">
            <a href="/ "><i class="fa fa-film" aria-hidden="true"></i>&ensp;Мои фильмы</a>
          </div>
        </div>

        <div class="header__right">
          <div class="user dropdown">
            <span :title="user.name" class="nolink dropdown__label">
              <img class="user__img" :src="user.img" alt="">
              <span v-if='user.notify > 0' class="user__notif"></span>
            </span>
            <ul class="dropdown__main dropdown__main--noactive">
              <li class="user__dropdownfirst">
                <a href="/">
                  {{ user.name }}
                  <span class="dropdown__count dropdown__count--black" title="Ваш уровень">{{ user.level }}</span>
                  <span class="user__dropdownfirst__line" :style="{ width: user.percent }"></span>
                </a>
              </li>
              <li><a href="/">Уведомления<span v-if='user.notify > 0' class="dropdown__count">{{ user.notify }}</span></a></li>
              <li><a href="/">Подписки</a></li>
              <li><a href="/">Настройки</a></li>
              <li>
                <span>
                  <span>Ночной режим</span>
                  <input class="dropdown__right switch" name="night-mode" type="checkbox">
                </span>
              </li>
              <li class="dropdown__main__gray"><a href="/">Выйти</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script type="text/javascript">

export default {
  name: "Header",
  props: ['user', 'background'],
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    navToggle: function(){
        this.navOpen = !this.navOpen;
    }
  }
};

$(document).ready(function(){
   //$("header").sticky({topSpacing:0, bottomSpacing:500, wrapperClassName: "header-wrap"});
 });

</script>
