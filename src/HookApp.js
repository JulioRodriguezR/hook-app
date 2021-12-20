import React from 'react'

const bgrContent = {
    backgroundColor: 'darkgray',
    borderBottom: '10px',
    width: '32%'
};

export const HookApp = () => {
    return (
        <div className='row'>
            <div className='col-4' style={bgrContent}>
                <h1 className='p-3'>Hook App</h1>
            </div>
            <div className='col-8'></div>
        </div>
    )
}
