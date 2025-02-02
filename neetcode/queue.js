class Queue {
	constructor() {
		this.data = {};
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			newNode.prev = this.last;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
}

