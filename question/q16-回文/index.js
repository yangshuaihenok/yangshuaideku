// 'abcba'

function A(str){
    var len = str.length
    var strS = '';
    for(let i = len-1;i>=0;i--){
        strS += str.charAt(i)
    }
    if(strS===str) return true;
    return false
}
console.log(A('abc'))

var isValidChar = (c) => {  // abc  123
    return /^[\w]$/.test(c)
  }
  var isPalindrom = (s) => {
    s = s.toLowerCase()
    let left = 0,right = s.length - 1
    while(left < right) {
      if(!isValidChar(s[left])) {
        left++
        continue
      }
      if(!isValidChar(s[right])) {
        right--
        continue
      }
      if(s[left] == s[right]) {
        left++
        right--
      }else{
        break
      }
    }
    return right <= left
  }
  console.log(isPalindrom("A man, a plan, a canal: Panama"))
  console.log(isPalindrom("abb"))
  