import { palindromesBetweenRange } from '../../utils/palindrome/palindromesBetweenRange'

interface Range {
  start: number,
  end: number
}

class ServiceChallengeOne {
  async execute({ start, end }: Range): Promise<number[]> {
    if (start > end) throw new Error('Invalid range.')
    const palindromes = palindromesBetweenRange(start, end)

    return palindromes
  }
}

export { ServiceChallengeOne }