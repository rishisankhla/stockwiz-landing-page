import React from 'react';
import {
  Hero,
  Frame,
  JoinButtonsSection,
  WebinarHighlights,
  LearningSection,
  TrustedCompanies
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start gap-16 pt-[20px]">
      <div className="w-full">
        <Hero />
      </div>

      <TrustedCompanies />
       <WebinarHighlights />   
      <JoinButtonsSection /> 
      <Frame /> 
      <LearningSection />
    </div>
  );
}

export default App;