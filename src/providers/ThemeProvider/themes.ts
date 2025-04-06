import type { Theme, ThemeMode, AccentColor, Colors } from './types';

// Base theme configuration shared between light and dark themes
const baseTheme = {
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    xxl: '3rem',    // 48px
  },
  typography: {
    fontFamily: {
      // Updated to match GitHub's font family
      primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",
      secondary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",
      mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      xxl: '1.5rem',   // 24px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      xs: 1.25,
      sm: 1.375,
      md: 1.5,
      lg: 1.625,
      xl: 1.75,
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  animation: {
    duration: {
      faster: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
      slower: '500ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      linear: 'linear',
    },
  },
  borderRadius: {
    xs: '2px',
    sm: '6px',       // Updated to match GitHub's border radius
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
  },
  shadows: {
    xs: '0 1px 2px rgba(31, 35, 40, 0.15)',    // Updated to match GitHub's shadow styles
    sm: '0 1px 3px rgba(31, 35, 40, 0.12)',
    md: '0 3px 6px rgba(31, 35, 40, 0.15)',
    lg: '0 8px 24px rgba(31, 35, 40, 0.12)',
    xl: '0 12px 28px rgba(31, 35, 40, 0.12)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Accent color palette options (aggiornati con i colori GitHub per il 2025)
const accentColors = {
  blue: '#0969da',    // GitHub primary blue
  purple: '#8250df',  // GitHub purple
  pink: '#bf3989',    // GitHub pink
  red: '#cf222e',     // GitHub red
  orange: '#bc4c00',  // GitHub orange
  green: '#2da44e',   // GitHub green
  teal: '#1b7c83',    // GitHub teal
};

// Light theme (GitHub-inspired soft tones per 2025 standards)
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: accentColors.blue,
    secondary: '#57606a',
    surface: '#fffdf7', // Tono panna/crema per light mode come richiesto
    backgroundHover: '#f0ece0', // Hover in toni panna per light mode
    error: accentColors.red,
    warning: accentColors.orange,
    success: accentColors.green,
    info: accentColors.blue,
    
    // Oggetti di tipo nidificato per rispettare l'interfaccia
    background: {
      primary: '#fcf9f2', // Tono panna/crema base per light mode
      secondary: '#f8f6f1', // Tono panna/crema più scuro per light mode
      highlight: '#f5f2e8', // Tono panna/crema per elementi in evidenza
    },
    
    accent: {
      primary: accentColors.blue,
      secondary: '#0550ae', // GitHub secondary blue
    },
    
    gradients: {
      start: accentColors.blue,
      end: '#1f78d1', // Slightly lighter version of GitHub blue
    },
    
    text: {
      primary: '#24292f', // GitHub text
      secondary: '#57606a', // GitHub secondary text
      disabled: '#a1a1aa',
      hint: '#6e7781', // GitHub tertiary text
      link: accentColors.blue,
      muted: '#8b949e', // GitHub muted text
    },
    
    border: {
      default: '#d0d7de', // GitHub border
      input: '#d8dee4', // GitHub input border
      divider: '#d8dee4', // GitHub divider
      primary: accentColors.blue, // Primary border color
      light: '#eaeef2', // Light border
      muted: '#eaeef2', // Muted border per coerenza
    },
    
    components: {
      navbar: '#fcf9f2',
      sidebar: '#f8f6f1',
      card: '#fffdf7',
      input: {
        background: '#fcf9f2',
        placeholder: '#6e7781',
      },
      button: {
        primary: {
          background: accentColors.blue,
          text: '#ffffff',
          hover: '#0550ae',
        },
        secondary: {
          background: '#f6f8fa',
          text: '#24292f',
          hover: '#eaeef2',
        },
        ghost: {
          background: 'transparent',
          text: '#24292f',
          hover: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
  ...baseTheme,
};

// Dark theme (GitHub Dark inspired per 2025 standards)
export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#2f81f7', // GitHub dark mode blue
    secondary: '#768390',
    surface: '#21262d', // GitHub dark mode surface - migliorato per maggiore leggibilità
    backgroundHover: '#2d333b', // GitHub dark hover
    error: '#fa4549', // GitHub dark red
    warning: '#cc6b2c', // GitHub dark warning
    success: '#57ab5a', // GitHub dark success
    info: '#2f81f7', // GitHub dark mode blue
    
    // Oggetti nidificati per rispettare l'interfaccia
    background: {
      primary: '#0d1117', // GitHub dark background
      secondary: '#161b22', // GitHub dark secondary background
      highlight: '#2d333b', // GitHub dark highlight - aumentato contrasto
    },
    
    accent: {
      primary: '#2f81f7', // GitHub dark blue
      secondary: '#409eff', // Lighter blue for dark mode
    },
    
    gradients: {
      start: '#2f81f7',
      end: '#58a6ff',
    },
    
    text: {
      primary: '#e6edf3', // GitHub dark text
      secondary: '#adbac7', // GitHub dark secondary text
      disabled: '#545d68',
      hint: '#768390', // GitHub dark tertiary text
      link: '#58a6ff', // GitHub dark link
      muted: '#636e7b', // GitHub dark muted text
    },
    
    border: {
      default: '#30363d', // GitHub dark border
      input: '#30363d', // GitHub dark input border
      divider: '#21262d', // GitHub dark divider
      primary: '#388bfd', // Primary border color for dark
      light: '#21262d', // Light border for dark theme
      muted: '#21262d', // Aggiunto border muted per coerenza
    },
    
    components: {
      navbar: '#21262d',
      sidebar: '#161b22',
      card: '#22272e',
      input: {
        background: '#21262d',
        placeholder: '#768390',
      },
      button: {
        primary: {
          background: '#238636', // GitHub green button in dark mode
          text: '#ffffff',
          hover: '#2ea043',
        },
        secondary: {
          background: '#21262d', // GitHub dark secondary button
          text: '#c9d1d9',
          hover: '#30363d',
        },
        ghost: {
          background: 'transparent',
          text: '#c9d1d9',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  ...baseTheme,
};

// Function to generate a theme with a specific accent color
export const generateThemeWithAccent = (theme: Theme, accentColor: AccentColor): Theme => {
  const accentValue = accentColors[accentColor];
  const secondaryAccent = theme.mode === 'light' 
    ? lightenColor(accentValue, -10) 
    : lightenColor(accentValue, 10);
  const lightAccent = lightenColor(accentValue, 30);
  
  const newColors: Colors = {
    ...theme.colors,
    // Colore principale aggiornato
    primary: accentValue,
    
    // Accenti aggiornati
    accent: {
      primary: accentValue,
      secondary: secondaryAccent,
    },
    
    // Gradients aggiornati
    gradients: {
      start: accentValue,
      end: secondaryAccent,
    },
    
    // Colori del testo aggiornati
    text: {
      ...theme.colors.text,
      link: theme.mode === 'light' ? accentValue : lightenColor(accentValue, 20),
    },
    
    // Colori dei bordi aggiornati
    border: {
      ...theme.colors.border,
      primary: accentValue,
    },
    
    // Componenti UI aggiornati
    components: {
      ...theme.colors.components,
      button: {
        ...theme.colors.components.button,
        primary: {
          ...theme.colors.components.button.primary,
          background: accentValue,
          hover: theme.mode === 'light' ? secondaryAccent : lightenColor(accentValue, -10),
        },
        secondary: {
          ...theme.colors.components.button.secondary,
          text: theme.mode === 'light' ? accentValue : lightenColor(accentValue, 10),
        },
        ghost: {
          ...theme.colors.components.button.ghost,
          text: theme.mode === 'light' ? accentValue : lightenColor(accentValue, 10),
        },
      },
    },
  };

  return {
    ...theme,
    colors: newColors,
  };
};

// Helper function to lighten or darken a color
function lightenColor(hex: string, percent: number): string {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Lighten or darken
  r = Math.min(255, Math.max(0, r + percent * 2.55));
  g = Math.min(255, Math.max(0, g + percent * 2.55));
  b = Math.min(255, Math.max(0, b + percent * 2.55));

  // Convert back to hex
  return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}
