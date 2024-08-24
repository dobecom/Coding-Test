class MinHeap {
    constructor() {
      this.heap = [];
    }
    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
      return 2 * i + 1;
    }
    getRightChildIndex(i) {
      return 2 * i + 2;
    }
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
    extractMin() {
      if (this.heap.length === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
    heapifyDown(index) {
      let smallest = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  }
  
  const minHeap = new MinHeap();
  minHeap.insert(3);
  minHeap.insert(2);
  minHeap.insert(1);
  console.log(minHeap.extractMin()); // 1
  console.log(minHeap.extractMin()); // 2
  console.log(minHeap.extractMin()); // 3
  