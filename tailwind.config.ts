
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					'dark': '#0f0f1a', 
					'darker': '#060611',
					'black': '#030308',
					'purple': '#9b30ff',
					'purple-light': '#bb5eff',
					'green': '#39ff14',
					'green-light': '#7dff66',
					'blue': '#0ea5e9',
					'pink': '#ff2a6d'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 8px 2px rgba(57, 255, 20, 0.2), 0 0 0 0 rgba(57, 255, 20, 0)'
					},
					'50%': { 
						boxShadow: '0 0 12px 5px rgba(57, 255, 20, 0.4), 0 0 10px 7px rgba(57, 255, 20, 0.1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.2)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'slide-right': 'slide-right 0.5s ease-out forwards',
				'spin-slow': 'spin-slow 12s linear infinite'
			},
			fontFamily: {
				'cyber': ['"Orbitron"', 'sans-serif'],
				'body': ['"Inter"', 'sans-serif'],
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
				'cyber-gradient': 'linear-gradient(to right, rgba(57, 255, 20, 0.1), rgba(155, 48, 255, 0.1))',
				'glow-green': 'radial-gradient(circle, rgba(57, 255, 20, 0.2) 0%, rgba(57, 255, 20, 0) 70%)',
				'glow-purple': 'radial-gradient(circle, rgba(155, 48, 255, 0.2) 0%, rgba(155, 48, 255, 0) 70%)',
			},
			boxShadow: {
				'neon-green': '0 0 5px rgba(57, 255, 20, 0.5), 0 0 10px rgba(57, 255, 20, 0.3)',
				'neon-purple': '0 0 5px rgba(155, 48, 255, 0.5), 0 0 10px rgba(155, 48, 255, 0.3)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
