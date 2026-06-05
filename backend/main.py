from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any

app = FastAPI(title="App Store Intelligence Pipeline")

# Enable cross-origin handshakes with your Next.js server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Robust Phase-1 Compliant App Store Synthetic Data Ledger Matrix
APP_RANKINGS_DATA = [
    {
        "id": "app-1",
        "name": "Terminal Pay Wallet",
        "category": "FINANCE",
        "current_rank": 1,
        "previous_rank": 1,
        "thirty_day_history": [1, 1, 2, 1, 1, 1, 2, 1],
        "market_share": "42.1%",
        "volatility": "STABLE (+0.2%)",
        "review_velocity": "+5.8k reviews/wk",
        "launch_annotation": "v2.4.0 Engine Update",
        "competitor_baseline": "Apex Wallet (Rank #3)"
    },
    {
        "id": "app-2",
        "name": "FreightFlow Matrix",
        "category": "LOGISTICS",
        "current_rank": 2,
        "previous_rank": 4,
        "thirty_day_history": [5, 5, 4, 3, 3, 2, 2, 2],
        "market_share": "28.4%",
        "volatility": "BULLISH (+3.1%)",
        "review_velocity": "+4.9k reviews/wk",
        "launch_annotation": "Global Marketing Push",
        "competitor_baseline": "RouteOptima (Rank #5)"
    },
    {
        "id": "app-3",
        "name": "CartVelocity Engine",
        "category": "STORES",
        "current_rank": 3,
        "previous_rank": 2,
        "thirty_day_history": [2, 2, 1, 2, 2, 3, 3, 3],
        "market_share": "19.7%",
        "volatility": "BEARISH (-1.4%)",
        "review_velocity": "+3.2k reviews/wk",
        "launch_annotation": "API Overhaul Deploy",
        "competitor_baseline": "ShopNode (Rank #6)"
    },
    {
        "id": "app-4",
        "name": "OmniCore Utility",
        "category": "UTILITIES",
        "current_rank": 4,
        "previous_rank": 5,
        "thirty_day_history": [6, 6, 5, 5, 4, 4, 4, 4],
        "market_share": "9.8%",
        "volatility": "STABLE (+0.5%)",
        "review_velocity": "+1.1k reviews/wk",
        "launch_annotation": "Security Patch v1.9",
        "competitor_baseline": "SysGuard (Rank #7)"
    }
]

@app.get("/api/apps/rankings")
def get_app_rankings():
    return APP_RANKINGS_DATA

@app.get("/health")
def health_check():
    return {"status": "healthy", "engine": "App Store Tracker Proof of Concept"}