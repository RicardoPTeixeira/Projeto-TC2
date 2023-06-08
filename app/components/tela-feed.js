import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import Route from "@ember/routing/route"
import fetch from "fetch";

export default class TelaFeedComponent extends Component {
    @tracked posts;
    @tracked counter = 6
    @service store;

    constructor() {
        super(...arguments);
        this.store.push({
            data: [{
                    id: 0,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 1',
                        data: '15/01/2023',
                        autor: 'Ricardo T.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }, {
                    id: 1,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 2',
                        data: '23/02/2023',
                        autor: 'Jose A.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }, {
                    id: 2,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 3',
                        data: '15/04/2023',
                        autor: 'Lucas C.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }, {
                    id: 3,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 4',
                        data: '20/04/2023',
                        autor: 'Rafael E.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }, {
                    id: 4,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 5',
                        data: '01/05/2023',
                        autor: 'Enzo A.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }, {
                    id: 5,
                    type: 'post',
                    attributes: {
                        titulo: 'Post teste 6',
                        data: '15/05/2023',
                        autor: 'Claudia A.',
                        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit provident tempora, quisquam doloribus numquam, magni maxime, et ipsum error eveniet. Itaque inventore rem optio! Culpa laboriosam sapiente saepe recusandae.'
                    },
                    relationships: {}
                }
            ]
        });
        let getAllPosts = this.store.peekAll('post');
        const proxy = new Proxy(getAllPosts, {
            get(target, prop, receiver) {
            return target[prop];
            }
        });
        this.posts = [...proxy]
    }
    @action
    novo_post() {
        let titulo = document.getElementById('tituloPost').value
        let autor = document.getElementById('autorPost').value
        let texto = document.getElementById('textPost').value
        let postForm = document.getElementById('postForm')
        if(titulo && autor && texto) {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            var hours = today.getHours();
            var minutes = today.getMinutes();
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            const formattedToday = dd + '/' + mm + '/' + yyyy + ' - ' + hours + ':' + minutes;
            this.store.push({
                data: [{
                id: this.counter,
                type: 'post',
                attributes: {
                    titulo: titulo,
                    data: formattedToday,
                    autor: autor,
                    texto: texto
                },
                relationships: {}
                }]
            });
            this.counter++
            let getAllPosts = this.store.peekAll('post');
            const proxy = new Proxy(getAllPosts, {
                get(target, prop, receiver) {
                return target[prop];
                }
            });
            this.posts = [...proxy]
            postForm.reset()
        }
    }
}