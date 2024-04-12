import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.scss";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import 'react-loading-skeleton/dist/skeleton.css'

const montserrat = Montserrat({ subsets: ["latin"], weight: ['200','300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "MKS frontend Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReactQueryProvider>
          <CartProvider>
            <Header />
            <main>
              {children}
            </main>
            <footer>
              <div className="container--sm">
                <p>MKS sistemas © Todos os direitos reservados</p>
              </div>
            </footer>
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
