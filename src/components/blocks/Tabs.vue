<template>
  <div class="tabs">
    <div class="tabs__labels__wrap" style="height: 37px;">
      <div class="tabs__labels">
        <a v-for="item in persona.tabs" :href="'#'+item.titleTranslit" class="tabs__tab">{{item.title}} {{item.count}}</a>
      </div>
    </div>
    <div class="tabs__main">
      <div v-for="(item, index) in persona.tabs" :id="item.titleTranslit" :class="{'active': index==1 }" class="tabs__item">
        <div class="slider__wrap" style="height:270px;">
          <div class="slider" style="height:270px;">
            <div class="arrow-left">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="slider__main">
              <div v-if="persona.stat && item.titleTranslit == 'stat'" class="statistics">
                <div class="">
                  <div class="">
                    <p class="statistics__main">{{persona.stat.myRating}}</p>
                    <span class="small">мой рейтинг</span>
                  </div>
                  <div class="">
                    <p>{{persona.stat.friendRating}}</p>
                    <span class="small">рейтинг друзей</span>
                  </div>
                </div>
                <div class="">
                  <div class="">
                    <p>{{persona.stat.marks}}</p>
                    <span class="small">оценок</span>
                  </div>
                  <div class="">
                    <p>{{persona.stat.views}}</p>
                    <span class="small">просмотра</span>
                  </div>
                </div>
                <div class="">
                  <div class="">
                    <p>{{persona.stat.filmography}}</p>
                    <span class="small">фильмографии</span>
                  </div>
                  <div class="">
                    <p>{{persona.stat.time}}</p>
                    <span class="small">время</span>
                  </div>
                </div>
              </div>
              <a v-for="itemitem in item.items" :href="itemitem.href" class="img-block nolink">
                <img :src="itemitem.img">
                <span class="link img-block__title">{{ itemitem.title }}</span>
                <span class="small img-block__note middot">
                  <span v-if="itemitem.note">{{ itemitem.note }}</span>
                  <span v-if="itemitem.top" class="img-block__note__top">{{ itemitem.top }}</span>
                </span>
              </a>
            </div>
            <div class="arrow-right">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "Tabs",
    props: ['persona']
  }
</script>
