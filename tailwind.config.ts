import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DD0031", // Vermelho Angular
          light: "#FF4F5E",   // Vermelho claro para destaques
          dark: "#AA0023",    // Vermelho escuro para textos e botões
        },
        neutral: {
          light: "#F0F0F0",   // Cinza claro para fundos
          dark: "#424242",    // Cinza escuro para textos
        },
        background: "var(--background)", // Usando variável CSS para fundo
        foreground: "var(--foreground)", // Usando variável CSS para texto
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "80ch", // Limita a largura máxima do texto para melhor legibilidade
          },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typography],
};
export default config;
