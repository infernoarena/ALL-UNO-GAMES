import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedApps } from './components/FeaturedApps';
import { AllApps } from './components/AllApps';
import { Footer } from './components/Footer';

function AnnouncementBar() {
  return (
    <div className="w-full bg-gold-gradient text-background font-bold text-center py-2 px-4 text-sm tracking-wide shadow-sm z-50 relative flex items-center justify-center gap-2 uppercase">
      <Gamepad2 className="w-4 h-4" />
      Welcome to AllUnoGames.site &mdash; India's Best Yono App Store!
      <Gamepad2 className="w-4 h-4" />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col text-white font-sans selection:bg-primary selection:text-background overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <FeaturedApps />
        <AllApps />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Home />
  );
}

export default App;
