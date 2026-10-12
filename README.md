# APEX Formula 1 — World Championship Experience 🏎️🔴⚫

A high-performance Formula 1 website crafted with a stylish **carbon black & racing red** UI design. Features real teams, real drivers with official photos and telemetry radar indexes, authentic track layouts (both interactive SVG racing lines and official high-resolution maps), and live championship standings for both drivers and constructors.

![Formula 1](https://img.shields.io/badge/FIA_Formula_1-World_Championship-E10600?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python 3](https://img.shields.io/badge/Python-3-3776ab?style=for-the-badge&logo=python&logoColor=white)

---

## 🌟 Key Features

### 1. 🏎️ Official Drivers Section
- **Real Names & Official Headshots**: Max Verstappen, Lando Norris, Charles Leclerc, Lewis Hamilton, Oscar Piastri, George Russell, Carlos Sainz, Fernando Alonso, and more.
- **Racing Numbers & Nationalities**: Racing numbers (#1, #4, #16, #44...), country flags, and 3-letter timing codes (VER, NOR, LEC, HAM...).
- **Comprehensive Career Metrics**: Grand Prix wins, career podiums, pole positions, world championship crowns, and fastest laps.
- **Interactive Driver Modal**: Deep-dive biographies and a **5-axis Telemetry Skill Radar** (Raw Speed, Consistency, Racecraft, Wet Weather Control, Tyre Management).
- **Fast Filter & Search**: Instant filter by *Top 5 Contenders*, *World Champions*, *Race Winners*, or custom search.

### 2. 🏁 Constructors & Teams Grid
- **10 Official Teams**: McLaren, Scuderia Ferrari HP, Oracle Red Bull Racing, Mercedes-AMG PETRONAS, Aston Martin Aramco, Williams Racing, Visa Cash App RB, BWT Alpine, Haas F1 Team, and Stake F1 Team / Audi.
- **Real Car Imagery & Official Emblems**: Detailed car livery renders, team logos, and team colors.
- **Paddock Technical Specifications**: Team Principals (Andrea Stella, Fred Vasseur, Toto Wolff, Christian Horner, James Vowles...), power units (Mercedes, Ferrari, Honda RBPT, Renault), chassis names, base headquarters, and World Constructors' Championships (WCC) titles.
- **Interactive Team Tech Modal**: Click any team card to inspect technical car details and driver pairings.

### 3. 🗺️ Circuit Guide & All 24 Calendar Circuits
- **All 24 World Championship Circuits**: Bahrain, Saudi Arabia, Australia, Japan, China, Miami, Emilia Romagna, Monaco, Canada, Spain, Austria, Great Britain, Hungary, Belgium, Netherlands, Italy, Azerbaijan, Singapore, United States (COTA), Mexico, São Paulo (Interlagos), Las Vegas, Qatar, and Abu Dhabi.
- **Detailed Circuit Information**: City & country location, circuit length (km), number of laps, total race distance, corner count (turns), DRS detection and activation zones, and official race lap records with driver and year.
- **Official FOM Circuit Maps**: Exclusively high-resolution official Formula 1 circuit map photography across all 24 tracks with full-screen zoom inspection.

### 4. 🏆 2026 World Championship Standings (WDC & WCC)
- **2026 Drivers' Championship (WDC)**: Real 2026 points, leader gap tracker with graphical progress bars, race wins, podiums, and recent 5-race form strips (featuring Norris, Leclerc, Hamilton in Ferrari scarlet, Verstappen, Piastri, Sainz in Williams blue, and Antonelli).
- **2026 Constructors' Championship (WCC)**: Real points battle with McLaren leading Ferrari, Red Bull, Mercedes, and Williams.
- **Top 3 Podium Feature Cards**: Specialized Gold, Silver, and Bronze trophy cards for P1, P2, and P3 contenders.

### 5. ⚡ Pit Wall Tools & Authentic Engine Sound
- **Authentic Formula 1 Engine Rev Audio**: Integrated real F1 V6 Turbo Hybrid audio recording (`engine_rev.mp3`) triggered by the Hero "Rev Engine" button and the Pit Wall Dyno Lab.
- **Interactive V6 Hybrid Dyno Lab**: Live 15,000 RPM tachometer needle gauge, digital RPM readouts, throttle vibration animations, and synchronized audio track progress bar.
- **Lights Out Reaction Timer**: Sequential 5-red-light starting gantry with randomized lights-out delay. Measures user reaction time in milliseconds with driver reflex rankings and false start detection.
- **Head-to-Head Comparison Tool**: Select any two drivers to generate instant statistical comparisons with animated dual bars.
- **Live Grand Prix Countdown**: Real-time ticker counting down days, hours, minutes, and seconds to the next Grand Prix race start.

---

## 🏃 How to Run

### Method 1: Local Python Web Server (Recommended)
In PowerShell or terminal:

```powershell
python server.py
```

Then open your browser at:
👉 **[http://localhost:8000](http://localhost:8000)**

### Method 2: Direct Browser Launch
Simply double-click `index.html` to open directly in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 🎨 Design System
- **F1 Racing Red**: `#E10600` (Glow: `rgba(225, 6, 0, 0.45)`)
- **Carbon Darkest**: `#070709` / `#0D0D11`
- **Carbon Chassis Card**: `#13131A`
- **DRS Green**: `#10B981`
- **Championship Gold**: `#F59E0B`
- **Typography**: Barlow (Aerodynamic italicized display) & JetBrains Mono (Telemetry timing font)
