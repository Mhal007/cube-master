import { expect } from 'chai';

describe('cube-master', () => {
  it('package.json has correct name', async () => {
    const { name } = await import('../../package.json');
    expect(name).to.eq('cube-master');
  });
});
