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
    <main className={'bg-violet min-h-screen p-6'}>
      <div className={`${softieFont.variable} font-sans`}>
            <Main />
        </div>
    </main>
  );
};

export default App;
