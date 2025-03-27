import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Montserrat as FontSans2,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSans2 = FontSans2({
  subsets: ["latin"],
  weight: "800",
});
