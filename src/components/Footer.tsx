import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground w-full py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        
        {/* Left Side: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 font-medium text-muted-foreground">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <span className="text-white/10 hidden md:inline">·</span>
          <a href="#" className="hover:text-white transition-colors">How it works</a>
          <span className="text-white/10 hidden md:inline">·</span>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
          <span className="text-white/10 hidden md:inline">·</span>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Side: Contact Email */}
        <a href="mailto:get.aethera@gmail.com" className="text-muted-foreground hover:text-white transition-colors font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10">
          get.aethera@gmail.com
        </a>

      </div>

      {/* Trust Line & Legal */}
      <div className="max-w-[1440px] mx-auto mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-xs text-white/30">
         <div className="flex items-center gap-3">
            <span>Early access & pilots</span>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
         </div>
         
         <div className="flex items-center gap-1">
           © {new Date().getFullYear()} Aethera
         </div>
      </div>
    </footer>
  );
};