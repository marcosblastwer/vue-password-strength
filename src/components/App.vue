<template>
  <div id='app'>
    <label>Password</label>
    <input autofocus type='password' v-model='password'>

    <div class='strength'>
      <div class='strength__bar' :class='strengthClass'></div>
      <span class='strength__label'>
        {{ getStrength() }}
      </span>
    </div>
  </div>
</template>

<script>
import { checkPasswordStrength } from '../utils/scorePassword'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      password: null,
      strengthClass: 'strength__bar-cold',

      getStrength: () => {
        const strength = checkPasswordStrength(this.password);
        this.strengthClass = `strength__bar-${strength.toLowerCase()}`;
        return strength.toLowerCase() == 'cold' ? '' : strength;
      }
    };
  }
};
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 400px;
  margin: 40px auto;
}

input {
  background-color: #FFF;
  border: 3px solid #FFF;
  border-radius: 4px;
  box-shadow: 1px 1px 8px -2px rgba(0,0,0,.2);
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  padding: 1.3em;
  transition: all .2s;
  width: 100%;

  &:hover {
    background-color: #FAFAFA;
    border-color: #FAFAFA;
  }
  &:focus {
    background-color: #FFF;
    box-shadow: 1px 1px 8px -2px rgba(0,0,0,.5);
    /* border-color: #0080FF;
    box-shadow: none; */
    outline: none;
  }
}

.strength {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
}
.strength__bar {
  height: 5px;
  transition: all .3s;
}
.strength__bar-cold {
  background-color: #eee;
}
.strength__bar-weak {
  background-color: rgb(214, 52, 3);
}
.strength__bar-regular {
  background-color: rgb(203, 206, 29);
}
.strength__bar-strong {
  background-color: rgb(38, 179, 113);
}
.strength__label {
  font-size: .8em;
  margin-top: 5px;
}
</style>
