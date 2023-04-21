import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TelaLoginComponent extends Component {
  @tracked isLogin = true;

  @action
  cadastro() {
    this.isLogin = false;
  }

  @action
  login() {
    this.isLogin = true;
  }
}
