import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'react-photo-view/dist/react-photo-view.css';
import { inject } from '@vercel/analytics';
 
inject();

createRoot(document.getElementById('root')!).render(
    <App />
)
