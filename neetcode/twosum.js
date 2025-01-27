// twosum

function twosum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
}

function twosum2(nums, target) {
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		if (map[diff] !== undefined) {
			return [map[diff], i]
		}
		map[nums[i]] = i
	}
}