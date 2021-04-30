<!--Computed properties are by default getter-only, but you can also provide a setter when you need it:-->
<template>
 <div class="conditional-rendering">
<div v-if="Math.random() <= 0.5">
  FAIL
</div>
<div v-else-if="Math.random() <= 0.9">
  PASS
</div>
<div v-else>
  WELL DONE
</div>
 </div>
</template>
 
<script>
export default {
  name:'ConditionalRendering'
}
</script>