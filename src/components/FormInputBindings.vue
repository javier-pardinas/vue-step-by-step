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

    <!-- `picked` is a string "a" when checked -->
    <input type="radio" v-model="picked2" value="a">

    <!-- `toggle` is either true or false -->
    <input type="checkbox" v-model="toggle1">

    <!-- `selected` is a string "abc" when the first option is selected -->
    <select v-model="selected4">
    <option value="abc">ABC</option>
    </select>

    <!--Checkbox-->
    <input
    type="checkbox"
    v-model="toggle2"
    true-value="yes"
    false-value="no"
    >

    <!--Radio. when checked: vm.pick === vm.a-->
    <input type="radio" v-model="pick" v-bind:value="a">

    <!--when selected: typeof vm.selected // => 'object' vm.selected.number // => 123-->
    <select v-model="selected5">
        <!-- inline object literal -->
        <option v-bind:value="{ number: 123 }">123</option>
    </select>

    <!--Modifiers-->
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg">
    <!--If you want user input to be automatically typecast as a Number, you can add the number modifier to your v-model managed inputs-->
    <input v-model.number="age" type="number">
    <!--If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your v-model-managed inputs:-->
    <input v-model.trim="msg">

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
        ],
        picked2: null,
        toggle1: null,
        selected4: null,
        toggle2: null,
        pick: null,
        selected5: null,

    }
}
}
</script>