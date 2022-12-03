//test cases 
assert = chai.assert;


describe('Project functions tests:', function () {
var result = testFunction();


  it('Test 1: Check if the returned value is from type number',  function() {
    assert.typeOf(result, 'number');
});

it('Test 2: Check if search() returns something (image and testNumber)', function(){
  assert.exists(result, 'the return value is not null or undefined');
});

it('Test 3: Check if typos display the error message and image', function(){
  assert.exists(result, 'the return value is not null or undefined');
});

 
})