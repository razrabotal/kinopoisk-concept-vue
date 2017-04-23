<template>
  <div class="tabs">
    <div class="tabs__labels__wrap" style="height: 37px;">
      <div class="tabs__labels">
        <a v-for="item in persona.films" :href="'#'+item.titleTranslit" class="tabs__tab">{{item.title}} {{item.count}}</a>
      </div>
    </div>
    <div class="tabs__main">
      <div
        v-for="item in persona.films"
        :id="item.titleTranslit"
        class="tabs__item">
        <div class="films">
          <div class="films__filters">
            <div class="films__sort">
              <span class="films__sort__text">Сортировать&ensp;</span>

              <div v-for="filter in persona.filters" class="dropdown" id="view">
                <div class="dropdown__label">
                  <span class="dropdown__label__text">{{filter.title}}</span>
                  <span class="arrow-icon"></span>
                </div>
                <ul class="dropdown__main">
                  <li v-for="itemitem in disabledFilter(filter.values, filter, item)"
                    :value="itemitem"
                    v-on:click="
                    sortBy( itemitem.key, item.items, itemitem.reverse ),
                    filter.title = itemitem.value,
                    filter.value = itemitem.key
                    ">
                    <span >{{itemitem.value}}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="films__view">
              <div class="dropdown" id="view">
                <select name="view">
                  <option value="Плиткой" selected>Плиткой</option>
                  <option value="Списком">Списком</option>
                </select>
                <div class="dropdown__label">
                  <span>Вид</span>
                  <span class="arrow-icon"></span>
                </div>
                <ul class="dropdown__main">
                  <li v-on:click="filmViewsList = true" class="active films__view__list" value="Списком"><span><i class="fa fa-bars" aria-hidden="true"></i>Списком</span></li>
                  <li v-on:click="filmViewsList = false"  class="films__view__grid" value="Плиткой"><span><i class="fa fa-th" aria-hidden="true"></i>Плиткой</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="films__table" :class="{ 'films__table--list':filmViewsList}">
              <div v-for="film in filter(item.items, persona.filters)" :class="{'film-with-back--expected' : film.expected }" class="film-with-back">
                  <img :src="film.back" alt="" class="film-with-back__back">
                  <img :src="film.img" alt="" class="film-with-back__img">
                  <span class="film-with-back__info">
                    <span class="film-with-back__year">{{ film.year }}</span>
                    <a :href="film.href" class="film-with-back__name nolink">
                      <span class="link">{{ film.title }}</span>
                      <span class="small middot">
                        <span v-if="film.titleTranslit">{{film.titleTranslit}}</span>
                        <span v-if="film.actors">{{film.actors}}</span>
                        <span v-if="film.note">{{film.note}}</span>
                        <span v-if="film.genre">{{film.genre}}</span>
                        <span v-if="film.duration">{{film.duration}}</span>
                        <span v-if="film.top" class="film-with-back__name__top">{{film.top}}</span>
                        <span  v-if="film.year" class="film-with-back__name__year">{{film.year}}</span>
                      </span>
                    </a>
                    <span v-if="film.expected" class="film-with-back__note">
                      <span v-if="film.expectedNote">{{film.expectedNote}}</span>
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </span>
                    <span v-else class="rating dropdown">
                      <span class="rating__value">
                        <span :class="{'rating__value--bold': film.rating > 7}">{{ film.rating }}</span>
                        <span class="small">{{ film.votes }}</span>
                      </span>
                      <span v-if="film.mark > 0" class="rating__mark dropdown__label">{{ film.mark }}</span>
                      <span v-else-if="film.mark === 0" class="rating__mark rating__mark--eye dropdown__label"><i class="fa fa-eye"></i></span>
                      <span v-else class="rating__mark rating__mark--star dropdown__label"><i class="fa fa-star"></i></span>
                      <span class="dropdown__main">
                        <i v-on:click="film.mark = ''" class="fa fa-eye-slash" :class="{'fa-eye-slash--gray': film.mark !== ''}"></i>
                        <i v-on:click="film.mark = 0" class="fa" :class="{'fa-eye': film.mark >= 0, 'fa-eye fa-eye--gray': film.mark === ''}"></i>
                        <i v-for="n in 10" v-on:click="film.mark = n" class="fa" :class="{'fa-star': film.mark >= n, 'fa-star-o': film.mark < n}"></i>
                        <span class="dropdown__close">×</span>
                      </span>
                    </span>
                  </span>
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  export default {
    name: "FilmList",
    props: ['persona'],
    data() {
      return {
        filmViewsList: true,
      };
    },
    methods: {
      sortBy: function(key, itemFilms, reverse) {
        if(!reverse) {
          sortBy(itemFilms, key);
        }
        else {
          reverseSortBy(itemFilms, key);
        }
      },
      filter: function (numbers, filters) {
        return numbers.filter(function (number) {
          if(
            (number.votes >= filters.rating.value &&
            ( number.genreKey === filters.genre.value ||
              filters.genre.value === 'all'
            ))
          )
          return 1;
        });
      },
      disabledFilter: function (values, filter, films) {
        return values.filter(function (item) {
          if(filter.name === 'genre') {
            for(var i = 0; i < films.items.length; i++) {
              if(films.items[i].genreKey === item.key) {
                return 1;
              }
            }
            if(item.key == 'all') {
              return 1
            }
            return 0;
          } else {
            return 1;
          }
        });
      }
    }
  }
</script>
