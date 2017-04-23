<template>
  <div class="collections">
    <ModalWithTab title="Коллекции" :info="persona.collection" maxCount="3" :showModal="showModal" @close="showModal = false" wrapClass="collections__main">
      <h2 slot="header">Коллекции c {{persona.namePadezh}}</h2>
      <template slot="item" scope="props">
        <div class="collection">
          <div class="collection__title" :style="{ backgroundImage: 'url(' + props.back + ')' }">
            <a class="nolink " href="/">
              <span>{{ props.title }}</span>
              <span class="small">{{ props.source }}</span>
            </a>
          </div>
          <a v-for="film in props.films" class="nolink collection__item" href="/">
            <span class="link">{{film.title}}</span>
            <span class="collection__mark">{{film.rating}}</span>
          </a>
          <p class="collection__bottom">
            <span class="small middot">
              <span>{{props.noteWithCount}}</span>
              <span class="chart-wrap" v-if="props.percent">{{props.percent}}%</span>
              <span><i class="fa fa-heart-o" aria-hidden="true"></i> {{props.likesCount}}</span>
            </span>
          </p>
        </div>
      </template>
      <template slot="button" scope="props">
        <button class="btn-mini" @click="showModal = true">Показать все</button>
      </template>
    </ModalWithTab>
</div>
</template>

<script type="text/javascript">
  import ModalWithTab from '../elements/ModalWithTab.vue'

  export default {
    name: "Collections",
    props: ['persona'],
    components: {
      ModalWithTab
    },
    data() {
      return {
        showModal: false
      };
    }
  }
</script>
