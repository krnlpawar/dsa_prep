class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let map = new Set();

        for (let num of nums) {
            if (map.has(num)) {
                map.delete(num);
            } else {
                map.add(num);
            }
        }
        return Array.from(map)[0];
    }
}
