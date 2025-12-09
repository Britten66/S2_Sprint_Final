# REACT/RTL/- FINAL SPRINT 

React-based Steam platform clone.

## Tech Stack 
- React 18
- React Router DOM
- Vite
- Context API

## Setup
```bash
cd steem-app
npm install
npm run dev
```

## Git Workflow
- `main` - Final submission only
- `dev` - Integration branch
- `feature/*` - Work branches

**Workflow:**
1. Create feature from `dev`
2. Work and commit
3. Merge to `dev` when done
4. Merge `dev` → `main` only for final submission

## User Flow
```
                          START
                            ↓
                    ┌───────────────┐
                    │ Landing Page  │
                    └───────────────┘
                            ↓
                    [Browse Games]
                            ↓
                 ┌──────────────────────┐
                 │ Store/Search Page    │
                 │ (Filter & Search)    │
                 └──────────────────────┘
                            ↓
                    [Add to Cart]
                            ↓
                    ┌──────────────┐
                    │  Cart Page   │
                    └──────────────┘
                            ↓
                [Proceed to Checkout]
                            ↓
                    ┌──────────────┐
                    │ Login Check? │
                    └──────────────┘
                      ↓           ↓
              Not Logged In   Logged In
                      ↓           ↓
              ┌──────────────┐    │
              │  Login Page  │    │
              └──────────────┘    │
                      ↓           │
                      └───────────┘
                            ↓
                   ┌──────────────┐
                   │Checkout Page │
                   └──────────────┘
                            ↓
                [Complete Purchase]
                            ↓
                 Order Confirmation
                            ↓
                          END
```

### Quick Paths

**Guest User:**  
`Landing → Store → Cart → Login → Checkout → Confirmation`

**Logged-In User:**  
`Landing → Store → Cart → Checkout → Confirmation`

**Direct Navigation:**  
User can navigate to any page via Navbar at any time

## Team
- Christopher Britten
- Justin Seaward
