import React from 'react'
function Layout(props){
    return (
        <div className="text-center">
            {props.children}
        </div>
    )
}

export default Layout