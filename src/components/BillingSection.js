import { useState, useRef, useEffect } from "react"
import "./BillingSection.css"

const BillingSection = ({ cart, removeFromCart, clearCart, updateQuantity }) => {
  const [customer, setCustomer] = useState("Walk In Customer")
  const [paymentMethod, setPaymentMethod] = useState("Cash")
  const [paidAmount, setPaidAmount] = useState(0)
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [extraDiscount, setExtraDiscount] = useState(0)
  const [vat, setVat] = useState(0)
  const [serviceCharge, setServiceCharge] = useState(10.0)

  const actionsRef = useRef(null)
  const [isFixed, setIsFixed] = useState(false)
  const [bottomSpace, setBottomSpace] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      const total = getTotal()
      setPaidAmount(total)
     }

     calculateTotal()
   }, 
    [cart, deliveryFee, discount, extraDiscount, vat, serviceCharge])

  useEffect(() => {
    const handleScroll = () => {
      if (actionsRef.current) {
        const { bottom } = actionsRef.current.getBoundingClientRect()
        const containerBottom = actionsRef.current.parentElement.getBoundingClientRect().bottom

        if (bottom >= containerBottom && !isFixed) {
          setIsFixed(true)
          setBottomSpace(actionsRef.current.offsetHeight)
        } else if (bottom < containerBottom && isFixed) {
          setIsFixed(false)
          setBottomSpace(0)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isFixed])

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotal = () => {
    const subtotal = getSubtotal()
    return subtotal - discount - extraDiscount + deliveryFee + vat + serviceCharge
  }

  const getChangeAmount = () => {
    return paidAmount - getTotal()
  }

  return (
    <div className="billing-section">
      <div className="BillingTitle"><h2>Billing Section</h2></div>
      

      <div className="customer-selection">
        <div className="dropdown-container">
          <select
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="customer-dropdown"
          >
            <option value="Walk In Customer">Walk In Customer</option>
            <option value="Regular Customer">Regular Customer</option>
            <option value="VIP Customer">VIP Customer</option>
          </select>
          <div className="dropdown-arrow">▼</div>
        </div>
        <button className="add-customer-btn">Add New Customer</button>
      </div>

      {/* <div className="delivery-info">
        <span className="section-icon">👤</span>
        <h3>Delivery Information</h3>
        <button className="edit-btn">✏️</button>
      </div> */}

      <div className="cart-items-container">
        <div className="cart-header">
          <span className="item-col">Item</span>
          <span className="qty-col">Qty</span>
          <span className="price-col">Price</span>
          <span className="delete-col">Delete</span>
        </div>

        <div className="cart-items-scroll">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-col">{item.name}</span>
              <span className="qty-col">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number.parseInt(e.target.value))
                  }
                />
              </span>
              <span className="price-col">
                $ {(item.price * item.quantity).toFixed(2)}
              </span>
              <span className="delete-col">
                <button onClick={() => removeFromCart(item.id)}>🗑️</button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>Addon:</span>
          <span>$ 0.00</span>
        </div>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>$ {getSubtotal().toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discount:</span>
          <span>- $ {discount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery fee:</span>
          <span>$ {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Extra discount:</span>
          <button className="edit-btn">✏️</button>
          <span>- $ {extraDiscount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Vat/tax:</span>
          <button className="edit-btn">✏️</button>
          <span>+ $ {vat.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Service Charge:</span>
          <span>$ {serviceCharge.toFixed(2)}</span>
        </div>
        <div className="summary-row total-row">
          <span>Total:</span>
          <span>$ {getTotal().toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-section">
        <h3>Paid by</h3>
        <div className="payment-methods">
          <button
            className={`payment-btn ${paymentMethod === "Cash" ? "active" : ""}`}
            onClick={() => setPaymentMethod("Cash")}
          >
            Cash
          </button>
          <button
            className={`payment-btn ${paymentMethod === "Card" ? "active" : ""}`}
            onClick={() => setPaymentMethod("Card")}
          >
            Card
          </button>
        </div>

        <div className="payment-details">
          <div className="payment-row">
            <span>Paid Amount:</span>
            <button className="edit-btn">✏️</button>
            <span>
              <input
                type="number"
                value={paidAmount}
                onChange={(e) =>
                  setPaidAmount(Number.parseFloat(e.target.value) || 0)
                }
              />
            </span>
          </div>
          <div className="payment-row">
            <span>Change Amount:</span>
            <span>$ {getChangeAmount().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bottom-space" style={{ height: bottomSpace }}></div>

      <div className={`order-actions ${isFixed ? "fixed" : ""}`} ref={actionsRef}>
        <button className="place-order-btn">Place Order</button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default BillingSection