<template>
  <div class="app-one">
  MESSAGE: {{message}}<!--accesing data and display it-->
  <p>Using mustaches: {{ rawHtml }}</p><!--The double mustaches interprets the data as plain text, not HTML-->
  <p>Using v-html directive: <span v-html="rawHtml"></span></p><!--In order to output real HTML, you will need to use the v-html directive-->
  </div>
</template>

<script>
export default {
name: 'AppOne',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'Hello Vue!',
      rawHtml: '<span style="color:red">This should be red</span>'
    }
  },
}
</script>