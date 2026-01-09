/**
 * MH370 INVESTIGATION PLATFORM
 * SUBJECT DATABASE - CLASSIFIED
 * Royal Intelligence Corps (Kor Risik Diraja - KRR)
 * 
 * Total Subjects: 239 (227 Passengers + 12 Crew)
 * Data Source: Official Malaysia Airlines Manifest
 * 
 * Nationality Breakdown:
 * - Chinese: 153
 * - Malaysian: 50 (38 Passengers + 12 Crew)
 * - Indonesian: 7
 * - Australian: 6
 * - Indian: 5
 * - French: 4
 * - American: 3
 * - New Zealander: 2
 * - Ukrainian: 2
 * - Canadian: 2
 * - Russian: 1
 * - Chinese Taipei: 1
 * - Iranian: 2 (Boarded using stolen Austrian + Italian passports)
 * - Dutch: 1
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
    INVESTIGATION: 'Investigation Flagged',
    PASSENGER: 'Passenger'
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
    TWN: { code: 'TWN', name: 'Chinese Taipei', flag: '🇹🇼' },
    NLD: { code: 'NLD', name: 'Netherlands', flag: '🇳🇱' },
    IND: { code: 'IND', name: 'India', flag: '🇮🇳' },
    IRN: { code: 'IRN', name: 'Iran', flag: '🇮🇷' },
    AUT: { code: 'AUT', name: 'Austria', flag: '🇦🇹' },
    ITA: { code: 'ITA', name: 'Italy', flag: '🇮🇹' }
};

// Helper function to format names from "SURNAME/FIRSTNAME" to "Firstname Surname"
function formatName(rawName) {
    // Remove suffixes like MR, MS, MRS, CHD, MDM, MISS
    let cleaned = rawName.replace(/(MR|MS|MRS|CHD|MDM|MISS)$/i, '');

    const parts = cleaned.split('/');
    if (parts.length === 2) {
        const surname = parts[0].charAt(0) + parts[0].slice(1).toLowerCase();
        const firstname = parts[1].charAt(0) + parts[1].slice(1).toLowerCase();
        return `${firstname} ${surname}`.trim();
    }
    return cleaned.charAt(0) + cleaned.slice(1).toLowerCase();
}

/**
 * FLIGHT CREW (2)
 */
const FLIGHT_CREW = [
    {
        id: 1,
        name: "Zaharie Ahmad Shah",
        age: 53,
        nationality: "MYS",
        role: "Captain / Pilot in Command",
        group: GROUPS.CREW_FLIGHT,
        seat: "Flight Deck - Left Seat",
        classification: CLASSIFICATION.PRIORITY,
        biography: `Captain Zaharie Ahmad Shah was the Pilot in Command of MH370. Born July 31, 1961 in Penang, Malaysia. Joined Malaysia Airlines as a Cadet Pilot in 1981. Total flight hours: 18,423 including 8,659 on Boeing 777. Type Rating Instructor (TRI) and Type Rating Examiner (TRE) for B777.`,
        personalDetails: `Resided in Shah Alam, Selangor. Married with three children. Aviation enthusiast who maintained home flight simulator.`,
        investigationIntel: `HOME FLIGHT SIMULATOR: FBI analysis revealed simulated flight route into southern Indian Ocean. FLIGHT PATH DEVIATION: Aircraft made unexplained detour over Penang.`,
        connections: [2],
        sources: ["Official Manifest", "FBI Analysis Reports"]
    },
    {
        id: 2,
        name: "Fariq Abdul Hamid",
        age: 27,
        nationality: "MYS",
        role: "First Officer",
        group: GROUPS.CREW_FLIGHT,
        seat: "Flight Deck - Right Seat",
        classification: CLASSIFICATION.PRIORITY,
        biography: `First Officer Fariq Abdul Hamid was the co-pilot of MH370. This was his final training flight on Boeing 777 before full certification. Total flight hours: 2,763.`,
        personalDetails: `Son of a civil servant in Selangor state.`,
        investigationIntel: `Spoke last recorded words to ATC: "Good night, Malaysian Three Seven Zero" at 01:19 MYT. Mobile phone detected by tower near Penang.`,
        connections: [1],
        sources: ["Official Manifest", "ATC Records"]
    }
];

