<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const errors = ref({
  email: [],
  password: [],
});

const onSubmit = async () => {
  Object.assign(errors.value, { email: [], password: [] });

  if (!email.value.length) {
    errors.value.email.push("Campo e-mail obrigatório!");
  }

  if (!password.value.length) {
    errors.value.password.push("Campo senha obrigatório!");
  }

  if (errors.value.email.length >0 || errors.value.password.length > 0) {
    return ;
  }

  await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password }),
  })
    .then((response) => console.log("response:", response))
    .catch((error) => console.error("error", error));
};
</script>

<template>
  <div class="container">
    <div class="item-0">
      <svg
        width="179"
        height="48"
        viewBox="0 0 179 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.7117 0.374023H54.2649V48H50.7117V0.374023ZM13.2156 23.1584H30.4831V26.4312H13.2156V23.1584ZM0 0.374023V48H3.52208V3.64675H40.2078V0.374023H0Z"
          fill="#ED1164"
        />
        <path
          d="M160.644 0.187012H132.468V47.813H136.021V30.0468H136.052V26.774H136.021V3.45974H160.395C168.966 3.45974 174.826 7.41818 174.826 14.961V15.0857C174.826 22.161 168.842 26.774 159.99 26.774H148.831V30.0468H159.771C169.714 30.0468 178.348 24.8727 178.348 14.8675V14.7429C178.348 5.54805 171.117 0.187012 160.644 0.187012Z"
          fill="#ED1164"
        />
        <path
          d="M111.865 26.8052L95.3455 0H91.9481L62.5247 47.9688H66.2026L93.6 3.8961L107.875 26.8052H111.865ZM117.319 35.5948H113.361L121.06 47.9688H124.925L117.319 35.5948Z"
          fill="#ED1164"
        />
      </svg>
    </div>
    <div class="item-1">
      <form>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          placeholder="e-mail"
        />
        <li v-for="error in errors.email">
          {{ error }}
        </li>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          placeholder="senha"
        />
        <li v-for="error in errors.password">
          {{ error }}
        </li>
        <button type="submit" @click.prevent="onSubmit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  display: block;
  width: 256px;
  height: 24px;
  top: 282px;
  left: 52px;
  gap: 0px;
  opacity: 0px;
  border-style: solid;
  border-color: #ed1164;
}

button {
  background-color: #ed1164;
  width: 272px;
  height: 56px;
  top: 405px;
  left: 44px;
  gap: 0px;
  border-radius: 12px 0px 0px 0px;
  opacity: 0px;
}
</style>
