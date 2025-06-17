
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
				cosmic: {
					dark: "#0A0A1F",
					blue: "#00F0FF",
					purple: "#9D00FF",
					pink: "#FF00E6",
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
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'star-wave': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'shooting-star': {
					'0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateX(100vw) translateY(-100vh)', opacity: '0' }
				},
				'warp-speed': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(1.2)', opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'star-wave': 'star-wave 3s ease-in-out infinite',
				'shooting-star': 'shooting-star 2s ease-out forwards',
				'warp-speed': 'warp-speed 0.3s ease-out forwards'
			},
			backgroundImage: {
				'star-pattern': 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
				'cosmic-gradient': 'linear-gradient(to right, #0A0A1F, #131340)',
				'neon-glow': 'linear-gradient(90deg, rgba(0, 240, 255, 0) 0%, rgba(0, 240, 255, 0.5) 50%, rgba(0, 240, 255, 0) 100%)'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
				'neon-purple': '0 0 5px rgba(157, 0, 255, 0.5), 0 0 20px rgba(157, 0, 255, 0.3)',
				'neon-pink': '0 0 5px rgba(255, 0, 230, 0.5), 0 0 20px rgba(255, 0, 230, 0.3)'
			},
			fontSize: {
				'display-large': ['4.5rem', { lineHeight: '1.1' }],
				'display-medium': ['3.5rem', { lineHeight: '1.2' }]
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			addUtilities({
				'.ltr': {
					direction: 'ltr',
				},
				'.rtl': {
					direction: 'rtl',
				},
			})
		},
	],
} satisfies Config;
