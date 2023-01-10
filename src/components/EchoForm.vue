<template>
  <div class="form-wrapper">
    <div class="info">
      <h3>Register to be part of Echobot</h3>
      <hr class="custom">
      <p>
        By registering for an Echobot account, you agree to the terms and conditions
      </p>
      <ul class="info-list">
        <li>
          <font-awesome-icon class="icon" icon="check" />
          No cancellation necessary
        </li>
        <li>
          <font-awesome-icon class="icon" icon="check" />
          1 min. account creation
        </li>
        <li>
          <font-awesome-icon class="icon" icon="check" />
          Ends automatically
        </li>
        <li>
          <font-awesome-icon class="icon" icon="check" />
          GDPR compliant
        </li>
      </ul>
      <h3>1.000+ Unternehmen nutzen taglich Echobot</h3>
      <div class="sponsors">
        <img src="../assets/t-mobile.png" alt="t-mobile">
        <img src="../assets/michellin.png" alt="michelin">
        <img src="../assets/schenk.png" alt="schenck">
      </div>
    </div>
    <div class="divider"></div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="form-item">
          <label for="first-name">Your name</label>
          <input class="left" type="text" name="first-name" required="true">
        </div>
        <div class="form-item">
          <label for="surname">Your surname</label>
          <input type="text" name="surname" required="true">
        </div>
      </div>
      <div class="form-item email">
        <label for="e-mail">Your e-mail</label>
        <input type="email" name="e-mail" required="true">
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="company">Your Company</label>
          <input class="left" type="text" name="company">
        </div>
        <div class="form-item">
          <label for="phone">Your phone number</label>
          <input type="text" name="phone">
        </div>
      </div>
      <div class="form-item rights">
        <label class="container">
          Quae fuerit causa, nollem me ab illo inventore veritatis et quasi naturalem atque fuerit causa, nollem me.
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
      </div>
      <button class="submit-button" type="submit">Testaccount erstellen
        <font-awesome-icon class="icon" icon="arrow-right" />
      </button>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon
  },
  setup () {


    const handleSubmit = () => {
      console.log('submitted')
    }

    return {
      handleSubmit
    }
  }
}
</script>