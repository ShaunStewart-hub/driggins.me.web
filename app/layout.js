import { GlobalStyle } from "@/styles/globals.css";
import Header from "@/sections/header/header";
import Footer from "@/sections/footer/footer";
// ///////////////////////////////////////////
export const metadata = {
  title: "DRiggins",
  description:
    "Welcome to my profile website! Here, you’ll find a showcase of my diverse expertise in technology, where innovative ideas seamlessly blend with technical precision.",
  icons: {
    icon: "/favicon/favicon.jpg",
  },
};
// ///////////////////////////////////////////
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-cover h-full w-full bg-[#616161] "
    >
      <body>
        <div className="main-layout-div">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
