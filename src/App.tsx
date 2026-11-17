/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Features />
        <Gallery />
      </main>
      <Contact />
      <FloatingActions />
    </div>
  );
}
