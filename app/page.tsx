import Main from '@/components/Main';
import React from 'react';
import localFont from 'next/font/local';

const softieFont = localFont({src: [
  {path: '../public/fonts/OhnoSoftieDemo-Black.otf',
  weight: '900'}, // black
  {path: '../public/fonts/OhnoSoftieDemo-Bold.otf',
  weight: '700'}, // bold
  {path: '../public/fonts/OhnoSoftieDemo-Light.otf',
  weight: '300'}, // light
  {path: '../public/fonts/OhnoSoftieDemo-Medium.otf',
  weight: '500'}, // medium
  {path: '../public/fonts/OhnoSoftieDemo-Regular.otf',
  weight: '400'}, // normal
], variable: '--font-softie'},
  )

const App = () => {
  
  return (
    <main className="bg-violet flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className={`${softieFont.variable} font-sans`}>
        <div className="z-10 max-w-4xl w-full flex flex-col items-center justify-between gap-8 text-sm text-white lg:flex-row lg:gap-12">     
          <div className="self-start lg:self-center">
            <Main />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
