import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (    
        <>
            <Header />
            <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
                {children}
            </div>             
            <Footer /> 
        </>
    );
  }
  