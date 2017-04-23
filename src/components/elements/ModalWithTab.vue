<template>
  <div>
    <slot name="header"></slot>
    <p class="sub-h2 middot">
      <span v-for="item in info.counts" @click="showModal = true, showTab = item.key">{{item.text}}</span>
      <a v-for="item in info.links" :href="item.href">{{item.text}}</a>
    </p>

    <div :class="wrapClass">
      <slot name="item" v-for="(item, index) in info.items" v-if="index < maxCount"
        :text="item.text"
        :href="item.href"
        :img="item.img"
        :title="item.title"
        :category="item.category"
        :date="item.date"
        :author="item.author"
        :commentsCount="item.commentsCount"
        :main="item.main"
        :notes="item.notes"
        :back="item.back"
        :source="item.source"
        :films="item.films"
        :noteWithCount="item.noteWithCount"
        :percent="item.percent"
        :likesCount="item.likesCount"
        ></slot>
    </div>

    <slot name="photo"
      :items="info.items"
      :count="info.count"
      :showModal="showModal"
      :tab="info.counts[0].key"
      ></slot>

    <slot name="button"
      v-if="info.items.length > maxCount"
      :items="info.items"
      :showTab="showTab"
      :tab="info.counts[0].key"
      ></slot>

    <Modal v-if="showModal" :class="{'black': isBlack}" @close="showModal = false, $emit('close')">
      <div slot="header">
        <slot name="header"></slot>
        <div class="tabs__labels__wrap" style="height: 37px;">
          <div class="tabs__labels tabs__labels--modal">
            <a v-for="(item, index) in info.counts"
               :class="{'active': showTab === item.key}"
               @click="showTab = item.key" class="tabs__tab">
               {{item.text}}
             </a>
          </div>
        </div>
      </div>
      <div slot="body">
        <div class="tabs tabs--column">
          <div class="tabs__main">

            <div v-for="tab in info.counts" v-if="showTab === tab.key" class="tabs__item">
              <div :class="wrapClass">
                <slot name="item" v-for="(item, index) in info.items" v-if="item.type == tab.key"
                  :text="item.text"
                  :href="item.href"
                  :img="item.img"
                  :title="item.title"
                  :category="item.category"
                  :date="item.date"
                  :author="item.author"
                  :commentsCount="item.commentsCount"
                  :main="item.main"
                  :notes="item.notes"
                  :back="item.back"
                  :source="item.source"
                  :films="item.films"
                  :noteWithCount="item.noteWithCount"
                  :percent="item.percent"
                  :likesCount="item.likesCount"
                  ></slot>

                <slot name="photo-modal"
                  v-for="(item, index) in info.items"
                  v-if="item.type == tab.key"
                  :img="item.img"
                  :src="item.src"
                  ></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script type="text/javascript">
  import Modal from '../elements/Modal.vue'

  export default {
    name: "ModalWithTab",
    props: ['info', 'title', 'maxCount', 'showModal', 'showTab', 'isBlack', 'wrapClass'],
    components: {
      Modal
    }
  }
</script>
