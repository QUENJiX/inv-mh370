# MH370 Investigation Platform

A comprehensive intelligence and investigation platform for the Malaysia Airlines Flight 370 disappearance case. This web application serves as a centralized hub for analyzing flight data, subject information, timeline events, and geographic flight path visualization.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Data Sources](#data-sources)
8. [Screenshots](#screenshots)
9. [Contributing](#contributing)
10. [License](#license)
11. [Disclaimer](#disclaimer)

---

## Overview

Malaysia Airlines Flight 370 (MH370/MAS370) disappeared on March 8, 2014, while flying from Kuala Lumpur International Airport to Beijing Capital International Airport with 239 people aboard. This platform provides a structured interface for reviewing:

- All 239 subjects (passengers and crew)
- Comprehensive flight timeline with 38 documented events
- Interactive geographic flight path visualization
- Satellite data and radar contact analysis
- Investigation findings and key questions

The platform is designed for research, educational, and analytical purposes.

---

## Features

### Subject Registry
- Complete database of all 239 souls aboard (227 passengers + 12 crew)
- Detailed dossiers with nationality, seat assignments, and classification levels
- Advanced filtering by nationality, group, classification, and search terms
- Connection mapping between subjects
- Priority flagging for persons of interest

### Flight Brief and Route Analysis
- Flight information (callsign, aircraft type, registration, date)
- Origin/destination details with deviation visualization
- Critical timeline markers (last contact, last radar, final signal)
- Fuel load and flight level data
- Flight crew information with flight hours

### Interactive Flight Path Map
- Real-time interactive map powered by Leaflet.js
- Dark-themed CARTO map tiles
- Planned route visualization (KUL to PEK)
- Actual deviation route with key waypoints
- Clickable markers with detailed popups showing:
  - Precise GPS coordinates
  - Event timestamps (MYT and UTC)
  - Critical event descriptions
- Zoom, pan, and reset functionality

### Comprehensive Timeline
- 38 documented events from pre-flight to final signal
- Category filtering (Pre-Flight, Departure, Climb, Cruise, Critical, Deviation, Satellite, Aftermath)
- Expandable event details with transcripts
- Analysis notes for critical events
- Local time (MYT) and UTC timestamps

### Nationality Breakdown
- Visual breakdown of passengers by nationality
- Direct filtering links to subject registry
- 15 nationalities represented

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Mapping | Leaflet.js + React-Leaflet |
| Map Tiles | CARTO Dark Matter |
| Language | JavaScript (ES6+) |

---

## Project Structure

```
inv-mh370/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FlightMap.jsx        # Interactive Leaflet map component
│   │   └── Layout.jsx           # Main layout wrapper with navigation
│   ├── data/
│   │   ├── flight.js            # Flight info, timeline, locations
│   │   └── subjects.js          # All 239 subject records
│   ├── pages/
│   │   ├── Briefing.jsx         # Main dashboard/briefing page
│   │   ├── Subject.jsx          # Individual subject dossier
│   │   └── Subjects.jsx         # Subject registry with filters
│   ├── App.jsx                  # Route configuration
│   ├── index.css                # Global styles and Tailwind config
│   └── main.jsx                 # Application entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Installation

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/inv-mh370.git
   cd inv-mh370
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Usage

### Navigation

- **Briefing Page** (`/`): Main dashboard with flight overview, timeline, and map
- **Subject Registry** (`/subjects`): Browse and filter all 239 subjects
- **Subject Dossier** (`/subject/:id`): Detailed view of individual subjects

### Filtering Subjects

The Subject Registry supports multiple filter methods:
- **Search**: Free-text search by name
- **Nationality**: Filter by country of origin
- **Group**: Filter by category (Flight Crew, Passengers, Flagged POI, etc.)
- **Classification**: Filter by security classification level

### Map Interaction

- **Pan**: Click and drag to move the map
- **Zoom**: Scroll wheel or use +/- buttons
- **Markers**: Click any marker to view detailed information
- **Reset**: Click the Reset button to return to default view

---

## Data Sources

This platform compiles publicly available information from official investigation reports and credible news sources:

- Malaysian Department of Civil Aviation (DCA) - Safety Investigation Report
- Australian Transport Safety Bureau (ATSB) - Search Reports
- International Civil Aviation Organization (ICAO) Standards
- Official press releases and verified media reports

All data is intended for educational and research purposes only.

---

## Screenshots

### Briefing Dashboard
The main dashboard displays flight information, route visualization, critical timeline markers, and crew details.

### Interactive Flight Map
Real-time geographic visualization with planned and actual flight paths, waypoint markers, and detailed popups.

### Subject Registry
Comprehensive database with advanced filtering, search functionality, and quick access to individual dossiers.

### Subject Dossier
Detailed individual profiles including personal information, classification, and connection mapping.

---

## Contributing

Contributions are welcome for:
- Bug fixes and performance improvements
- UI/UX enhancements
- Additional data verification
- Documentation improvements

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Disclaimer

This platform is created for educational, research, and memorial purposes only. It is not affiliated with Malaysia Airlines, the Malaysian Government, or any official investigation body.

The information presented is compiled from publicly available sources and official reports. While efforts have been made to ensure accuracy, users should verify information through official channels for any critical purposes.

The subjects featured in this platform are real individuals. This project is intended to honor their memory and support ongoing research into aviation safety.

---

## Contact

For questions, suggestions, or concerns regarding this project, please open an issue on GitHub.

---

**In Memory of the 239 Souls Aboard MH370**

*March 8, 2014*
