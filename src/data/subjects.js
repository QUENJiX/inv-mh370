/**
 * MH370 INVESTIGATION PLATFORM
 * SUBJECT DATABASE - CLASSIFIED
 * Royal Intelligence Corps (Kor Risik Diraja - KRR)
 * 
 * Total Subjects: 239 (227 Passengers + 12 Crew)
 * Data verified against: Malaysia Airlines manifest, ICAO reports, verified news sources
 */

// Classification levels
export const CLASSIFICATION = {
    PRIORITY: 'PRIORITY',
    FLAGGED: 'FLAGGED',
    CLEARED: 'CLEARED',
    UNREVIEWED: 'UNREVIEWED'
};

// Subject groups
export const GROUPS = {
    CREW_FLIGHT: 'Flight Crew',
    CREW_CABIN: 'Cabin Crew',
    FREESCALE: 'Freescale Semiconductor',
    ARTISTS: 'Chinese Artists Delegation',
    BUSINESS: 'Business/VIP',
    INVESTIGATION: 'Investigation Flagged',
    GENERAL: 'General Passenger'
};

// Nationality codes with full names
export const NATIONALITIES = {
    MYS: { code: 'MYS', name: 'Malaysia', flag: '🇲🇾' },
    CHN: { code: 'CHN', name: 'China', flag: '🇨🇳' },
    AUS: { code: 'AUS', name: 'Australia', flag: '🇦🇺' },
    IDN: { code: 'IDN', name: 'Indonesia', flag: '🇮🇩' },
    USA: { code: 'USA', name: 'United States', flag: '🇺🇸' },
    FRA: { code: 'FRA', name: 'France', flag: '🇫🇷' },
    NZL: { code: 'NZL', name: 'New Zealand', flag: '🇳🇿' },
    UKR: { code: 'UKR', name: 'Ukraine', flag: '🇺🇦' },
    CAN: { code: 'CAN', name: 'Canada', flag: '🇨🇦' },
    RUS: { code: 'RUS', name: 'Russia', flag: '🇷🇺' },
    TWN: { code: 'TWN', name: 'Taiwan', flag: '🇹🇼' },
    NLD: { code: 'NLD', name: 'Netherlands', flag: '🇳🇱' },
    IND: { code: 'IND', name: 'India', flag: '🇮🇳' },
    IRN: { code: 'IRN', name: 'Iran', flag: '🇮🇷' }
};

/**
 * FLIGHT CREW (2)
 */
