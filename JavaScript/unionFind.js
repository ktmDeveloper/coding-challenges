class UnionFind {
  constructor(num) {
    this.array = new Array(num).fill(0);
    for (let i = 0; i < num; i++) {
      this.array[i] = i;
    }
    this.num = num;
  }

  find(index) {
    if (index !== this.array[index]) {
      this.array[index] = this.find(this.array[index]);
    }
    return this.array[index];
  }

  union(i, j) {
    const ri = this.find(i);
    const rj = this.find(j);
    if (ri !== rj) {
      this.array[ri] = rj;
      this.num--;
    }
  }

  size() {
    return this.num;
  }
}
