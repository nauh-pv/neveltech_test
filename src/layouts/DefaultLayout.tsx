import Header from "@/src/components/Header";
import Footer from "../components/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full flex flex-col relative w-full">
      <Header />
      <main className="content flex-1 w-[75%] mx-auto pt-5" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
