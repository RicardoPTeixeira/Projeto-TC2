import { module, test } from 'qunit';
import { setupTest } from 'projeto-tc2/tests/helpers';

module('Unit | Route | feed', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:feed');
    assert.ok(route);
  });
});
