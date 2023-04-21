import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TelaLoginComponent extends Component {
  @tracked newPost = true;

  @action
  edit() {
    this.newPost = false;
  }

  @action
  create() {
    this.newPost = true;
  }
}
