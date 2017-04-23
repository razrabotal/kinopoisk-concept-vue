<template id="modal-template">
<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal__overlay" @click="$emit('close')"></div>

      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <i class="fa fa-times modal-default-button" @click="$emit('close')">
            </i>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>


<script type="text/javascript">
  export default {
    name: "Modal"
  }
</script>

<style lang="sass">


</style>
