import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedApps } from './components/FeaturedApps';
import { AllApps } from './components/AllApps';
import { Footer } from './components/Footer';
import logoImg from '@assets/IMG-20260722-WA0007_1784866979868.jpg';

function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-white font-bold text-center py-2 px-4 text-sm tracking-wide shadow-sm z-50 relative flex items-center justify-center gap-2 uppercase">
      <Gamepad2 className="w-4 h-4" />
      Welcome to AllYonoGames.site &mdash; India's Best Yono App Store!
      <Gamepad2 className="w-4 h-4" />
    </div>
  );
}

function LogoBanner() {
  return (
    <div className="w-full bg-white border-b border-gray-100 flex justify-center items-center py-4">
      <img
        src={logoImg}
        alt="AllUnoGames"
        className="w-[120px] h-[120px] rounded-full object-cover shadow-md border-4 border-green-100"
      />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col text-foreground font-sans overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <LogoBanner />
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
  return <Home />;
}

export default App;
