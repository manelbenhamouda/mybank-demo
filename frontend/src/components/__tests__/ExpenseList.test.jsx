import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ExpenseList from '../ExpenseList'

describe('ExpenseList', () => {
  it('affiche les dépenses passées en props', () => {
    const expenses = [
      { id: 1, label: 'Loyer', amount: 900 },
      { id: 2, label: 'Courses', amount: 120 },
    ]
    render(<ExpenseList expenses={expenses} />)
    expect(screen.getByText('Loyer')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
  })

  it('affiche un message si liste vide', () => {
    render(<ExpenseList expenses={[]} />)
    expect(screen.getByText(/no expenses/i)).toBeInTheDocument()
  })
})