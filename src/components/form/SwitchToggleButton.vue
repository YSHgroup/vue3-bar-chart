<script setup lang="ts">
const props = defineProps({
  checkedMsg: {
    type: String,
    required: true
  },
  unCheckedMsg: {
    type: String,
    required: true
  },
  checkedBg: {
    type: String,
    default: '#6868ff'
  },
  unCheckedBg: {
    type: String,
    default: '#cfcfcf'
  }
})

const checkStatus = defineModel({default: false})
</script>

<template>
  <div class="toggle-btn">
    <label class="switch">
      <span role="label">Toggle Button</span>
      <input type="checkbox" style="display: none;" v-model="checkStatus">
      <div class="toggle-box" >
        <div class="toggle-group" :class="{off: checkStatus}">
          <span class="toggle-on" :style="{'--background-color': checkedBg}">{{ checkedMsg }}</span>
          <span class="toggle-divider"></span>
          <span class="toggle-off" :style="{'--background-color': unCheckedBg}">{{ unCheckedMsg }}</span>
        </div>
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.toggle-btn {
  padding: 5px;
  width: 350px;
  max-width: 100%;
  
  .toggle-box {
    width: 100%;
    height: 36px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 3px;
    overflow: hidden;

    .toggle-group {
      position: relative;
      display: flex;
      width: 200%;
      height: 100%;
      color: black;
      transition: 1s all;

      %toggle-bar {
        width: 50%;
        height: 100%;
        text-align: center;
        align-content: center;
        background-color: var(--background-color);
      }

      span {
        display: block;
      }
      .toggle-divider {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 10%;
        max-width: 46px;
        height: 100%;
        background-color: aqua;
        border-radius: 3px
      }
      .toggle-on {
        @extend %toggle-bar;
        // color: white;
      }
      .toggle-off {
        @extend %toggle-bar;
        // color: grey;
      }

      &.off {
        transform: translateX(-50%);
        transition: .5s all;
      }
    }
  }
}
</style>
