// 힙트리
class HeapTree {
    constructor() {
        this.heap = [];
    }

    //print 함수 시작
    print() {
        let flag = 1;
        let count = 0;
        this.heap.forEach((item, index) => {
            process.stdout.write(`${item} `);

            if (index === count) {
                console.log("");
                flag *= 2;
                count += flag;
            }
        });
    }

    // insert 함수 시작
    insert(item) {
        this.heap.push(item);
        // 부모 찾기
        let childIndex = this.heap.length - 1;
        /*  child = (p+1)*2 and (p+1) *2 -1    */
        let parentIndex = parseInt((childIndex - 1) / 2);

        while (childIndex > 0 && this.heap[parentIndex] < this.heap[childIndex]) {
            //swap
            [this.heap[parentIndex], this.heap[childIndex]] = [
                this.heap[childIndex],
                this.heap[parentIndex],
            ];
            //set index
            childIndex = parentIndex;
            parentIndex = parseInt((childIndex - 1) / 2);
        }
    }
}

const heap = new HeapTree();
const aa = [1, 2, 3, 4, 5, 6, 7, 8];
aa.forEach((item) => {
    heap.insert(item);
});

heap.print();