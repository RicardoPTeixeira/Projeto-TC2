import { module, test } from 'qunit';
import { setupRenderingTest } from 'projeto-tc2/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-feed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PostFeed />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <PostFeed>
        template block text
      </PostFeed>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
