# App Store Ranking Tracker — Real Rails Intelligence Panel

An implementation tracking marketplace placement variations and visibility corridors across application node distributions.

## 🔷 Real Rails Alignment Requirements Verified
- **Mandatory Color Palette**: Primary background fully locked to `#030712` (Obsidian Black).
- **Layout Integrity**: Built strictly using the 70% Performance Stage and 30% Intelligence Sidebar allocation.
- **Interactive Handshake**: Clicking any Application Node automatically pushes data telemetry directly into the Sidebar without context loss or full-page refreshes.
- **Scrolling Pass**: Layout boundaries are fully dynamic and explicitly scale horizontally and vertically across multi-axis mobile viewports.

## 📁 Technical Architecture
- **Backend Stack**: Python FastAPI instance handling data structures.
- **Frontend Engine**: Next.js 14+ (App Router), TypeScript, Tailwind CSS.

## 🚀 Execution & Initialization

### Run Backend Server
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000