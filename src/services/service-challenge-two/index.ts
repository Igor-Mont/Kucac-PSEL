import { getNotes } from '../../utils/sell/getNotes'

interface Buy {
  amount: number,
  total: number
}

interface Sell {
  total: number,
  amount: number,
  notes: {
    notes_100: number,
    notes_10: number,
    notes_1: number,
  }
}

class ServiceChallengeTwo {
  async execute({ amount, total }: Buy): Promise<Sell> {
    if (total > amount) throw new Error('Purchase price is higher.')
    const exchange = getNotes(amount, total)

    return {
      total,
      amount,
      notes: {
        ...exchange
      }
    }

  }
}

export { ServiceChallengeTwo }