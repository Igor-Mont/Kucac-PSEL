import { isPalindrome } from './isPalindrome'

function palindromesBetweenRange(start: number, end: number) {
  const palindromes: number[] = []

  for (let i = start; i <= end; i++) {
    if (isPalindrome(i)) {
      palindromes.push(i)
    }
  }

  return palindromes
}

export { palindromesBetweenRange }