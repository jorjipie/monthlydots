import { BirthDateForm } from './birth-date-form';

describe('BirthDateForm', () => {
  it('should create an instance', () => {
    expect(new BirthDateForm('5/1/2020')).toBeTruthy();
  });
});
