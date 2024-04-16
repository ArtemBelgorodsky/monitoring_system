import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Система ведения информационной системы сбора данных о состоянии легких человека",
  description: "Система предназначена для сбора, анализа и выявления отклонений в результатах спирометрии дыхательной системы человека",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