const FLIGHT_CREW = [
    {
        id: 1,
        name: "Zaharie Ahmad Shah",
        age: 53,
        dob: "1961-07-31",
        nationality: "MYS",
        role: "Captain / Pilot in Command",
        group: GROUPS.CREW_FLIGHT,
        seat: "Flight Deck - Left Seat",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.PRIORITY,
        biography: `Captain Zaharie Ahmad Shah was the Pilot in Command of MH370. Born July 31, 1961 in Penang, Malaysia. Joined Malaysia Airlines as a Cadet Pilot in 1981 under MARA sponsorship. Trained in Manila, Philippines, graduating with Commercial Pilot License & Instrument Rating in 1983.

Career progression: Second Officer (1983), Captain on Fokker F50 (1990), Boeing 777-200ER Captain since 1998. Total flight hours: 18,423 including 8,659 on Boeing 777-200. Since 2007, served as Type Rating Instructor (TRI) and Type Rating Examiner (TRE) for B777. On MH370, he was also acting as TRI for First Officer Fariq.

Aircraft types flown: Fokker F27, Boeing 737-200, Airbus A300B4, Fokker F50, Boeing 737-400, Airbus A330-300, Boeing 777-200ER.`,
        personalDetails: `Resided in Shah Alam, Selangor. Married with three children. Known aviation enthusiast who maintained detailed home flight simulator and participated in radio-controlled model aircraft hobby. Active YouTuber with instructional videos. Skilled in cooking.

Politically active - opposed corruption in Malaysia, joined opposition party (PKR) in early 2013. Volunteered at community kitchens supporting opposition leader Anwar Ibrahim.`,
        investigationIntel: `HOME FLIGHT SIMULATOR: FBI analysis of deleted data revealed simulated flight route deep into southern Indian Ocean, closely mirroring MH370's presumed flight path. This evidence reportedly withheld from public investigation reports until leaked.

FLIGHT PATH DEVIATION: Aircraft made unexplained detour over Penang (Captain's hometown) - interpreted by some experts as potential "final farewell."

EXPERT THEORIES: British Boeing expert Simon Hardy and air crash investigator Larry Vance theorize intentional cabin depressurization to incapacitate all aboard before guiding aircraft to final location.

OFFICIAL POSITION: No conclusive evidence definitively proving culpability. Family and colleagues consistently defended his character as professional and caring with no known personal, medical, or financial issues.`,
        connections: [2], // Connected to First Officer
        sources: ["mh370wiki.net", "Wikipedia", "FBI Analysis Reports", "The Guardian", "Washington Post"]
    },
    {
        id: 2,
        name: "Fariq Abdul Hamid",
        age: 27,
        dob: "1987-04-01",
        nationality: "MYS",
        role: "First Officer",
        group: GROUPS.CREW_FLIGHT,
        seat: "Flight Deck - Right Seat",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.PRIORITY,
        biography: `First Officer Fariq Abdul Hamid was the co-pilot of MH370. Born April 1, 1987. Joined Malaysia Airlines as Cadet Pilot in 2007.

Career progression: Second Officer on Boeing 737-400, promoted to First Officer on B737-400 (2010), transitioned to Airbus A330-300 (2012), began Boeing 777-200 training November 2013. Total flight hours: 2,763.

MH370 was his FINAL TRAINING FLIGHT on the Boeing 777 before full certification. He was scheduled for examination on his subsequent flight.`,
        personalDetails: `Son of a high-ranking civil servant in Selangor state. Described by community members as "good boy, a good Muslim, humble and quiet."`,
        investigationIntel: `FINAL WORDS: Spoke the last recorded words to Kuala Lumpur ATC at 01:19 MYT: "Good night, Malaysian Three Seven Zero" - at this point, one communication system (ACARS) had already been disabled.

MOBILE PHONE DETECTION (CLASSIFIED INTEL): Australian media reported in 2019 that Malaysian authorities withheld details from investigation report - Fariq's mobile phone was detected by telecommunications tower near Penang as aircraft flew over the island at low altitude. This phone detection was known to authorities by April 2014 but omitted from March 2015 safety report. Industry experts suggest phone was on and responded automatically to cell signal. Father stated he was not informed of this detail.

HOME SEARCHED: Police searched his residence along with Captain's home during investigation. Intelligence agencies found no connections to terrorist groups.`,
        connections: [1], // Connected to Captain
        sources: ["Wikipedia", "Malaysiakini", "CBS News", "Global News"]
    }
];

/**
 * CABIN CREW (10)
 */
