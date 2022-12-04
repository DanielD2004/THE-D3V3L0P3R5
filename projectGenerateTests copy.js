//test cases 
assert = chai.assert;


describe('Project functions tests:', function () {
it('Test 1: Check if the returned value is from type string',  function() {
    var result = animalUrl('animal');
    assert.typeOf(result, 'string');
});

it('Test 2: Check if animalUrl() returns a url for an animal', function(){
    var result = animalUrl('tiger');
    assert(result == 'https://img.freepik.com/premium-photo/close-up-face-tiger-isolated-black-background_66869-322.jpg');
});

it('Test 3: Check if typos return an empty url', function(){
    var result = animalUrl('elefant');
    assert(result == "");
});

 
})