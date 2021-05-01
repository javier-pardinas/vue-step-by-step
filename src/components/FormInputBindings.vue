<template>
  <div class="form-input-bindings">
    <!--Text-->
    <input v-model="message1" placeholder="edit me">
    <p>Message is: {{ message1 }}</p>
    <!--Multiline Text-->
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message2 }}</p>
    <br>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
    <!--Single checkbox-->
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <!--Multiple Checkbox-->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <!--Radio-->
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <!--Single Select-->
    <select v-model="selected1">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected1 }}</span>
    <!--Multiple select (bound to Array):-->
    <select v-model="selected2" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected2 }}</span>
    <!--Dynamic options rendered with v-for-->
    <select v-model="selected3">
        <option v-for="option in options" v-bind:value="option.value" :key="option">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected3 }}</span>
  </div>
</template>

<script>
export default {
name: 'FormInputBindings',
data() {
    return {
        message1: '',
        message2: '',
        checked: null,
        checkedNames: [],
        picked: null,
        selected1: '',
        selected2: [],
        selected3: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
}
}
</script>