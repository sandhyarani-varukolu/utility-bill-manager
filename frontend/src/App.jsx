import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="logo">Utility Bill Manager</div>

        <ul>
          <li>Home</li>
          <li>Bills</li>
          <li>Payments</li>
          <li>Profile</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Manage Your Electricity Bills Easily</h1>
        <p>
          Track bills, payment history, due dates and reminders in one place.
        </p>

        <button>Get Started</button>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Total Bills</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Pending Bills</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>Paid Bills</h3>
          <p>9</p>
        </div>

        <div className="card">
          <h3>Total Amount</h3>
          <p>₹8,450</p>
        </div>
      </section>

      <section className="upcoming">
        <h2>Upcoming Bills</h2>

        <div className="bill">
          <span>Electricity Bill</span>
          <span>₹1,250</span>
          <span>Due: 25 Sep 2026</span>
        </div>

        <div className="bill">
          <span>Electricity Bill</span>
          <span>₹980</span>
          <span>Due: 10 Oct 2026</span>
        </div>
      </section>

      <section className="payments">
        <h2>Recent Payments</h2>

        <table>
          <thead>
            <tr>
              <th>Bill Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Electricity</td>
              <td>₹1200</td>
              <td>15 Sep 2026</td>
              <td>Paid</td>
            </tr>

            <tr>
              <td>Electricity</td>
              <td>₹980</td>
              <td>10 Aug 2026</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p>© 2026 Utility Bill Manager. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;