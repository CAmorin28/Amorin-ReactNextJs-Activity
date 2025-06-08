import { useState } from 'react'

export default function TicketCounter() {
  const [count, setCount] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paid, setPaid] = useState(false)

  const subtotal = count * 500
  const handlePayment = () => {
    setPaid(true)
    setTimeout(() => {
      alert(`A very warm welcome to all our esteemed guests and participants attending the Department of Computer Engineering Tech Conference!\n\nThis flagship event is a testament to the dedication and vision of the Cebu Institute of Technology University, who proudly organized this gathering. We are thrilled to bring together leading minds and passionate individuals to explore the latest advancements and future trends in computer engineering. We trust that today will be a day of inspiration, collaboration, and knowledge exchange.`)
    }, 500)
  }

  return (
    <div className="ticket-counter">
      <h2>Ticket Counter</h2>
      <p className="price">Ticket Price: PHP 500.00</p>
      
      <div className="counter-controls">
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      
      {count > 0 && (
        <div className="payment-section">
          <p className="subtotal">Subtotal: PHP {subtotal.toFixed(2)}</p>
          
          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === 'gcash'}
                onChange={() => setPaymentMethod('gcash')}
              />
              <img src="/gcash.png" alt="GCash" width="50" />
              Pay with GCash
            </label>
          </div>
          
          {paymentMethod === 'gcash' && (
            <button 
              className="pay-button"
              onClick={handlePayment}
              disabled={paid}
            >
              {paid ? 'Payment Successful!' : 'Pay Now'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}