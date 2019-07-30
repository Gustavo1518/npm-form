import HelloWorldComponent from "./HelloWorldComponent.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('form-conacyt', HelloWorldComponent);
  }
}

export { HelloWorldComponent };