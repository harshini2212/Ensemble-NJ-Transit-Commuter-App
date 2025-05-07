import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [userRoutes, setUserRoutes] = useState([]);
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    // Simulating fetching delay data
    setDelays([
      { line: 'Northeast Corridor', delay: '10 minutes' },
      { line: 'North Jersey Coast Line', delay: '5 minutes' },
      { line: 'Morris & Essex Lines', delay: 'On time' },
    ]);
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>NJ Transit Commuter App</h1>
          <nav>
            <Link to="/">Dashboard</Link> | 
            <Link to="/route-planner">Route Planner</Link> | 
            <Link to="/ensemble-wallet">Ensemble Wallet</Link> | 
            <Link to="/delays">Delays</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/route-planner">
              <RoutePlanner userRoutes={userRoutes} setUserRoutes={setUserRoutes} />
            </Route>
            <Route path="/ensemble-wallet">
              <EnsembleWallet userRoutes={userRoutes} />
            </Route>
            <Route path="/delays">
              <Delays delays={delays} />
            </Route>
          </Switch>
        </main>
        <footer>
          <p>&copy; 2024 NJ Transit Commuter App</p>
        </footer>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to NJ Transit Commuter App</h2>
      <p>Plan your routes and save with our Ensemble Wallet Pay Plan!</p>
    </div>
  );
}

function RoutePlanner({ userRoutes, setUserRoutes }) {
  const [newRoute, setNewRoute] = useState({ from: '', to: '', date: '', time: '', line: '' });

  const handleInputChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const addRoute = (e) => {
    e.preventDefault();
    setUserRoutes([...userRoutes, newRoute]);
    setNewRoute({ from: '', to: '', date: '', time: '', line: '' });
  };

  return (
    <div className="route-planner">
      <h2>Plan Your Routes</h2>
      <form onSubmit={addRoute}>
        <input
          type="text"
          name="from"
          value={newRoute.from}
          onChange={handleInputChange}
          placeholder="From"
          required
        />
        <input
          type="text"
          name="to"
          value={newRoute.to}
          onChange={handleInputChange}
          placeholder="To"
          required
        />
        <input
          type="date"
          name="date"
          value={newRoute.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newRoute.time}
          onChange={handleInputChange}
          required
        />
        <select
          name="line"
          value={newRoute.line}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Line</option>
          <option value="Northeast Corridor">Northeast Corridor</option>
          <option value="North Jersey Coast Line">North Jersey Coast Line</option>
          <option value="Morris & Essex Lines">Morris & Essex Lines</option>
          <option value="Montclair-Boonton Line">Montclair-Boonton Line</option>
          <option value="Main/Bergen County Line">Main/Bergen County Line</option>
        </select>
        <button type="submit">Add Route</button>
      </form>
      <h3>Your Routes:</h3>
      <ul>
        {userRoutes.map((route, index) => (
          <li key={index}>
            From {route.from} to {route.to} on {route.date} at {route.time} on {route.line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EnsembleWallet({ userRoutes }) {
  const [payPlan, setPayPlan] = useState(null);
  const [revenueTable, setRevenueTable] = useState(null);

  useEffect(() => {
    // Simulating an API call to calculate the Ensemble Wallet Pay Plan
    const calculatePayPlan = () => {
      setTimeout(() => {
        const routeCount = userRoutes.length;
        const basePrice = 152.50;
        const discount = routeCount * 5; // $5 discount per route
        const finalPrice = Math.max(basePrice - discount, 75); // Minimum price of $75

        setPayPlan({
          planType: 'Ensemble Wallet Pay Plan',
          price: finalPrice,
          savings: basePrice - finalPrice,
          routesSummary: summarizeRoutes(userRoutes)
        });

        // Calculate revenue table and predicted expenditure
        const pastPurchases = [120, 135, 140, 130, 145]; // Example past purchases
        const averagePurchase = pastPurchases.reduce((a, b) => a + b, 0) / pastPurchases.length;
        const predictedExpenditure = averagePurchase * 0.9; // 10% discount prediction

        setRevenueTable({
          pastPurchases,
          averagePurchase,
          predictedExpenditure
        });
      }, 1000);
    };

    calculatePayPlan();
  }, [userRoutes]);

  const summarizeRoutes = (routes) => {
    const summary = {};
    routes.forEach(route => {
      const key = `${route.from} to ${route.destination}`;
      if (summary[key]) {
        summary[key].count++;
      } else {
        summary[key] = { count: 1, line: route.line };
      }
    });
    return summary;
  };

  return (
    <div className="ensemble-wallet">
      <h2>Your Ensemble Wallet Pay Plan</h2>
      {payPlan ? (
        <div>
          <p>Plan Type: {payPlan.planType}</p>
          <p>Price: ${payPlan.price.toFixed(2)}</p>
          <p>You save: ${payPlan.savings.toFixed(2)}</p>
          <h3>Your Frequent Routes:</h3>
          <ul>
            {Object.entries(payPlan.routesSummary).map(([route, details], index) => (
              <li key={index}>
                {route} ({details.count} times) - {details.line}
              </li>
            ))}
          </ul>
          {revenueTable && (
            <div>
              <h3>Revenue Table</h3>
              <p>Past 5 Months Purchases: ${revenueTable.pastPurchases.join(', $')}</p>
              <p>Average Monthly Purchase: ${revenueTable.averagePurchase.toFixed(2)}</p>
              <p>Predicted Expenditure for This Month: ${revenueTable.predictedExpenditure.toFixed(2)}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Calculating your Ensemble Wallet Pay Plan...</p>
      )}
    </div>
  );
}

function Delays({ delays }) {
  return (
    <div className="delays">
      <h2>Current Delays</h2>
      <ul>
        {delays.map((delay, index) => (
          <li key={index}>{delay.line}: {delay.delay}</li>
        ))}
      </ul>
    </div>
  );
}