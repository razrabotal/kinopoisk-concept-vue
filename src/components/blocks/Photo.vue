<template>
  <div class="photo">
    <ModalWithTab :info="persona.photos" max-count="4" :showModal="showModal" :showTab="showTab" @close="showModal = false" isBlack="true">
      <h2 slot="header">Фотографии</h2>
      <template slot="photo" scope="props">
        <div class="photo__galery">
          <a class="nolink" v-for="(item, index) in props.items" v-if="index < 4">
            <img :src="item.img" alt="">
            <span v-if="props.count > 4" @click="showModal = true, showTab = props.tab">+{{props.count - 4}}</span>
          </a>
        </div>
      </template>
      <template slot="photo-modal" scope="props">
        <img v-if="props.img" width="100%" :src="props.img" alt="">
        <iframe v-if="props.src" width="100%" height="400" :src="props.src" frameborder="0" allowfullscreen></iframe>
      </template>
    </ModalWithTab>
  </div>
</template>

<script type="text/javascript">
import ModalWithTab from '../elements/ModalWithTab.vue'

export default {
  name: "Photo",
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
