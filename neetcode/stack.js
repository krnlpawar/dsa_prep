class Stack {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(val) {
		this.data[this.length] = val;
		this.length++;
	}

	pop() {
		if(this.length === 0) return undefined;
		let result = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return result;
	}
}