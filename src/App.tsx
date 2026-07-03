import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { CustomCursor } from "./components/CustomCursor";
import { Toaster } from "sonner";

function App() {
  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] font-sans selection:bg-primary selection:text-black">
      <CustomCursor />
      <Hero />
      <About />
      <Features />
      
      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-white/5 text-center px-4 bg-black">
        <p className="text-primary/40 text-[10px] md:text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} WIJAYA KUSUMA. DESIGNED &amp; DEVELOPED ENTIRELY BY WIJAYA KUSUMA. ALL RIGHTS RESERVED.
        </p>
      </footer>

      <Toaster 
        theme="dark" 
        position="bottom-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#101010',
            border: '1px solid #212121',
            color: '#DEDBC8'
          }
        }}
      />
    </main>
  );
}

export default App;