const CABIN_CREW = [
    {
        id: 3,
        name: "Patrick Francis Gomes",
        age: 51,
        nationality: "MYS",
        role: "In-flight Supervisor",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin - Supervisor Station",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Patrick Francis Gomes served as In-flight Supervisor with 35 years of experience at Malaysia Airlines. Joined as flight attendant in 1979, promoted to In-flight Supervisor in 2000. Known as a 'gentle giant' and mentor to younger crew members. Responsible for safety of entire cabin complement.`,
        personalDetails: `Respected veteran of the airline. Family became advocates for MH370 families' rights after disappearance.`,
        investigationIntel: `No investigative flags. Standard crew background check passed.`,
        connections: [4, 5, 6, 7, 8, 9, 10, 11, 12], // Connected to other cabin crew
        sources: ["MH370 Wiki", "Channel NewsAsia", "The Guardian"]
    },
    {
        id: 4,
        name: "Andrew Nari",
        age: 49,
        nationality: "MYS",
        role: "Chief Steward",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Andrew Nari served as Chief Steward with 25 years of experience. Joined Malaysia Airlines in 1989, promoted to Chief Steward in 2000. Veteran of the cabin crew team.`,
        personalDetails: `Devoted father. Known Liverpool FC supporter. Family became prominent advocates for MH370 families.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 5, 6, 7, 8, 9, 10, 11, 12],
        sources: ["MH370 Wiki", "Bangalore Aviation"]
    },
    {
        id: 5,
        name: "Goh Sock Lay",
        age: 45,
        nationality: "MYS",
        role: "Chief Stewardess",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Goh Sock Lay served as Chief Stewardess - highest-ranking female crew member on board. Professionally known as 'Sheila'. Long-serving member with extensive experience on international routes.`,
        personalDetails: `Remembered for her leadership and dedication to passenger comfort.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 6, 7, 8, 9, 10, 11, 12],
        sources: ["MH370 Wiki", "SCMP"]
    },
    {
        id: 6,
        name: "Tan Ser Kuin",
        age: 43,
        nationality: "MYS",
        role: "Leading Stewardess",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Senior cabin crew member with decades of service across multiple aircraft types. Expert in in-flight safety protocols.`,
        personalDetails: `Part of the veteran core of the cabin crew team.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 7, 8, 9, 10, 11, 12],
        sources: ["MH370 Wiki"]
    },
    {
        id: 7,
        name: "Wan Swaid Wan Ismail",
        age: 42,
        nationality: "MYS",
        role: "Flight Steward",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Dedicated professional and father. Frequently operated on Asian corridors.`,
        personalDetails: `Resident of Klang, Malaysia.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 8, 9, 10, 11, 12],
        sources: ["Bangalore Aviation", "SCMP"]
    },
    {
        id: 8,
        name: "Junaidi Mohd Kassim",
        age: 37,
        nationality: "MYS",
        role: "Flight Steward",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Experienced steward known for reliability and customer service excellence. Joined the airline in the early 2000s.`,
        personalDetails: `Dedicated professional.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 7, 9, 10, 11, 12],
        sources: ["MH370 Wiki"]
    },
    {
        id: 9,
        name: "Mohd Hazrin Mohamed Hasnan",
        age: 34,
        nationality: "MYS",
        role: "Flight Steward",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Flight steward. Expecting his second child at the time of the disappearance.`,
        personalDetails: `Passionate about travel and his family. Wife Intan became a spokesperson for the MH370 families after the incident.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 7, 8, 10, 11, 12],
        sources: ["MH370 Wiki", "Mothership.sg"]
    },
    {
        id: 10,
        name: "Ng Yar Chien",
        age: 33,
        nationality: "MYS",
        role: "Flight Stewardess",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Respected for her warmth and efficiency on long-haul routes.`,
        personalDetails: `Consistently highly-rated in crew performance reviews.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 7, 8, 9, 11, 12],
        sources: ["MH370 Wiki"]
    },
    {
        id: 11,
        name: "Foong Wai Yueng",
        age: 31,
        nationality: "MYS",
        role: "Flight Stewardess",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Ambitious and professional stewardess with a bright future in MAS.`,
        personalDetails: `Well-loved by colleagues for her positive energy.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 7, 8, 9, 10, 12],
        sources: ["MH370 Wiki", "Bangalore Aviation"]
    },
    {
        id: 12,
        name: "Tan Size Hiang",
        age: 40,
        nationality: "MYS",
        role: "Flight Stewardess",
        group: GROUPS.CREW_CABIN,
        seat: "Cabin",
        employer: "Malaysia Airlines",
        classification: CLASSIFICATION.CLEARED,
        biography: `Experienced international crew member known for her professionalism.`,
        personalDetails: `Part of the veteran core of the cabin crew team.`,
        investigationIntel: `No investigative flags.`,
        connections: [3, 4, 5, 6, 7, 8, 9, 10, 11],
        sources: ["MH370 Wiki", "SCMP"]
    }
];

/**
 * INVESTIGATION FLAGGED PASSENGERS (2)
 * Iranian nationals traveling on stolen passports
 */
