// import Component from '@glimmer/component';
// import { action } from '@ember/object';
// import { tracked } from "@glimmer/tracking";
// import { service } from "@ember/service";
// import Route from "@ember/routing/route"
// import fetch from "fetch";

// export default class TelaFeedComponent extends Component {
//     @tracked posts;
//     constructor() {
//         super(...arguments);

//         fetch("/posts").then((data) => {
//         this.posts = data;
//         });
//     }

//     @service store;
//     model() {
//         return this.store.findAll("posts");
//     }
// }

//TODO: fazer funcionar