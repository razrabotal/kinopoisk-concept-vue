<template>
  <div class="history">
    <div class="history__header">
      <h2>История просмотров</h2>
      <p class="sub-h2 middot">
        <span>{{history.pagesCount}} страниц</span>
        <span>{{history.queryCount}} запросов</span>
      </p>
    </div>
    <div class="history__main">
      <div class="slider__wrap">
        <div class="slider">
          <div class="arrow-left">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div class="slider__main">
            <a v-for="item in history.items" :href="item.href" class="img-block nolink">
              <img :src="item.src" :alt="item.name">
              <span class="link img-block__title">{{ item.name }}</span>
            </a>
          </div>
          <div class="arrow-right  ">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "History",
    props: ['history']
  }
</script>
