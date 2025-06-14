import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

function ProjectLayout1() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default ProjectLayout1