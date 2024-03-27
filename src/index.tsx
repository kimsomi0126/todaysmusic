import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RecoilRoot>
    <App />
    <Analytics />
  </RecoilRoot>,
);
