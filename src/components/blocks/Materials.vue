<template>
  <div class="materials">
    <ModalWithTab :info="persona.materials" max-count="1" :showModal="showModal" :showTab="showTab" @close="showModal = false">
      <h2 slot="header">Материалы</h2>
      <template slot="item" scope="props">
        <div class="material">
          <a class="nolink" :href="props.href">
            <span class="material__header">
              <img class="material__img" :src="props.img" alt="">
              <span class="material__title link">{{ props.title }}</span>
            </span>
            <span class="material__text">{{props.text}}</span>
            <span class="material__notes small middot">
              <span>{{props.category}}</span>
              <span>{{props.date}}</span>
              <span>{{props.author}}</span>
              <span><i class="fa fa-comment-o"></i> {{props.commentsCount}}</span>
            </span>
          </a>
        </div>
      </template>
      <template slot="button" scope="props">
        <button class="btn-mini" v-if="props.items.length > 1" @click="showModal = true, showTab = props.tab">Показать все</button>
      </template>
    </ModalWithTab>
  </div>
</template>

<script type="text/javascript">
import ModalWithTab from '../elements/ModalWithTab.vue'

export default {
  name: "Materials",
  props: ['persona'],
  components: {
    ModalWithTab
  },
  data() {
    return {
      showModal: false,
      showTab: ''
    };
  }
}
</script>
