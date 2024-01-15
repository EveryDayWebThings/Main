export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46'),
	() => import('./nodes/47'),
	() => import('./nodes/48'),
	() => import('./nodes/49'),
	() => import('./nodes/50'),
	() => import('./nodes/51'),
	() => import('./nodes/52'),
	() => import('./nodes/53'),
	() => import('./nodes/54'),
	() => import('./nodes/55'),
	() => import('./nodes/56'),
	() => import('./nodes/57'),
	() => import('./nodes/58'),
	() => import('./nodes/59'),
	() => import('./nodes/60'),
	() => import('./nodes/61'),
	() => import('./nodes/62'),
	() => import('./nodes/63'),
	() => import('./nodes/64'),
	() => import('./nodes/65'),
	() => import('./nodes/66'),
	() => import('./nodes/67'),
	() => import('./nodes/68'),
	() => import('./nodes/69'),
	() => import('./nodes/70'),
	() => import('./nodes/71'),
	() => import('./nodes/72'),
	() => import('./nodes/73'),
	() => import('./nodes/74'),
	() => import('./nodes/75'),
	() => import('./nodes/76'),
	() => import('./nodes/77'),
	() => import('./nodes/78'),
	() => import('./nodes/79'),
	() => import('./nodes/80'),
	() => import('./nodes/81'),
	() => import('./nodes/82')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Aboutus": [3],
		"/AdventureChallenges": [4],
		"/AreaCalculator": [5],
		"/AstronomyTools": [6],
		"/BasicCalculator": [7],
		"/BasicTechSupport": [8],
		"/BasicTranslator": [9],
		"/BudgetCalculator": [10],
		"/CalorieCounter": [11],
		"/CodingQuiz": [12],
		"/ColorPaletteGenerator": [13],
		"/Contactus": [14],
		"/Countdown": [15],
		"/CriticalThinkingExercises": [16],
		"/CurrencyConverter": [17],
		"/DailyBrainTeaser": [18],
		"/DailyFunFact": [19],
		"/DigitalMathQuiz": [20],
		"/DigitalScienceQuiz": [21],
		"/DummyImageGenerator": [22],
		"/FractionCalculator": [23],
		"/GeographyQuiz": [24],
		"/HealthySnackIdeas": [25],
		"/HistoryQuiz": [26],
		"/HolidayCountdownCalendar": [27],
		"/InteractivePeriodicTable": [28],
		"/JokeoftheDay": [29],
		"/MemoryGameChallenge": [30],
		"/More": [31],
		"/MortgageCalculator": [32],
		"/NameGenerator": [33],
		"/PasswordStrengthChecker": [35],
		"/PositiveAffirmations": [36],
		"/PrecentageCalculator": [37],
		"/QrCodeGenerator": [41],
		"/QuickMeditationSession": [42],
		"/QuickPollCreator": [43],
		"/QuizIdeaGenerator": [44],
		"/QuizSheild": [45],
		"/RandomColorGenerator": [46],
		"/RandomNameGenerator": [47],
		"/RandomNumberGenerator": [48],
		"/RandomParagraphGenerator": [49],
		"/RandomQuoteGenerator": [50],
		"/RandomRecipeGenerator": [51],
		"/RandomWordGenerator": [52],
		"/RandomWorkouts": [53],
		"/Reportabug": [54],
		"/ScientificCalculator": [55],
		"/ScreenRuler": [56],
		"/ShakespeareanInsultGenerator": [57],
		"/SpaceNews": [59],
		"/SpaceTriviaChallenge": [60],
		"/SpaceandAstronomyFacts": [58],
		"/SquareRootCalculator": [61],
		"/Stopwatch": [62],
		"/StoryPlotGenerator": [63],
		"/Testhomepage": [64],
		"/TikTacToe": [65],
		"/TimeZoneConverter": [68],
		"/Timer&StopWatch": [67],
		"/Timer": [66],
		"/TipCalculator": [69],
		"/TitleCapitlization": [70],
		"/TravelBudgetPlanner": [71],
		"/TravelSafetyTips": [72],
		"/TypingSpeedTest": [73],
		"/URLShortener": [74],
		"/UsefulExtentions": [75],
		"/VirtualDice": [76],
		"/VolumeCalculator": [77],
		"/Weatherinfo": [78],
		"/WordCounter": [79],
		"/WordFormater": [80],
		"/Worldsslowestloadingwebpage": [81],
		"/Youtubethumbnailtester": [82],
		"/passwordgenerator": [34],
		"/privacypolicy": [39],
		"/privacy": [38],
		"/projects": [40]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';