<template>
  <div>
    <div class="row register-page">
      <div class="error">{{ errorMessage }}</div>
      <form class="col s12" id="reg-form">
        <div class="row">
          <div class="input-field col s6">
            <input
              v-model="lastName"
              id="last_name"
              type="text"
              class="validate"
              required
            />
            <label for="last_name">姓</label>
          </div>
          <div class="input-field col s6">
            <input
              v-model="firstName"
              id="first_name"
              type="text"
              class="validate"
              required
            />
            <label for="first_name">名</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="mailAddress"
              id="email"
              type="email"
              class="validate"
              required
            />
            <label for="email">メールアドレス</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="password"
              id="password"
              type="password"
              class="validate"
              minlength="8"
              required
            />
            <label for="password">パスワード</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <button
              class="btn btn-large btn-register waves-effect waves-light"
              type="button"
              v-on:click="registerAdmin"
            >
              登録
              <i class="material-icons right">done</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private errorMessage = "エラーメッセージ";
  private lastName = "";
  private firstName = "";
  private mailAddress = "";
  private password = "";
}
</script>

<style scoped></style>
