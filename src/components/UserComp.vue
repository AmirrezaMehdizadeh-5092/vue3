<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"> One </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <br />
  <br />
  <v-list lines="one" id="aa">
    <v-list-item v-for="i in list" :key="i.id">
      {{ i }}
    </v-list-item>
  </v-list>
  <v-window v-model="window" show-arrows>
    <v-window-item v-for="n in list" :key="n">
      <v-card height="200px" class="d-flex justify-center align-center">
        <span class="text-h2">{{ n }}</span>
      </v-card>
    </v-window-item>
  </v-window>
  <v-banner avatar="smirk.png" icon="$vuetify" text=".hello world" stacked>
    <template v-slot:actions>
      <v-btn>Click me</v-btn>
    </template>
  </v-banner>
  <v-carousel hide-delimiters>
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Option"
      type="checkbox"
    ></v-checkbox>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form>
</template>

<script>
export default {
  name: "UserComp",
  data() {
    return {
      list: ["one", "two", "three"],
      length: 3,
      window: 0,
    };
  },
  mounted() {
    console.log(this.$store.state.count);
  },
};
</script>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;
      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;
      return "Must be checked.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");
const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<playground-resources lang="json">
{
  "imports": {
    "vee-validate": "https://cdn.jsdelivr.net/npm/vee-validate@4.8.4/dist/vee-validate.esm.js",
    "@vue/devtools-api": "https://cdn.jsdelivr.net/npm/@vue/devtools-api@6.5.0/lib/esm/index.js"
  }
}
</playground-resources>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#aa {
  height: 200px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: aqua;
}
</style>
