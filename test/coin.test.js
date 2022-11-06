var Main = require("../src/Coin");
var sinon = require("sinon");
var mymain = new Main
var chai = require("chai");
var expect = chai.expect;
var { index3, takeelement, handle } = require("../src/ago")

describe("Test weight", function () {
  it("Test weigt method", function () {
    expect(mymain.weight())
  });

  it("Test checksult method", function () {
    expect(mymain.checkResult())
  });
});

describe('#function index3', () => {
  it("test index method", function () {
    expect(() => index3()).Throw.apply
  })
  it("test takeelement method", function () {
    expect(() => takeelement())
  })
})

describe('#function handle', () => {
  it("test handle method", function () {
    expect(() => index3())
  })

  it("test takeelement method", function () {
    expect(() => takeelement())
  })
})

describe('#handle', function () {
  it("Test the  add method", function () {
    var arr = [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(mymain.add(arr)).to.be.equal(2)
  });
  it("spy the add method", function () {
    var spy = sinon.spy(myObj, "add");
    var arg1 = 2;
    mymain.callAnotherFn(arg1)
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(10, 20)).to.be.true
  })
});