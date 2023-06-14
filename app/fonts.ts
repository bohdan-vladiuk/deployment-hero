import { Inter, Poppins, Outfit } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "fallback" });

export const poppins = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const outfit = Outfit({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-outfit",
});
