module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			nunitoSans: "'Nunito Sans', 'sans-serif'",
			rubik: "'Rubik', 'sans-serif'",
		},
		extend: {
			colors: {
				bluePrimary: "#004f98",
				lightBlue: "#2d93d5",
				lightBlueSD: "#9bc1e4",
				lightGrey: "#c8c7c9",
				darkGrey: "#8a8381",
				whiteBg: "#ffffff",
				bgBlack: "#1a1a1a",
				cardBg: "#e6ebf1",
				cardBgSecondary: "#f7f7f7",
				whatsapp: "#25d366",
				facebook: "#4267B2",
				instagram: "#FD1D1D",
			},
			margin: {
				sections: "12rem",
			},
			height: {
				card: "300px",
				cardFull: "300px",
				section: "350px",
				cardService: "240px",
			},
			width: {
				card: "370px",
				cardServiceW: "48%",
				cardRD: "300px",
			},
			boxShadow: {
				cardSecondary: "0 5px 10px 0 #bbb",
				cardDetails: "inset 2px 3px 5px #cccc",
			},
			minHeight: {
				card: "300px",
			},
			boxShadow: {
				card: "0 1px 8px 1px #ccc",
				equipo: "0 1px 8px 1px #000",
				header: "0 1px 15px 1px #667766",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
