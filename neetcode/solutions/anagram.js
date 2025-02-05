class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map()
        let mapT = new Map()

        if(s.length !== t.length){
            return false
        }

        for (let i = 0; i < s.length; i++) {
            mapS[s[i]] = (mapS[s[i]] || 0) + 1;
            mapT[t[i]] = (mapT[t[i]] || 0) + 1;
        }

        for (const key in mapT) {
            if (mapS[key] !== mapT[key]) {
                return false;
            }
        }
        return true;
    }
}
