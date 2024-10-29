import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			blue: '#2b86f3',
  			pink: '#fe9ebe',
  			darkBrown: '#51100b',
  			goldenYellow: '#fdb916',
  			veryDarkGreen: '#273005',
  			green: '#bdd11f',
  			lightGray: '#9bb2c1',
  			cream: '#fdeac7',
  			peach: '#fbb973',
  			orange: '#fd5211',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			jump: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.2)'
  				}
  			},
  			'scale-bounce': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			'scale-bounce-slow': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.07)'
  				}
  			},
  			wave: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'10%': {
  					transform: 'rotate(14deg)'
  				},
  				'20%': {
  					transform: 'rotate(-8deg)'
  				},
  				'30%': {
  					transform: 'rotate(14deg)'
  				},
  				'40%': {
  					transform: 'rotate(-4deg)'
  				},
  				'50%': {
  					transform: 'rotate(10deg)'
  				},
  				'60%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(0deg)'
  				}
  			},
  			moveArrow: {
  				'0%, 100%': {
  					transform: 'translateX(0)'
  				},
  				'50%': {
  					transform: 'translateX(10px)'
  				}
  			},
  			fromTop: {
  				'0%': {
  					transform: 'translateY(-500px) rotate(-20deg) scale(0.5)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			fromBottom: {
  				'0%': {
  					transform: 'translateY(500px) rotate(20deg) scale(0.5)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			fromLeft: {
  				'0%': {
  					transform: 'translateX(-500px) rotate(-30deg) scale(0.5)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			fromRight: {
  				'0%': {
  					transform: 'translateX(500px) rotate(30deg) scale(0.5)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			fromCenter: {
  				'0%': {
  					transform: 'scale(0) rotate(45deg)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1) rotate(0deg)',
  					opacity: '1'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			jump: 'jump 0.5s ease-in-out',
  			'scale-bounce': 'scale-bounce 1.5s ease-in-out infinite',
  			'scale-bounce-slow': 'scale-bounce-slow 1.5s ease-in-out infinite',
  			'move-arrow': 'moveArrow 1s ease-in-out infinite',
  			'shatter-effect': 'shattered 1s ease-in-out forwards',
  			wave: 'wave 2s infinite',
  			'from-top': 'fromTop 1s ease-in-out forwards',
  			'from-bottom': 'fromBottom 1s ease-in-out forwards',
  			'from-left': 'fromLeft 1s ease-in-out forwards',
  			'from-right': 'fromRight 1s ease-in-out forwards',
  			'from-center': 'fromCenter 1s ease-in-out forwards',
  			grid: 'grid 15s linear infinite'
  		},
  		fontFamily: {
  			sundry: ["sundry",'sans-serif'],
  			instrumentSans: ['instrument-sans',"sans serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
