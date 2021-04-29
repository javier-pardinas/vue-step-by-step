<template>
 <div class="watcher-version">
    <div id="full-name">{{ fullName }}</div>
 </div>
</template>
 
<script>
export default {
  name:'WatcherVersion',
  data() {
    return {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
    }
  },
   watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}
</script>