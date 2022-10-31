// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

class findOneCoin {
  constructor(arr) {
    this.arr = arr;
  }

  mixArray(arr) {
    return _.shuffle(arr);
  }

  index3(arr) {
    const newArray = this.mixArray(arr);
    const n = 4;
    const [left, mid, right] = _.range(newArray.length / n).map(i => newArray.slice(i * n, (i + 1) * n));
    return { left, mid, right };
  }

  sumCoin(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  weight(left, right) {
    const leftsum = this.sumCoin(left);
    const midSum = this.sumCoin(right);
    if (leftsum === midSum) {
      return false;
    }
    return true;
  }

  takeelement(a, c) {
    const d = _.slice(a, 0, c);
    return d;
  }

  checkCoin() {
    const { left, mid, right } = this.index3(this.arr);
    const resul1 = this.weight(left, mid);
    const resul2 = this.weight(left, right);
    const threeleft = this.takeelement(left, 3);
    const threeright = this.takeelement(right, 3);
    const threemid = this.takeelement(mid, 3);

    if (resul1) {
      if (resul2) {
        const res = this.weight(threemid, threeleft);
        if (res) {
          const twomid = this.takeelement(mid, 2);
          const twoleft = this.takeelement(left, 2);
          const Sosanh2 = this.weight(twomid, twoleft);
          if (Sosanh2) {
            const onemid = this.takeelement(mid, 1);
            const oneleft = this.takeelement(left, 1);
            const sum = this.weight(onemid, oneleft);
            if (sum) {
              return { value: left[0], index: 0 };
            }
            return { value: left[oneleft.length], index: oneleft.length };
          }
          return { value: left[twoleft.length], index: twoleft.length };
        }
        return { value: left[threeleft.length], index: threeleft.length };
      }
      const res = this.weight(threemid, threeright);
      if (res) {
        const twomid = this.takeelement(mid, 2);
        const tworight = this.takeelement(right, 2);
        const Sosanh2 = this.weight(twomid, tworight);
        if (Sosanh2) {
          const onemid = this.takeelement(mid, 1);
          const oneRight = this.takeelement(right, 1);
          const sum = this.weight(onemid, oneRight);
          if (sum) {
            return { value: mid[0], index: 0 };
          }

          return { value: mid[onemid.length], index: onemid.length };
        }

        return { value: mid[twomid.length], index: twomid.length };
      }

      return { value: mid[threemid.length], index: threemid.length };
    }

    const res = this.weight(threeleft, threeright);
    if (res) {
      const tworight = this.takeelement(right, 2);
      const Sosanh2 = this.weight(left, tworight);
      if (Sosanh2) {
        const oneleft = this.takeelement(left, 1);
        const oneRight = this.takeelement(right, 1);
        const sum = this.weight(oneleft, oneRight);
        if (sum) {
          return { value: right[0], index: 0 };
        }
        return { value: right[oneRight.length], index: oneRight.length };
      }
      return { value: right[tworight.length], index: tworight.length };
    }
    return { value: right[threeright.length], index: threeright.length };
  }
}
const findone = new findOneCoin([1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
findone.checkCoin();
