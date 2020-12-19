import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
        <h1>
            Page about us
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam quibusdam doloribus cupiditate odio minima ab quisquam. Omnis, iusto!</p>
        <button className="btn" onClick={() => history.push('/')}>Back to todos</button>
        </>
    )
}