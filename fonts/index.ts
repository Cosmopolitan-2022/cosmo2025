import localFont from "next/font/local";

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