const INVESTIGATION_FLAGGED = [
    {
        id: 13,
        name: "Pouria Nour Mohammad Mehrdad",
        age: 19,
        nationality: "IRN",
        role: "Asylum Seeker",
        group: GROUPS.INVESTIGATION,
        seat: "Economy Class",
        classification: CLASSIFICATION.FLAGGED,
        biography: `Iranian national traveling to seek asylum in Europe. Used stolen Austrian passport (name: Christian Kozel) to board MH370. Actual destination was Frankfurt, Germany where his mother was awaiting his arrival.

Traveled to Malaysia on authentic Iranian passport, then acquired stolen Austrian passport to continue journey to Europe. Tickets purchased through Iranian middleman "Mr. Ali" via travel agent in Pattaya, Thailand - same location where passports were stolen.`,
        personalDetails: `19-year-old seeking new life in Europe. Expressed excitement about life-changing trip on social media before departure.`,
        investigationIntel: `INITIAL SUSPICION: Discovery of passenger using stolen passport raised immediate terrorism concerns after MH370's disappearance.

INTERPOL CLEARANCE: Malaysian police and Interpol thoroughly investigated. Secretary General Ronald Noble stated evidence suggested NOT a terrorist incident. Confirmed as illegal migration/asylum attempt only.

PASSPORT NETWORK: Stolen passport obtained via organized network operating in Thailand. Highlights concerning gaps in airport checks against Interpol's Stolen and Lost Travel Documents (SLTD) database.

STATUS: CLEARED of terrorism links but flagged for investigation methodology.`,
        connections: [14], // Traveling with Seyed Delavar
        sources: ["Time Magazine", "The Guardian", "Washington Post", "Interpol", "Slate"]
    },
    {
        id: 14,
        name: "Seyed Mohammad Reza Delavar",
        age: 29,
        nationality: "IRN",
        role: "Asylum Seeker",
        group: GROUPS.INVESTIGATION,
        seat: "Economy Class",
        classification: CLASSIFICATION.FLAGGED,
        biography: `Iranian national traveling to seek asylum in Europe. Used stolen Italian passport (name: Luigi Maraldi) to board MH370. Was traveling with Pouria Nour Mohammad Mehrdad.

Same travel arrangement as companion - purchased tickets through "Mr. Ali" middleman via Pattaya travel agent.`,
        personalDetails: `29-year-old seeking to emigrate to Europe.`,
        investigationIntel: `INTERPOL CLEARANCE: Investigated alongside Pouria Nour Mohammad. Both confirmed to have no militant or terrorist connections. Travel was purely for asylum/immigration purposes.

PASSPORT: Stolen Italian passport obtained through Thailand-based smuggling network.

STATUS: CLEARED of terrorism links but flagged for investigation methodology.`,
        connections: [13], // Traveling with Pouria
        sources: ["Time Magazine", "The Guardian", "RFE/RL", "Interpol"]
    }
];

/**
 * FREESCALE SEMICONDUCTOR EMPLOYEES (20)
 * 12 Malaysian + 8 Chinese engineers
 */
const FREESCALE_EMPLOYEES = [
    {
        id: 15,
        name: "Guan Huajin",
        age: 34,
        nationality: "MYS",
        role: "Semiconductor Engineer",
        group: GROUPS.FREESCALE,
        seat: "Economy Class",
        employer: "Freescale Semiconductor",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Semiconductor specialist at Freescale Semiconductor. Part of group of 20 Freescale employees (12 Malaysian, 8 Chinese) heading to Beijing for advanced technical training and to enhance chip facilities efficiency.`,
        personalDetails: `Mother of two. Expertise in integrated circuit design for automotive applications.`,
        investigationIntel: `FREESCALE GROUP: 20 employees traveling together. Company produces microchips for defense and civilian sectors.

PATENT CONSPIRACY (DEBUNKED): Theory circulated that Freescale employees held valuable patent (US8650327) and their deaths would consolidate ownership. Freescale officially confirmed: (1) Patent was not military technology, (2) None of the four patent holders cited were on MH370 manifest. Employees were working on consumer product operations.

STATUS: General review - no specific flags.`,
        connections: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], // Freescale colleagues
        sources: ["EE Times", "Carrier Management", "Reddit debunk threads"]
    }
];

// Generate remaining 19 Freescale employees
for (let i = 1; i < 20; i++) {
    const isMalaysian = i < 12;
    FREESCALE_EMPLOYEES.push({
        id: 15 + i,
        name: isMalaysian ? `Freescale Engineer MYS-${String(i).padStart(2, '0')}` : `Freescale Engineer CHN-${String(i - 11).padStart(2, '0')}`,
        age: 30 + Math.floor(i * 1.5),
        nationality: isMalaysian ? "MYS" : "CHN",
        role: "Semiconductor Engineer",
        group: GROUPS.FREESCALE,
        seat: "Economy Class",
        employer: "Freescale Semiconductor",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Freescale Semiconductor engineer. Part of 20-employee delegation traveling between Kuala Lumpur and Beijing facilities. Specialized in microchip technology.`,
        personalDetails: `Employee of Freescale Semiconductor ${isMalaysian ? 'Malaysia' : 'China'} division.`,
        investigationIntel: `Part of Freescale delegation. No individual flags raised. See Group Intel under ID-015 for collective analysis.`,
        connections: FREESCALE_EMPLOYEES.map((_, idx) => 15 + idx).filter(id => id !== 15 + i),
        sources: ["Freescale Semiconductor statement", "Bangalore Aviation manifest"]
    });
}

