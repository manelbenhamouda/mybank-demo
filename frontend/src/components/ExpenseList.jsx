export default function ExpenseList({ expenses = [] }) {
  if (expenses.length === 0) {
    return <p>No expenses</p>
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>{expense.label}</span>
          <span>{expense.amount}</span>
        </li>
      ))}
    </ul>
  )
}
