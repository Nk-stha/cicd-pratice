// Color palette for the creative agency theme
export const colors = {
    // Background colors
    lightBg: '#FDFCFB',
    darkBg: '#1a1a2e',

    // Primary pastel gradients (teal to yellow)
    primaryPastelStart: '#88D1D1',
    primaryPastelEnd: '#F7D060',

    // Secondary pastel gradients (pink to orange)
    secondaryPastelStart: '#FF99AC',
    secondaryPastelEnd: '#FFC371',

    // Text colors
    textDarkPrime: '#1a1a2e',
    textLightPrime: '#fdfcfb',

    // Card colors
    cardLight: '#FFFFFF',
    cardDark: '#2a2a4a',
} as const;

export const gradients = {
    tealYellow: 'linear-gradient(135deg, #88D1D1 0%, #F7D060 100%)',
    pinkOrange: 'linear-gradient(135deg, #FF99AC 0%, #FFC371 100%)',
} as const;
