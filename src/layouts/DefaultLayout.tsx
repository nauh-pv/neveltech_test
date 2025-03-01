import Header from "@/src/components/header/Header";
import Footer from "../components/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full flex flex-col relative w-full gap-10">
      <Header />
      <main
        className="content flex-1 mx-auto pt-[66px] flex items-center flex-col"
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
