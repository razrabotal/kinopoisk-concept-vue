<template>
  <div class="connect">
    <ModalWithTab :info="persona.connect" maxCount="4" :showModal="showModal" :showTab="showTab" @close="showModal = false">
      <h2 slot="header">Связи</h2>
      <template slot="item" scope="props">
        <div class="img-block--left">
          <a class="nolink" :href="props.href">
            <img :src="props.img" alt="">
            <span>
              <span class="link">{{props.title}}</span>
              <span class="small middot">
                <span v-for="itemitem in props.notes">{{itemitem}}</span>
              </span>
            </span>
          </a>
        </div>
      </template>
      <template slot="button" scope="props">
        <button class="btn-mini" @click="showModal = true, showTab = props.tab">Показать все</button>
      </template>
    </ModalWithTab>
  </div>
</template>

<script type="text/javascript">
  import ModalWithTab from '../elements/ModalWithTab.vue'

  export default {
    name: "Connect",
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
