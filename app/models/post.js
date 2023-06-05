import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') titulo;
  @attr('string') autor;
  @attr('string') texto;
}
