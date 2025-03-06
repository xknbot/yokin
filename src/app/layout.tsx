
import "@/styles/globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>

        <Header />
        {children}


        <Footer /> 

      </body>
    </html>
  );
}
