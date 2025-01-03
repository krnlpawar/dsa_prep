class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		if(!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			while(true) {
				if(val < current.val) {
					if(!current.left) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else {
					if(!current.right) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
	}

	bfs() {
		let queue = [this.root];
		console.log('queue is: ', queue)
		let data = [];
		console.log('data is: ', data)
		while(queue.length) {
			let current = queue.shift();
			console.log('current is: ', current)
			data.push(current.val);
			console.log('data is: ', data)

			if(current.left) {
				console.log('current.left is: ', current.left)
				queue.push(current.left);
			}
			if(current.right) {
				console.log('current.right is: ', current.right)
				queue.push(current.right)
			}
			console.log('queue is: ', queue)
			console.log('--------------------')
		}
		return data;
	}
}

let tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree)
console.log(tree.bfs())