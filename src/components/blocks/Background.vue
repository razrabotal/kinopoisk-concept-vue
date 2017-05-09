<template>
  <div v-if="banners.background" class="background" :style="{ backgroundImage: 'url(' + banners.background.imgSrc + ')' }">
    <div class="background__info">
      <div class="background__buttons">
        <button class="btn-round btn-round--default" type="button" name="background_trailer" id="show-modal" @click="showModalBackground = true">Трейлер</button>
        <button class="btn-round btn-round--main" type="button" name="background_buy"><i class="fa fa-play" aria-hidden="true"></i>&ensp;{{ banners.background.textButton }}</button>
      </div>
    </div>

    <Modal v-if="showModalBackground" @close="showModalBackground = false" class="black">
      <h3 slot="header">{{ banners.background.title }}</h3>
      <div slot="body">
        <iframe width="100%" height="500" :src="banners.background.trailerSrc" frameborder="0" allowfullscreen></iframe>
      </div>
    </Modal>
  </div>

</template>

<script type="text/javascript">
import Modal from '../elements/Modal.vue'

export default {
  name: "Background",
  props: ['banners'],
  components: {
    Modal
  },
  data() {
    return {
      showModalBackground: false
    };
  }
}
</script>
