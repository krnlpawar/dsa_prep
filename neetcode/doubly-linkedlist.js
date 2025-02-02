class Node {
	constructor(val) {
		this.head = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
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
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}

	pop() {
		if(!this.head) return undefined;
		let temp = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}
		this.length--;
		return temp;
	}

	shift() {
		if(!this.head) return undefined;
		let temp = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;
		}
		this.length--;
		return temp;
	}

	unshift(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	get(index) {
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
			let prev = this.get(index - 1);
			let temp = prev.next;
			prev.next = newNode;
			newNode.prev = prev;
			newNode.next = temp;
			temp.prev = newNode;
			this.length++;
		}
	}
}