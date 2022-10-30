export const isBrowser = typeof window !== `undefined`;

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}
export const KEYS = {
    THEME: 'theme'
}

export const isTouchScreen = isBrowser && window.matchMedia("(pointer:coarse)").matches;
