
const expect = require('chai').expect;
const isValid = require('../work')

describe('leetcodesivalid',function(){
  it('should be return  oppsiti operater',function(){
    expect(isValid('()'.to.be.true))
    expect(isValid('()'.to.be.true))
    expect(isValid('()'.to.be.true))
    
    expect(isValid('()'.to.be.true))
  })
  it('should be return  singe',function(){
    expect(isValid('('.to.be.true))
    expect(isValid(')'.to.be.true))
    expect(isValid(')'.to.be.true))
    
    expect(isValid('()'.to.be.true))
  })
  
})