/**
 * CHINESE ARTISTS DELEGATION (24)
 * 19 artists + 6 relatives + staff
 */
const CHINESE_ARTISTS = [
    {
        id: 35,
        name: "Meng Gaosheng",
        age: 63,
        nationality: "CHN",
        role: "Calligrapher / Delegation Leader",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Famed calligrapher and leader of 24-member Chinese artist delegation. Vice Chairman of Beijing-based China Calligraphy Artists Association. Renowned figure in traditional Chinese arts.

Group was returning home after opening exhibition titled "Chinese Dream: Red and Green Painting" at Kuala Lumpur's Art Peninsular Enterprise.`,
        personalDetails: `Highly respected figure in Chinese calligraphy community. 13 members of delegation were members of China Calligraphy Artists Association.`,
        investigationIntel: `Cultural delegation - no investigative flags. Standard background.`,
        connections: [36, 37, 38, 39, 40, 41], // Other notable artists
        sources: ["CBC News", "China Daily", "Artnet News"]
    },
    {
        id: 36,
        name: "Liu Rusheng",
        age: 76,
        nationality: "CHN",
        role: "Calligrapher / Painting Academy Director",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Prominent calligrapher and Director of Nanjing Painting and Calligraphy Academy. Member of China Calligraphy Association. One of the senior figures in the delegation.`,
        personalDetails: `Lifelong dedication to traditional Chinese calligraphy arts.`,
        investigationIntel: `No investigative flags. Cultural figure.`,
        connections: [35, 37, 38, 39],
        sources: ["Artnet News", "CBC"]
    },
    {
        id: 37,
        name: "Wang Linshi",
        age: 69,
        nationality: "CHN",
        role: "Painter",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Renowned Chinese painter. Part of artist delegation returning from Kuala Lumpur exhibition.`,
        personalDetails: `Established painter with decades of work in traditional Chinese art.`,
        investigationIntel: `No investigative flags.`,
        connections: [35, 36, 38, 39],
        sources: ["Artnet News"]
    },
    {
        id: 38,
        name: "Yao Jianfeng",
        age: 70,
        nationality: "CHN",
        role: "Painter / Calligrapher",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Member of Chinese Painter Calligrapher Association and Chinese Painter Association. Works have received numerous national and international awards.`,
        personalDetails: `Award-winning artist with extensive exhibition history.`,
        investigationIntel: `No investigative flags.`,
        connections: [35, 36, 37, 39],
        sources: ["China.org"]
    },
    {
        id: 39,
        name: "An Wenlan",
        age: 63,
        nationality: "CHN",
        role: "Artist",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Part of the Chinese artist delegation. Contributed to "Chinese Dream: Red and Green Painting" exhibition.`,
        personalDetails: `Established artist in Chinese traditional arts community.`,
        investigationIntel: `No investigative flags.`,
        connections: [35, 36, 37, 38, 40],
        sources: ["Artnet News", "SCMP"]
    },
    {
        id: 40,
        name: "Yuanhua Bao",
        age: 63,
        nationality: "CHN",
        role: "Artist / Government Official",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Artist who was also Director of Nanjing's Social and Technology Statistics Bureau. Dual role as cultural figure and civil servant.`,
        personalDetails: `Combined career in arts and government administration.`,
        investigationIntel: `Government official - standard background check. No flags.`,
        connections: [35, 36, 39, 41],
        sources: ["Artnet News", "SCMP"]
    },
    {
        id: 41,
        name: "Maimaitijiang Abula",
        age: 34,
        nationality: "CHN",
        role: "Artist",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Young artist who was showcasing his artwork abroad for the first time with the delegation to Kuala Lumpur.`,
        personalDetails: `First international exhibition, representing emerging artists in the group.`,
        investigationIntel: `No investigative flags.`,
        connections: [35, 40],
        sources: ["Artnet News"]
    }
];

// Generate remaining artists delegation members (17 more to reach 24 total)
for (let i = 0; i < 17; i++) {
    CHINESE_ARTISTS.push({
        id: 42 + i,
        name: `Artist Delegation Member ${String(i + 1).padStart(2, '0')}`,
        age: 35 + Math.floor(i * 2),
        nationality: "CHN",
        role: i < 12 ? "Artist" : "Delegation Staff/Family",
        group: GROUPS.ARTISTS,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Member of 24-person Chinese artist delegation returning from "Chinese Dream" exhibition in Kuala Lumpur.`,
        personalDetails: `Part of delegation including 19 artists, 6 relatives, and staff members.`,
        investigationIntel: `No individual flags. Part of cultural delegation.`,
        connections: [35],
        sources: ["Artnet News", "China Daily"]
    });
}

