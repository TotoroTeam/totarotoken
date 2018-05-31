var TotoroToken = artifacts.require("./TotoroToken.sol");

contract('TotoroToken', function(accounts){

  it('sets the total supply upon deployment', function() {
    return TotoroToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 20000000000, 'sets the total supply to 20,000,000,000');
    });
  });
})
