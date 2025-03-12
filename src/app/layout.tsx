
import "@/styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import 'normalize.css/normalize.css'; // Đường dẫn chuẩn từ node_modules




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
