const _ = require('lodash')
function mixArray(arr) {
  return _.shuffle(arr);
}

function index3(arr) {
  const newArray = mixArray(arr);
  const n = 4;
  const [left, mid, right] = _.range(newArray.length / n).map(i => newArray.slice(i * n, (i + 1) * n));
  return { left, mid, right };
}


function takeelement(a, c) {
  const d = _.slice(a, 0, c);
  return d;
}

function handle(arr, weight) {
  const { left, mid, right } = index3(arr);
  const resul1 = weight(left, mid);
  const resul2 = weight(left, right);
  const threeleft = takeelement(left, 3);
  const threeright = takeelement(right, 3);
  const threemid = takeelement(mid, 3);

  if (resul1) {
    if (resul2) {
      const res = weight(threemid, threeleft);
      if (res) {
        const twomid = takeelement(mid, 2);
        const twoleft = takeelement(left, 2);
        const Sosanh2 = weight(twomid, twoleft);
        if (Sosanh2) {
          const onemid = takeelement(mid, 1);
          const oneleft = takeelement(left, 1);
          const sum = weight(onemid, oneleft);
          if (sum) {
            // console.log("{ value: left[0], index: 0 }", { value: left[0], index: 0 })
            return { value: left[0], index: 0 };
          }
          // console.log("{ value: left[oneleft.length], index:arr.findIndex(item => item == left[oneleft.length]) }", { value: left[oneleft.length], index: arr.findIndex(item => item == left[oneleft.length]) })
          return { value: left[oneleft.length], index: arr.findIndex(item => item == left[oneleft.length]) };
        }
        // console.log("{ value: left[twoleft.length], index: twoleft.length }", { value: left[twoleft.length], index: arr.findIndex(item => item == left[twoleft.length]) })
        return { value: left[twoleft.length], index: arr.findIndex(item => item == left[twoleft.length]) };
      }
      // console.log("{ value: left[threeleft.length], index: threeleft.length }", { value: left[threeleft.length], index: arr.findIndex(item => item == left[threeleft.length]) })
      return { value: left[threeleft.length], index: arr.findIndex(item => item == left[threeleft.length]) };
    }
    const res = weight(threemid, threeright);
    if (res) {
      const twomid = takeelement(mid, 2);
      const tworight = takeelement(right, 2);
      const Sosanh2 = weight(twomid, tworight);
      if (Sosanh2) {
        const onemid = takeelement(mid, 1);
        const oneRight = takeelement(right, 1);
        const sum = weight(onemid, oneRight);
        if (sum) {
          // console.log("{ value: mid[0], index: 0 }", { value: mid[0], index: arr.findIndex(item => item == mid[0]) })
          return { value: mid[0], index: arr.findIndex(item => item == mid[0]) };
        }
        // console.log("{ value: mid[onemid.length], index: onemid.length }", { value: mid[onemid.length], index: arr.findIndex(item => item == mid[twomid.length]) })
        return { value: mid[onemid.length], index: arr.findIndex(item => item == mid[onemid.length]) };
      }
      // console.log("{ value: mid[twomid.length], index: twomid.length }", { value: mid[twomid.length], index: arr.findIndex(item => item == mid[twomid.length]) })
      return { value: mid[twomid.length], index: arr.findIndex(item => item == mid[twomid.length]) };
    }
    // console.log("{ value: mid[threemid.length], index: threemid.length }", { value: mid[threemid.length], index: arr.findIndex(item => item == mid[threemid.length]) })
    return { value: mid[threemid.length], index: arr.findIndex(item => item == mid[threemid.length]) };
  }

  const res = weight(threeleft, threeright);
  if (res) {
    const twoleft = takeelement(left, 2)
    const tworight = takeelement(right, 2);
    const Sosanh2 = weight(twoleft, tworight);
    if (Sosanh2) {
      const oneleft = takeelement(left, 1);
      const oneRight = takeelement(right, 1);
      const sum = weight(oneleft, oneRight);
      if (sum) {
        // console.log("{ value: right[0], index: 0 }", { value: right[0], index: arr.findIndex(item => item == right[0]) })
        return { value: right[0], index: arr.findIndex(item => item == right[0]) };
      }
      //  console.log("{ value: right[oneRight.length], index: oneRight.length }", { value: right[oneRight.length], index: arr.findIndex(item => item == right[oneRight.length]) })
      return { value: right[oneRight.length], index: arr.findIndex(item => item == right[oneRight.length]) };
    }
    // console.log("{ value: right[tworight.length], index: tworight.length }", { value: right[tworight.length], index: arr.findIndex(item => item == right[tworight.length]) })
    return { value: right[tworight.length], index: arr.findIndex(item => item == right[tworight.length]) };
  }
  // console.log("{ value: right[tworight.length], index: threeright.length }", { value: right[threeright.length], index: arr.findIndex(item => item == right[tworight.length]) })
  return { value: right[threeright.length], index: arr.findIndex(item => item == right[threeright.length]) };
}

module.exports = { handle }