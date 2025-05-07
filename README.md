# 🚆 Ensemble NJ Transit Commuter App

**A smart, ML-powered commuting companion for New Jersey residents — blending real-time transit info, seamless ticketing, and intelligent savings plans.**

---

## 1.  Overview

The **Ensemble NJ Transit Commuter App** is a full-stack platform built to improve the daily experience of NJ Transit users. It simplifies travel planning, digital ticketing, and live updates — while leveraging machine learning to **predict monthly expenditures** and offer **personalized discount plans**.

The project is named after our **ensemble modeling approach**, which powers our Wallet Pay Plan recommendation engine using a fusion of machine learning models and meta-learners.

---

## 2.  Key Features

-  **Real-Time Transit Data** – Integrates with NJ Transit's API for live train/bus updates.
-  **Interactive Route Planning** – Visualizes multi-modal travel across train, bus, and light rail.
-  **Digital Ticketing** – Secure ticket purchase and storage.
-  **Ensemble Wallet Pay Plan** – Personalized discount suggestions based on ML prediction of monthly travel spending.
-  **Secure Login** – JWT-based authentication for user sessions.

---

## 3. 🛠️ Tech Stack

| Layer        | Technology                 |
|--------------|-----------------------------|
| Frontend     | React.js, Tailwind CSS       |
| Backend      | Python (Flask), Flask-Restful|
| Database     | PostgreSQL                   |
| ML Modeling  | Scikit-learn, Keras (TensorFlow backend) |
| Deployment   | Docker, Heroku (API), Netlify (Frontend) |
| APIs         | NJ Transit GTFS Realtime, Google Maps API |

---

## 4.  Ensemble Modeling for Expenditure Prediction

To personalize travel discount plans, we implemented a **stacked ensemble model** to analyze the user’s **monthly ticket purchases, travel frequency, trip cost patterns**, and **gaps in travel data**.

###  Why an Ensemble?

Different models excel at different data conditions:

- **SVR (Support Vector Regression)**: Excellent at modeling **non-linear relationships** and **identifying patterns**, especially useful when user travel shows periodicity or seasonality.
- **Linear Regression**: Performs well with complete and clean data, offering **interpretable** outputs.
- **Missing/Irregular Data**: Linear regression struggles here, so **SVR fills in the pattern detection**.
- **Meta Model - ANN**: A **neural network acts as the meta-learner**, taking predictions from SVR and regression as input features and learning to **blend them optimally**.

### ⚙ Ensemble Pipeline


- **Input features**: Day-of-week travel frequency, average trip duration, cost per mode, time since last trip, seasonality flags.
- **ANN structure**: 1 hidden layer (64 nodes), ReLU activation, trained with Adam optimizer.

---

## 5. ⚛ Frontend (React.js)

- **React Hooks** for state management (`useState`, `useEffect`) with context API for user sessions.
- **Dynamic Routing** with `react-router-dom` for views like dashboard, wallet, planner.
- **Component-driven architecture** — ticket drawer, route planner, and ensemble wallet panel are modular components.
- **Interactive Maps** with Leaflet + Google Maps API integration for station selection and travel routes.
- **Secure Login** flow using JWT tokens stored in `localStorage`.

---

## 6.  Backend (Flask API)

- **RESTful API** with Flask-Restful for:
  - User auth, wallet transactions
  - Real-time NJ Transit feed parsing
  - ML predictions and suggestions
- **Database schema**:
  - `users`, `tickets`, `routes`, `wallet_plans`, `predictions`
- **NJ Transit API Adapter**: Translates GTFS data into usable JSON for frontend rendering.

---

## 7.  Security

- **JWT Authentication** using Flask-JWT-Extended
- **Rate-limiting** for API endpoints (Flask-Limiter)
- HTTPS enforced via Heroku for backend; CORS-enabled API gateway

---

## 8.  Testing

- Unit tests using `pytest` for backend
- Mock tests for ML outputs using test data
- React component tests using `Jest` and `React Testing Library`

---

## 9.  Future Improvements

- Expand ensemble to incorporate **XGBoost** and **Prophet** for better trend modeling.
- Add **monthly travel budget goal** feature.
- Partner with local businesses to offer **cross-app loyalty discounts**.
- Implement **travel carbon footprint tracking** for sustainability-conscious users.

---


