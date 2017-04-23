<template>
  <div class="connect">
  <ModalWithTab :info="persona.sites" max-count="2" :showModal="showModal" :showTab="showTab" @close="showModal = false">
    <h2 slot="header">Сайты</h2>
    <template slot="item" scope="props">
      <p>
        <a class="nolink" :href="props.href">
          <span class="big">{{ props.text }}</span>
          <span class="link links-blue">{{ props.href }}</span>
        </a>
      </p>
    </template>
    <template slot="button" scope="props">
      <button class="btn-mini" v-if="props.items.length > 2" @click="showModal = true, showTab = props.tab">Показать все</button>
    </template>
  </ModalWithTab>
  </div>
</template>


<script type="text/javascript">
import ModalWithTab from '../elements/ModalWithTab.vue'

export default {
  name: "Sites",
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
