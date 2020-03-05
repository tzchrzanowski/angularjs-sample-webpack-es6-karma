import angular from "angular"
import template from "./dummy.html"

class DummyController {

  /* @ngInject */
  constructor() {
    this.name = "asd"
  }
}

const component = {
  controller: DummyController,
  template
}

const asd = "xx";
const qwe = "yy";

export default angular.module("app.dummy", [])
  .component("dummyComponent", component)
  .name

