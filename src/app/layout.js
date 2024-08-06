import { Nobile, Montserrat, DM_Sans, Alef } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const nobile = Nobile({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const alef = Alef({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Merwas Task",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <body className={nobile.className}>{children}</body> */}
      </body>
    </html>
  );
}