/**
 * CABIN CREW (10)
 */
const CABIN_CREW = [
    { id: 3, name: "Patrick Francis Gomes", age: 51, nationality: "MYS", role: "In-flight Supervisor", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "In-flight Supervisor with 35 years of experience at Malaysia Airlines.", personalDetails: "Veteran crew member.", investigationIntel: "No investigative flags.", connections: [4, 5, 6, 7, 8, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 4, name: "Andrew Nari", age: 49, nationality: "MYS", role: "Chief Steward", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Chief Steward with 25 years of experience.", personalDetails: "Family became advocates for MH370 families.", investigationIntel: "No investigative flags.", connections: [3, 5, 6, 7, 8, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 5, name: "Goh Sock Lay", age: 45, nationality: "MYS", role: "Chief Stewardess", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Chief Stewardess responsible for passenger service coordination.", personalDetails: "20+ years with Malaysia Airlines.", investigationIntel: "No investigative flags.", connections: [3, 4, 6, 7, 8, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 6, name: "Tan Ser Kuin", age: 38, nationality: "MYS", role: "Flight Steward", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Experienced flight steward.", personalDetails: "Dedicated professional.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 7, 8, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 7, name: "Wan Swaid Wan Ismail", age: 26, nationality: "MYS", role: "Flight Steward", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Junior flight steward.", personalDetails: "Young professional starting career.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 8, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 8, name: "Junaidi Mohd Kassim", age: 36, nationality: "MYS", role: "Flight Steward", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Flight steward with several years experience.", personalDetails: "Reliable crew member.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 7, 9, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 9, name: "Mohd Hazrin Mohamed Hasnan", age: 34, nationality: "MYS", role: "Flight Steward", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Flight steward expecting second child.", personalDetails: "Wife Intan became spokesperson for MH370 families.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 7, 8, 10, 11, 12], sources: ["Official Manifest"] },
    { id: 10, name: "Ng Yar Chien", age: 33, nationality: "MYS", role: "Flight Stewardess", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Experienced stewardess on long-haul routes.", personalDetails: "Highly-rated in crew reviews.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 7, 8, 9, 11, 12], sources: ["Official Manifest"] },
    { id: 11, name: "Foong Wai Yueng", age: 31, nationality: "MYS", role: "Flight Stewardess", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Professional stewardess.", personalDetails: "Well-loved by colleagues.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 7, 8, 9, 10, 12], sources: ["Official Manifest"] },
    { id: 12, name: "Tan Size Hiang", age: 40, nationality: "MYS", role: "Flight Stewardess", group: GROUPS.CREW_CABIN, seat: "Cabin", classification: CLASSIFICATION.CLEARED, biography: "Experienced international crew member.", personalDetails: "Veteran cabin crew.", investigationIntel: "No investigative flags.", connections: [3, 4, 5, 6, 7, 8, 9, 10, 11], sources: ["Official Manifest"] }
];

/**
 * INVESTIGATION FLAGGED - STOLEN PASSPORT HOLDERS (2)
 * These passengers boarded using stolen Austrian and Italian passports
 * Their true nationality is Iranian
 */
