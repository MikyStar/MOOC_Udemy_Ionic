import { PersonNameUpperCasePipe } from './person-name-upper-case.pipe';

describe('PersonNameUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonNameUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
