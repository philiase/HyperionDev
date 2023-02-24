const { sayNumber } = require('./dist/solution');
describe('sayNumber function', () => {
  it('should return "Zero." when given 0', () => {
    expect(sayNumber(0)).toEqual('Zero.')
  })

  it('should return "One" when given 1', () => {
    expect(sayNumber(1)).toEqual('One.')
  })

  it('should return "Twenty." when given 20', () => {
    expect(sayNumber(20)).toEqual('Twenty.')
  })

  it('should return "One hundred and Twenty-Three." when given 123', () => {
    expect(sayNumber(123)).toEqual('One hundred and Twenty-Three.')
  })

  it('should return "One thousand, two hundred and thirty-four." when given 1234', () => {
    expect(sayNumber(1234)).toEqual('One thousand, two hundred and thirty-four.')
  })

  it('should return "One million, two hundred and thirty-four thousand, five hundred and sixty-seven." when given 1234567', () => {
    expect(sayNumber(1234567)).toEqual('One million, two hundred and thirty-four thousand, five hundred and sixty-seven.')
  })

  it('should return "Three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and twelve." when given 3456789012', () => {
    expect(sayNumber(3456789012)).toEqual('Three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and twelve.')
  })
})