const INVESTIGATION_FLAGGED = [
    {
        id: 13,
        name: "Pouria Nour Mohammad Mehrdad",
        age: 19,
        nationality: "IRN",
        role: "Asylum Seeker (Used Stolen Austrian Passport: Christian Kozel)",
        group: GROUPS.INVESTIGATION,
        seat: "Economy Class",
        classification: CLASSIFICATION.FLAGGED,
        biography: `Iranian national traveling to seek asylum in Europe. Boarded MH370 using stolen Austrian passport in the name of Christian Kozel, age 30. Actual destination was Frankfurt, Germany.`,
        personalDetails: `19-year-old seeking new life in Europe. Mother was awaiting his arrival in Frankfurt.`,
        investigationIntel: `INTERPOL CLEARANCE: Confirmed as illegal migration attempt, NOT terrorism. Passport stolen in Thailand and obtained through organized network.`,
        connections: [14],
        sources: ["Official Manifest", "Interpol", "Time Magazine"]
    },
    {
        id: 14,
        name: "Delavar Seyed Mohammad Reza",
        age: 29,
        nationality: "IRN",
        role: "Asylum Seeker (Used Stolen Italian Passport: Luigi Maraldi)",
        group: GROUPS.INVESTIGATION,
        seat: "Economy Class",
        classification: CLASSIFICATION.FLAGGED,
        biography: `Iranian national traveling to seek asylum in Europe. Boarded MH370 using stolen Italian passport in the name of Luigi Maraldi, age 37. Intended destination was Copenhagen, Denmark.`,
        personalDetails: `29-year-old seeking asylum in Europe.`,
        investigationIntel: `INTERPOL CLEARANCE: Confirmed as illegal migration attempt, NOT terrorism. Both stolen passports obtained via same network in Thailand.`,
        connections: [13],
        sources: ["Official Manifest", "Interpol", "The Guardian"]
    }
];

/**
 * ALL PASSENGERS FROM OFFICIAL MANIFEST
 * Data extracted from passenger-list.json
 */
let passengerIdCounter = 15;

