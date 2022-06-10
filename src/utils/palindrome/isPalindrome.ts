function isPalindrome(num) {
  const str = String(num)

  const strWithoutSpaces = str.split(' ').join('')
  const reverseStrWithoutSpaces = strWithoutSpaces.split('').reverse().join(''); 

  return reverseStrWithoutSpaces === strWithoutSpaces;
}

export { isPalindrome }