import { useState } from 'react'
import { ModeProvider } from './ModeContext'

// Custom hook

export default function Mode({ children }) {
    const [modeData, setModeData] = useState("edit")
    return (
        <ModeProvider value={{
            modeData: modeData,
            setModeData: setModeData
        }}>
            <div className="Mode">{children}</div>
        </ModeProvider>
    )
}