import React from 'react'

export const TaskAddInput = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add a task"/>
            </form>
        </div>
    )
}