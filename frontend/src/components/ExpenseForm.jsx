import { useState } from 'react'

export default function ExpenseForm({ onSubmit }) {
  const [label, setLabel] = useState('')
  const [amount, setAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (onSubmit) onSubmit({ label, amount: parseFloat(amount) })
    setLabel('')
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="label">Label</label>
      <input
        id="label"
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        step="0.01"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  )
}
