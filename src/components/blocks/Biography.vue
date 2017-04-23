<template>
  <div class="biography">
    <ModalWithTab :info="persona.biography" maxCount="4" :showModal="showModal" :showTab="showTab" @close="showModal = false">
      <h2 slot="header">Биография</h2>
      <template slot="item" scope="props">
        <p class="biography__p">
          <span :class="{ biography__mainp: props.main }">{{props.text}}</span>
        </p>
      </template>
      <template slot="button" scope="props">
        <button class="btn-mini"  @click="showModal = true, showTab = props.tab">Показать все</button>
      </template>
    </ModalWithTab>
</div>
</template>

<script type="text/javascript">
  import ModalWithTab from '../elements/ModalWithTab.vue'

  export default {
    name: "Biography",
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
