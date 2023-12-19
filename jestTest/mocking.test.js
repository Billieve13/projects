const { PersonDataAccessObject } = require('./src');

describe('the PersonDataAccessObject', () => {
  it('calls the function that would save Ada Lovelace to the database', () => {
    /* Arrange */
    const mockSaveMethod = jest.fn();
    const mockDatabase = {
        save: mockSaveMethod,
        }
    const personDataAccessObject = new PersonDataAccessObject(mockDatabase)

    const expectedArgument = {firstName: 'Ada', lastName: 'Lovelace'}

    /* Act */
    personDataAccessObject.saveToDatabase(expectedArgument);

    /* Assert */
    expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
  })
})