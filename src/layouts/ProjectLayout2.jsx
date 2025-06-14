import React from 'react'
import MenuLogin from './MenuLogin'
import { Outlet } from 'react-router-dom'

function ProjectLayout2() {
    return (
        <>
            <MenuLogin />
            <Outlet />
        </>
    )
}

export default ProjectLayout2