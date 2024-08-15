import { GlobalStyle } from "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "DRiggins",echo "# driggins.me.web" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/ShaunStewart-hub/driggins.me.web.git
  git push -u origin main
  description:
    "Welcome to my profile website! Here, you’ll find a showcase of my diverse expertise in technology, where innovative ideas seamlessly blend with technical precision.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-cover h-full w-full bg-[#616161] "
    >
      <head>
        <link rel="icon" href="/favicon/favicon.jpg" sizes="any" />
        <meta
          name="viewport"
          content="width=device--width, initial-scale=1.0"
        ></meta>
      </head>

      <body className="max-w-[1900px] relative m-auto mt-0 mb-0 ">
        <Navbar></Navbar>

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
