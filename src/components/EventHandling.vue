<template>
  <div class="event-handling">
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <!-- `greet` is the name of a method defined below -->
        <button v-on:click="greet">Greet</button>
        <!--Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement. 
        Sometimes we also need to access the original DOM event in an inline statement handler. 
        You can pass it into a method using the special $event variable-->
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
         Submit
        </button>
        <!--It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. 
        Although we can do this easily inside methods, it would be better if the methods can be purely about data logic 
        rather than having to deal with DOM event details. To address this problem, Vue provides event modifiers for v-on. 
        Recall that modifiers are directive postfixes denoted by a dot.-->
        <!-- the click event's propagation will be stopped -->
        <a v-on:click.stop="doThis"></a>
        <!-- the submit event will no longer reload the page -->
        <form v-on:submit.prevent="onSubmit"></form>
        <!-- modifiers can be chained -->
        <a v-on:click.stop.prevent="doThat"></a>
        <!-- just the modifier -->
        <form v-on:submit.prevent></form>
        <!-- use capture mode when adding the event listener -->
        <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
        <div v-on:click.capture="doThis">...</div>
        <!-- only trigger handler if event.target is the element itself -->
        <!-- i.e. not from a child element -->
        <div v-on:click.self="doThat">...</div>
        <!-- the click event will be triggered at most once -->
        <a v-on:click.once="doThis"></a>
        <!-- the scroll event's default behavior (scrolling) will happen -->
        <!-- immediately, instead of waiting for `onScroll` to complete  -->
        <!-- in case it contains `event.preventDefault()`-->
        <div v-on:scroll.passive="onScroll">...</div>
        <!-- only call `vm.submit()` when the `key` is `Enter` -->
        <input v-on:keyup.enter="submit">
        <!--You can directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case. 
        the handler will only be called if $event.key is equal to 'PageDown'.-->
        <input v-on:keyup.page-down="onPageDown">
        <!--Using keyCode attributes is also permitted:-->
        <input v-on:keyup.13="submit">
        <!-- Alt + C -->
        <input v-on:keyup.alt.67="clear">
        <!-- Ctrl + Click -->
        <div v-on:click.ctrl="doSomething">Do something</div>
        <!-- this will fire even if Alt or Shift is also pressed -->
        <button v-on:click.ctrl="onClick">A</button>
        <!-- this will only fire when Ctrl and no other keys are pressed -->
        <button v-on:click.ctrl.exact="onCtrlClick">A</button>
        <!-- this will only fire when no system modifiers are pressed -->
        <button v-on:click.exact="onClick">A</button>
        <!--These modifiers restrict the handler to events triggered by a specific mouse button.-->
        <div v-on:click.left="doThat">...</div>
        <div v-on:click.right="doThat">...</div>
        <div v-on:click.middle="doThat">...</div>
    </div>
  </div>
</template>

<script>
export default {
name: 'EventHandling',
data() {
    return {
        counter: 0,
        name: 'Vue.js'
    }
},
methods: {
  greet(event) {
    // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
  },
  warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
}
</script>