// CHINESE PASSENGERS (153)
const CHINESE_PASSENGERS = [
    "An Wenlan/65", "Bao Yuanhua/63", "Bian Maoqin/67", "Bian Liangjing/27", "Cao Rui/32",
    "Che Junzhang/68", "Chen Jian/58", "Chen Changjun/35", "Chen Yun/57", "Dai Shuling/58",
    "Di Jiabin/36", "Ding Ying/28", "Ding Lijun/43", "Ding Ying/62", "Dong Guowei/48",
    "Dou Yunshan/61", "Du Wen/50", "Feng Dong/21", "Feng Jixin/70", "Fu Baofeng/28",
    "Gan Tao/44", "Gan Fuxiang/49", "Gao Ge/27", "Guan Wenjie/35", "Han Jing/53",
    "Hou Aiqin/45", "Hou Bo/35", "Hu Siwan/3", "Hu Xiaoning/34", "Huang Yi/30",
    "Huang Tianhui/43", "Jia Ping/32", "Jiang Cuiyun/62", "Jiang Xueren/62", "Jiang Ying/27",
    "Jiao Weiwei/32", "Jiao Wenxue/58", "Ju Kun/32", "Kang Xu/34", "Li Yanlin/29",
    "Li Zhi/41", "Li Guohui/56", "Li Hongjing/20", "Li Jie/27", "Li Mingzhong/69",
    "Li Wenbo/29", "Li Yan/31", "Li Yuchen/27", "Li Zhijin/30", "Li Zhixin/35",
    "Li Le/36", "Liang Luyang/60", "Liang Xuyang/30", "Lin Annan/27", "Lin Mingfeng/34",
    "Liu Fengying/65", "Liu Jinpeng/33", "Liu Qiang/40", "Liu Rusheng/76", "Liu Shunchao/46",
    "Liu Zhongfu/72", "Lou Baotang/79", "Lu Jianhua/57", "Lu Xianchu/33", "Lui Ching/45",
    "Luo Wei/29", "Ma Wenzhi/57", "Ma Jun/33", "Maimaitijiang Abula/35", "Mao Tugui/72",
    "Meng Bing/40", "Meng Fanquan/70", "Meng Gaosheng/64", "Ouyang Xin/38", "Shi Xianwen/26",
    "Song Feifei/32", "Song Chunling/60", "Song Kun/25", "Su Qiangguo/71", "Tang Xudong/31",
    "Tang Xuezhu/57", "Tian Junwei/29", "Tian Qingjun/51", "Wang Shouxian/69", "Wang Shu/61",
    "Wang Xianjun/61", "Wang Chunhua/34", "Wang Chunyong/43", "Wang Dan/54", "Wang Haitao/26",
    "Wang Houbin/28", "Wang Linshi/59", "Wang Yonggang/27", "Wang Yonghui/33", "Wang Yongqiang/30",
    "Wang Lijun/49", "Wang Rui/35", "Wang Moheng/2", "Wen Yongsheng/34", "Wen Hao/32",
    "Weng Mei/39", "Xie Liping/51", "Xin Xixi/32", "Xing Fengtao/36", "Xing Qiao/27",
    "Xiong Deming/63", "Xu Chuane/57", "Ya Na/26", "Yan Ling/29", "Yan Peng/29",
    "Yan Xiao/27", "Yang Li/35", "Yang Ailing/60", "Yang Jiabao/26", "Yang Meihua/65",
    "Yang Qingyuan/57", "Yang Xiaoming/59", "Yao Jianfeng/70", "Yao Lifei/31", "Yin Boyan/33",
    "Yin Yuewang/21", "Yuan Jin/63", "Yue Guiju/51", "Yue Wenchao/26", "Zang Lingdi/58",
    "Zhang Chi/58", "Zhang Liqin/43", "Zhang Qi/31", "Zhang Yan/45", "Zhang Hua/43",
    "Zhang Lijuan/61", "Zhang Na/34", "Zhang Siming/71", "Zhang Xiaolei/32", "Zhang Hualian/42",
    "Zhang Jianwu/31", "Zhang Jinquan/72", "Zhang Meng/29", "Zhang Xuewen/61", "Zhang Yan/36",
    "Zhang Yanhui/44", "Zhang Zhonghai/43", "Zhang Shaohua/32", "Zhao Gang/46", "Zhao Qiwei/37",
    "Zhao Yingxin/3", "Zhao Peng/25", "Zhao Zhaofang/73", "Zheng Ruixian/42", "Zhou Feng/56",
    "Zhou Jinling/61", "Zhou Shijie/64", "Zhu Junyan/41"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "CHN", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Chinese national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// MALAYSIAN PASSENGERS (38)
const MALAYSIAN_PASSENGERS = [
    "Bibynazli Mohd Hassim/62", "Chan Huan Peen/46", "Chen Wei/43", "Chew Kar Mooi/31", "Chng Mei/33",
    "Daisy Anne/56", "Dina Mohamed Yunusramli/30", "Guan Huajin/34", "Noorida Hashim/57", "Hue Pui Heng/66",
    "Jee Jing Hang/41", "Koh Tiong Meng/40", "Lee Kah Kin/32", "Lee Sew Chu/55", "Lim Pow Chua/43",
    "Maria Mohamed Yunusramli/52", "Norfadzillah Mat Rahim/39", "Mohd Khairul Amri Selamat/29", "Mohamad Sofuan Ibrahim/33",
    "Muhammad Razahan Zamani/24", "Suhaili Mustafa/31", "Ng May Li/37", "Norliakmar Hamid/33", "Puspanathan Subramaniam/34",
    "Safuan Ramlan/32", "Sim Keng Wei/53", "Tan Teik Hin/32", "Tan Ah Meng/46", "Tan Wei Chew/19",
    "Tan Chong Ling/48", "Tan Sioh Peng/42", "Tee Lin Keong/50", "Teoh Kim Lun/36", "Tong Soon Lee/31",
    "Wan Hock Khoon/42", "Wong Sai Sang/53", "Yap Chee Meng/39", "Muzi Yusop/50"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "MYS", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Malaysian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// INDONESIAN PASSENGERS (7)
const INDONESIAN_PASSENGERS = [
    "Firman Siregar/25", "Ferry Indra Suadaya/42", "Herry Indra Suadaya/35", "Lo Sugianto/47",
    "Indra Suria Tanurisam/57", "Cynthya Tio Vinny/47", "Willy Surijanto Wang/53"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "IDN", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Indonesian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// AUSTRALIAN PASSENGERS (6)
const AUSTRALIAN_PASSENGERS = [
    "Rodney Burrows/59", "Mary Burrows/54", "Gu Naijun/31", "Catherine Lawton/54", "Robert Lawton/58", "Li Yuan/33"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "AUS", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Australian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// INDIAN PASSENGERS (5)
const INDIAN_PASSENGERS = [
    "Chetana Kolekar/55", "Swanand Kolekar/23", "Vinod Kolekar/59", "Chandrika Sharma/51", "Kranti Shirsath/44"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "IND", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Indian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// FRENCH PASSENGERS (4)
const FRENCH_PASSENGERS = [
    "Ambre Wattrelos/14", "Hadrien Wattrelos/17", "Laurence Wattrelos/52", "Zhao Yan/18"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "FRA", role: age < 18 ? "Passenger (Minor)" : "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `French national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// AMERICAN PASSENGERS (3)
const AMERICAN_PASSENGERS = [
    "Nicole Meng/4", "Philip Wood/51", "Yan Zhang/2"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "USA", role: age < 18 ? "Passenger (Minor)" : "Passenger", group: GROUPS.PASSENGER, seat: age >= 18 ? "Business Class" : "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `American national traveling on MH370.${name === "Philip Wood" ? " IBM Technical Storage Executive." : ""}`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// NEW ZEALAND PASSENGERS (2)
const NZ_PASSENGERS = [
    "Ximin Wang/50", "Paul Weeks/39"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "NZL", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `New Zealand national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// UKRAINIAN PASSENGERS (2)
const UKRAINIAN_PASSENGERS = [
    "Oleg Chustrak/45", "Sergii Deineka/45"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "UKR", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Ukrainian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// CANADIAN PASSENGERS (2)
const CANADIAN_PASSENGERS = [
    "Bai Xiaomo/37", "Muktesh Mukherjee/42"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "CAN", role: "Passenger", group: GROUPS.PASSENGER, seat: "Business Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Canadian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// RUSSIAN PASSENGER (1)
const RUSSIAN_PASSENGERS = [
    "Nikolai Brodskii/43"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "RUS", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Russian national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// CHINESE TAIPEI PASSENGER (1)
const TAIWAN_PASSENGERS = [
    "Chuang Hsiuling/45"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "TWN", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Chinese Taipei national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

// DUTCH PASSENGER (1)
const DUTCH_PASSENGERS = [
    "Surti Dahlia/50"
].map(p => {
    const [name, age] = p.split('/');
    return { id: passengerIdCounter++, name, age: parseInt(age), nationality: "NLD", role: "Passenger", group: GROUPS.PASSENGER, seat: "Economy Class", classification: CLASSIFICATION.UNREVIEWED, biography: `Dutch national traveling on MH370.`, personalDetails: `Route: Kuala Lumpur to Beijing.`, investigationIntel: `No specific investigative flags.`, connections: [], sources: ["Official Manifest"] };
});

/**
 * COMPLETE MANIFEST - ALL 239 SUBJECTS
 */
export const SUBJECTS = [
    ...FLIGHT_CREW,
    ...CABIN_CREW,
    ...INVESTIGATION_FLAGGED,
    ...CHINESE_PASSENGERS,
    ...MALAYSIAN_PASSENGERS,
    ...INDONESIAN_PASSENGERS,
    ...AUSTRALIAN_PASSENGERS,
    ...INDIAN_PASSENGERS,
    ...FRENCH_PASSENGERS,
    ...AMERICAN_PASSENGERS,
    ...NZ_PASSENGERS,
    ...UKRAINIAN_PASSENGERS,
    ...CANADIAN_PASSENGERS,
    ...RUSSIAN_PASSENGERS,
    ...TAIWAN_PASSENGERS,
    ...DUTCH_PASSENGERS
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
