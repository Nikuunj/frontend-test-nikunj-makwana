import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DotBackground } from './components/ui/DotBackgroundDemo.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className={"bg-black fixed h-screen w-screen -z-30 overflow-hidden"}>
            <DotBackground />
        </div>
        <App />
    </StrictMode>,
)
