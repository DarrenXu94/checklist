import React, { useContext } from 'react'
import { ModeContext } from '../../_stores/ModeContext'

export default function AmountTracker({ amount, setPrice, handleChange }) {
    const contextMode = useContext(ModeContext)
    const componentToRender = () => {
        if (contextMode.modeData == "edit") {
            return <div>
                <form onSubmit={setPrice}>
                    <label>Change remaining balance</label>
                    <br />
                    <input type="text" name="price" onChange={handleChange} value={amount} />
                    <input type="submit" value="Update" />

                </form>
            </div>

        } else {
            return <div>You have ${amount} amount remaining</div>
        }
    }

    return (
        <div style={{ 'marginBottom': "10px" }}>
            {componentToRender()}
        </div>
    )
}
