import { palindromesBetweenRange } from '../../utils/palindrome/palindromesBetweenRange'

interface Range {
  start: number,
  end: number
}

class ServiceChallengeOne {
  execute({ start, end }: Range): number[] {
    const palindromes = palindromesBetweenRange(start, end)

    return palindromes
  }
}

export { ServiceChallengeOne }