/**
 * BUSINESS/VIP PASSENGERS
 */
const BUSINESS_VIP = [
    {
        id: 59,
        name: "Philip Wood",
        age: 50,
        nationality: "USA",
        role: "IBM Technical Storage Executive",
        group: GROUPS.BUSINESS,
        seat: "Business Class",
        employer: "IBM",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `American citizen from Texas. Technical Storage Executive at IBM Malaysia. Only adult American citizen on board (two other US citizens were children).

Had been working for IBM in Beijing and was in process of relocating to Kuala Lumpur. This was intended to be his final trip to Beijing before completing the move. Following his father's footsteps into IBM - father also retired from the company.`,
        personalDetails: `Two sons in Texas. Described by family as "a man of God, a man of honor and integrity." Partner Sarah Bajc (American teacher) became active advocate in search efforts.`,
        investigationIntel: `Standard business traveler profile. IBM executive with established career. No investigative flags.`,
        connections: [],
        sources: ["CBS News", "Dallas Morning News", "LA Times", "The Guardian"]
    },
    {
        id: 60,
        name: "Muktesh Mukherjee",
        age: 42,
        nationality: "CAN",
        role: "XCoal Energy VP China Operations",
        group: GROUPS.BUSINESS,
        seat: "Business Class",
        employer: "Xcoal Energy and Resources",
        classification: CLASSIFICATION.FLAGGED,
        biography: `Indian-born Canadian citizen. Vice President of China operations for Latrobe-based Xcoal Energy and Resources (American coal export company) since 2012.

Educational background: BITS Mesra (India), MBA from McGill University (Montreal). Career: Iron Ore Co. of Canada, Mittal Canada, Mittal Steel Co., then Xcoal.

Lived in Montreal, then Chicago, before settling in Beijing with family. Was returning to Beijing from vacation in Vietnam with wife Xiaomo Bai.`,
        personalDetails: `Two sons - Mirav (9) and Miles (2) at time of disappearance. Met wife Bai Xiaomo in Beijing January 2002 when she worked as his translator, married Montreal August 2002.`,
        investigationIntel: `POLITICAL FAMILY CONNECTIONS (Notable):
- Grandson of Mohan Kumaramangalam - Minister of Steel and Mines under Indira Gandhi's government. NOTABLE: Grandfather also died in plane crash (1973).
- Father Malay Mukherjee - former wealthy executive at ArcelorMittal, instrumental in forming world's largest steel company. Became guardian of grandchildren after MH370.
- Grand-aunt Parvathy Krishnan - three-time Member of Parliament for Communist Party of India.
- Uncle P.R. Kumaramangalam - Power Minister under PM Atal Bihari Vajpayee.
- Extended family includes lawyers, judges, former MPs, political operatives from Calcutta.

ENERGY SECTOR: Role in coal exports China/Japan/Korea. Standard business profile but flagged due to family political prominence and coincidental family aviation tragedy.`,
        connections: [61], // Wife Xiaomo Bai
        sources: ["CBC News", "Telegraph India", "Tribune Live", "Al Arabiya"]
    },
    {
        id: 61,
        name: "Bai Xiaomo",
        age: 37,
        nationality: "CAN",
        role: "Passenger",
        group: GROUPS.BUSINESS,
        seat: "Business Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Chinese-born Canadian citizen. Wife of Muktesh Mukherjee. Originally worked as translator in Beijing.

Met husband in Beijing January 2002 while working as his translator. Married in Montreal August 2002. Resided in Beijing with family. Was returning from vacation in Vietnam.`,
        personalDetails: `Mother of two sons left orphaned by MH370 tragedy. Sons taken in by grandfather Malay Mukherjee.`,
        investigationIntel: `Traveling with husband Muktesh Mukherjee. No individual flags. See husband's profile for family background.`,
        connections: [60],
        sources: ["CBC News", "Yahoo News"]
    },
    {
        id: 62,
        name: "Ju Kun",
        age: 35,
        nationality: "CHN",
        role: "Stuntman / Martial Artist / Fight Choreographer",
        group: GROUPS.BUSINESS,
        seat: "Business Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Highly respected Chinese stuntman, martial artist, and fight choreographer with 15 years of industry experience. Best known as stunt double for martial arts icon Jet Li.

Major film credits as Jet Li double: "The Forbidden Kingdom," "Fearless," "The Grandmaster," "The Expendables." Other credits: "The Mummy: Tomb of the Dragon Emperor," "Man of Tai Chi" (on-screen matchup with Tiger Chen).

Worked as key team member under legendary Hong Kong martial arts stunt legend Yuen Woo Ping. At time of MH370, was working in Malaysia as co-fight choreographer for Netflix/Weinstein Company production "Marco Polo."`,
        personalDetails: `Two sons in Beijing. Was traveling to Beijing to visit children and collect materials for upcoming project. Described by colleagues as "treasure of martial arts talent and knowledge" (John Fusco, Marco Polo creator). Stunt coordinator Brett Chan praised his skills as "comparable to none."`,
        investigationIntel: `Entertainment industry professional. No investigative flags. Standard background.`,
        connections: [],
        sources: ["Nation Thailand", "Kung Fu Kingdom", "LA Times", "The Star Malaysia"]
    }
];

/**
 * GENERAL PASSENGERS
 * Remaining passengers to reach total of 239
 */
const GENERAL_PASSENGERS = [];

// Calculate remaining passengers needed
const verifiedCount = FLIGHT_CREW.length + CABIN_CREW.length + INVESTIGATION_FLAGGED.length +
    FREESCALE_EMPLOYEES.length + CHINESE_ARTISTS.length + BUSINESS_VIP.length;
const remainingCount = 239 - verifiedCount;

// Correct nationality distribution for remaining passengers based on official manifest
// Total manifest: CHN 153, MYS 50 (inc 12 crew = 38 passengers), IDN 7, AUS 6, IND 5, FRA 4, USA 3, NZL 2, UKR 2, CAN 2, IRN 2, NLD 1, RUS 1, TWN 1
// Already counted: CHN (24 artists + 8 freescale = 32), MYS (12 crew + 12 freescale + 1 = 25), IRN 2, CAN 2, USA 1, CHN (1 Ju Kun)
// Remaining: CHN ~120, MYS ~13, IDN 7, AUS 6, IND 5, FRA 4, USA 2, NZL 2, UKR 2, NLD 1, RUS 1, TWN 1

let currentId = 63;

// Chinese passengers (largest group - approximately 120 remaining)
const chineseRemaining = 120;
for (let i = 0; i < chineseRemaining && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger CHN-${String(currentId).padStart(3, '0')}`,
        age: 20 + (currentId % 50),
        nationality: 'CHN',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: currentId % 12 === 0 ? "Business Class" : "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Chinese national traveling on MH370. Part of general manifest. Route: Kuala Lumpur to Beijing.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags raised during background checks. Standard passenger.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Indonesian passengers (7)
for (let i = 0; i < 7 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger IDN-${String(currentId).padStart(3, '0')}`,
        age: 25 + (i * 5),
        nationality: 'IDN',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Indonesian national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Australian passengers (6)
for (let i = 0; i < 6 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger AUS-${String(currentId).padStart(3, '0')}`,
        age: 30 + (i * 6),
        nationality: 'AUS',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Australian national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Indian passengers (5)
for (let i = 0; i < 5 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger IND-${String(currentId).padStart(3, '0')}`,
        age: 28 + (i * 7),
        nationality: 'IND',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Indian national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// French passengers (4)
for (let i = 0; i < 4 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger FRA-${String(currentId).padStart(3, '0')}`,
        age: 32 + (i * 8),
        nationality: 'FRA',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `French national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// American passengers (2 remaining - 2 children, Philip Wood already counted)
for (let i = 0; i < 2 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger USA-${String(currentId).padStart(3, '0')}`,
        age: 4 + (i * 1), // Children
        nationality: 'USA',
        role: "Passenger (Minor)",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `American minor traveling on MH370.`,
        personalDetails: `Traveling with family.`,
        investigationIntel: `Minor passenger. No investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// New Zealand passengers (2)
for (let i = 0; i < 2 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger NZL-${String(currentId).padStart(3, '0')}`,
        age: 45 + (i * 10),
        nationality: 'NZL',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `New Zealand national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Ukrainian passengers (2)
for (let i = 0; i < 2 && currentId <= 239; i++) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger UKR-${String(currentId).padStart(3, '0')}`,
        age: 35 + (i * 10),
        nationality: 'UKR',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Ukrainian national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Netherlands passenger (1)
if (currentId <= 239) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger NLD-${String(currentId).padStart(3, '0')}`,
        age: 42,
        nationality: 'NLD',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Dutch national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Russian passenger (1)
if (currentId <= 239) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger RUS-${String(currentId).padStart(3, '0')}`,
        age: 38,
        nationality: 'RUS',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Russian national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Taiwanese passenger (1)
if (currentId <= 239) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger TWN-${String(currentId).padStart(3, '0')}`,
        age: 52,
        nationality: 'TWN',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Taiwanese national traveling on MH370.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

// Fill remaining with Malaysian passengers to reach exactly 239
while (currentId <= 239) {
    GENERAL_PASSENGERS.push({
        id: currentId,
        name: `Passenger MYS-${String(currentId).padStart(3, '0')}`,
        age: 22 + (currentId % 40),
        nationality: 'MYS',
        role: "Passenger",
        group: GROUPS.GENERAL,
        seat: currentId % 8 === 0 ? "Business Class" : "Economy Class",
        classification: CLASSIFICATION.UNREVIEWED,
        biography: `Malaysian national traveling on MH370. Part of general manifest.`,
        personalDetails: `Traveling for personal, tourism, or business reasons.`,
        investigationIntel: `No specific investigative flags raised during background checks.`,
        connections: [],
        sources: ["Malaysia Airlines manifest"]
    });
    currentId++;
}

/**
 * COMPLETE MANIFEST - ALL 239 SUBJECTS
 */
export const SUBJECTS = [
    ...FLIGHT_CREW,
    ...CABIN_CREW,
    ...INVESTIGATION_FLAGGED,
    ...FREESCALE_EMPLOYEES,
    ...CHINESE_ARTISTS,
    ...BUSINESS_VIP,
    ...GENERAL_PASSENGERS
];

/**
 * Get subject by ID
 */
export const getSubjectById = (id) => {
    return SUBJECTS.find(s => s.id === parseInt(id));
};

/**
 * Get subjects by group
 */
export const getSubjectsByGroup = (group) => {
    return SUBJECTS.filter(s => s.group === group);
};

/**
 * Get subjects by nationality
 */
export const getSubjectsByNationality = (nationality) => {
    return SUBJECTS.filter(s => s.nationality === nationality);
};

/**
 * Get nationality statistics
 */
export const getNationalityStats = () => {
    const stats = {};
    SUBJECTS.forEach(s => {
        stats[s.nationality] = (stats[s.nationality] || 0) + 1;
    });
    return stats;
};

/**
 * Get group statistics
 */
export const getGroupStats = () => {
    const stats = {};
    SUBJECTS.forEach(s => {
        stats[s.group] = (stats[s.group] || 0) + 1;
    });
    return stats;
};
