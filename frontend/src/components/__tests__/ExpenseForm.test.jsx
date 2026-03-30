import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ExpenseForm from '../ExpenseForm'

describe('ExpenseForm', () => {
  it('affiche les champs du formulaire', () => {
    render(<ExpenseForm />)
    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('appelle onSubmit au clic', () => {
    const mockSubmit = vi.fn()
    render(<ExpenseForm onSubmit={mockSubmit} />)
    fireEvent.click(screen.getByRole('button', { name: /add/i }))
    expect(mockSubmit).toHaveBeenCalled()
  })
})