import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const TraditionalCivilization = localFont({
  src: [
    {
      path: "./Traditional Civilization Demo.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--traditional-civilization",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
