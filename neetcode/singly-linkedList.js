class Node {
	constructor(val) {
		this.head = val;
		this.next = null;
	}
}

class LinkedList {
	constructor(val) {
		this.head = new Node(val);
		this.tail = this.head;
		this.length = 1;
	}

	push(val) {
		let newNode = new Node(val);

		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	pop() {
		if(!this.head) return undefined;

		let temp = this.head;
		let prev = temp;

		while(temp.next) {
			prev = temp;
			temp = temp.next;
		}

		this.tail = prev;
		this.tail.next = null;
		this.length--;

		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
	}

	unshift(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	shift() {
		if(!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		this.length--;
		return temp;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		return this.tail;
	}

	getIndex(index) {
		let counter = 0;
		let current = this.head;
		while(counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		let counter = 0;
		let current = this.head;
		while(counter !== index) {
			current = current.next;
			counter++;
		}
		current.val = val;
	}

	insert(index, val) {
		if(index >= this.length) {
			this.push(val);
		} else {
			let newNode = new Node(val);
			let prev = this.getIndex(index - 1);
			let temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			this.length++;
		}
	}

	clear() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

let myLinkedList = new LinkedList(10);
// myLinkedList.unshift(5);
// myLinkedList.unshift(1);
myLinkedList.push(5);
console.log(myLinkedList)
console.log(myLinkedList.getLast())