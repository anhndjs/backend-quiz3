// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

class findOneCoin {
  constructor(arr) {
    this.arr = arr;
  }

  weight(left, right) {
    const leftsum = _.sum(left);
    const midSum = _.sum(right);
    if (leftsum === midSum) {
      return false;
    }
    return true;
  }


  // checkCoin() {
  //   const { left, mid, right } = this.index3(this.arr);
  //   const resul1 = this.weight(left, mid);
  //   const resul2 = this.weight(left, right);
  //   const threeleft = this.takeelement(left, 3);
  //   const threeright = this.takeelement(right, 3);
  //   const threemid = this.takeelement(mid, 3);

  //   if (resul1) {
  //     if (resul2) {
  //       const res = this.weight(threemid, threeleft);
  //       if (res) {
  //         const twomid = this.takeelement(mid, 2);
  //         const twoleft = this.takeelement(left, 2);
  //         const Sosanh2 = this.weight(twomid, twoleft);
  //         if (Sosanh2) {
  //           const onemid = this.takeelement(mid, 1);
  //           const oneleft = this.takeelement(left, 1);
  //           const sum = this.weight(onemid, oneleft);
  //           if (sum) {
  //             console.log("{ value: left[0], index: 0 }", { value: left[0], index: 0 })
  //             return { value: left[0], index: 0 };
  //           }
  //           console.log("{ value: left[oneleft.length], index:this.arr.findIndex(item => item == left[oneleft.length]) }", { value: left[oneleft.length], index: this.arr.findIndex(item => item == left[oneleft.length]) })
  //           return { value: left[oneleft.length], index: this.arr.findIndex(item => item == left[oneleft.length]) };
  //         }
  //         console.log("{ value: left[twoleft.length], index: twoleft.length }", { value: left[twoleft.length], index: this.arr.findIndex(item => item == left[twoleft.length]) })
  //         return { value: left[twoleft.length], index: this.arr.findIndex(item => item == left[twoleft.length]) };
  //       }
  //       console.log("{ value: left[threeleft.length], index: threeleft.length }", { value: left[threeleft.length], index: this.arr.findIndex(item => item == left[threeleft.length]) })
  //       return { value: left[threeleft.length], index: this.arr.findIndex(item => item == left[threeleft.length]) };
  //     }
  //     const res = this.weight(threemid, threeright);
  //     if (res) {
  //       const twomid = this.takeelement(mid, 2);
  //       const tworight = this.takeelement(right, 2);
  //       const Sosanh2 = this.weight(twomid, tworight);
  //       if (Sosanh2) {
  //         const onemid = this.takeelement(mid, 1);
  //         const oneRight = this.takeelement(right, 1);
  //         const sum = this.weight(onemid, oneRight);
  //         if (sum) {
  //           console.log("{ value: mid[0], index: 0 }", { value: mid[0], index: this.arr.findIndex(item => item == mid[0]) })
  //           return { value: mid[0], index: this.arr.findIndex(item => item == mid[0]) };
  //         }
  //         console.log("{ value: mid[onemid.length], index: onemid.length }", { value: mid[onemid.length], index: this.arr.findIndex(item => item == mid[twomid.length]) })
  //         return { value: mid[onemid.length], index: this.arr.findIndex(item => item == mid[onemid.length]) };
  //       }
  //       console.log("{ value: mid[twomid.length], index: twomid.length }", { value: mid[twomid.length], index: this.arr.findIndex(item => item == mid[twomid.length]) })
  //       return { value: mid[twomid.length], index: this.arr.findIndex(item => item == mid[twomid.length]) };
  //     }
  //     console.log("{ value: mid[threemid.length], index: threemid.length }", { value: mid[threemid.length], index: this.arr.findIndex(item => item == mid[threemid.length]) })
  //     return { value: mid[threemid.length], index: this.arr.findIndex(item => item == mid[threemid.length]) };
  //   }

  //   const res = this.weight(threeleft, threeright);
  //   if (res) {
  //     const twoleft = this.takeelement(left, 2)
  //     const tworight = this.takeelement(right, 2);
  //     const Sosanh2 = this.weight(twoleft, tworight);
  //     if (Sosanh2) {
  //       const oneleft = this.takeelement(left, 1);
  //       const oneRight = this.takeelement(right, 1);
  //       const sum = this.weight(oneleft, oneRight);
  //       if (sum) {
  //         console.log("{ value: right[0], index: 0 }", { value: right[0], index: this.arr.findIndex(item => item == right[0]) })
  //         return { value: right[0], index: this.arr.findIndex(item => item == right[0]) };
  //       }
  //       console.log("{ value: right[oneRight.length], index: oneRight.length }", { value: right[oneRight.length], index: this.arr.findIndex(item => item == right[oneRight.length]) })
  //       return { value: right[oneRight.length], index: this.arr.findIndex(item => item == right[oneRight.length]) };
  //     }
  //     console.log("{ value: right[tworight.length], index: tworight.length }", { value: right[tworight.length], index: this.arr.findIndex(item => item == right[tworight.length]) })
  //     return { value: right[tworight.length], index: this.arr.findIndex(item => item == right[tworight.length]) };
  //   }
  //   console.log("{ value: right[tworight.length], index: threeright.length }", { value: right[threeright.length], index: this.arr.findIndex(item => item == right[tworight.length]) })
  //   return { value: right[threeright.length], index: this.arr.findIndex(item => item == right[threeright.length]) };
  // }
}
module.exports = { findOneCoin }