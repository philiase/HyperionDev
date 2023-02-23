describe('sayNumber function', () => {
  it('should return "Zero." when given 0', () => {
    expect(sayNumber(0)).toEqual('Zero.')
  })

  it('should return "one" when given 1', () => {
    expect(sayNumber(1)).toEqual('one.')
  })

  it('should return "twenty." when given 20', () => {
    expect(sayNumber(20)).toEqual('twenty.')
  })

  it('should return "one hundred and twenty-three." when given 123', () => {
    expect(sayNumber(123)).toEqual('one hundred and twenty-three.')
  })

  it('should return "one thousand, two hundred and thirty-four." when given 1234', () => {
    expect(sayNumber(1234)).toEqual('one thousand, two hundred and thirty-four.')
  })

  it('should return "one million, two hundred and thirty-four thousand, five hundred and sixty-seven." when given 1234567', () => {
    expect(sayNumber(1234567)).toEqual('one million, two hundred and thirty-four thousand, five hundred and sixty-seven.')
  })

  it('should return "three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand, twelve." when given 3456789012', () => {
    expect(sayNumber(3456789012)).toEqual('three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand, twelve.')
  })
})

