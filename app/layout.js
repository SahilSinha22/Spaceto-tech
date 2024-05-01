import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Upperbar from "@/components/Upperbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space to Tech",
  description: "Space to Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="sm:w-auto md:w-auto w-full">
<Upperbar/>
<Navbar/>
<div className="sm:w-auto  w-full">
{children}
</div>
       
      
<Footer/>
</div>
        </body>
    </html>
  );
}
