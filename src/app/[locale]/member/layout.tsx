import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (    
        <>
            <Header />
            <div>
            {children}

            
            </div>
             
            <Footer /> 
        </>
    );
  }
  