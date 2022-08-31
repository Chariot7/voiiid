import {Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function navbar(){

    return <nav className= 'nav' >
        <CustomLink to='/' className='site-title'>VOiiiD</CustomLink>
        <ul>
            <CustomLink to="/about">
                <svg className='triangle' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 29" width="21" height="18">
                <polygon points="17,2 32,28 2,28" />
            </svg>
            </CustomLink>
            <CustomLink to="/paint">
            <svg className='circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20">
                <circle cx="20" cy="20" r="18" />
            </svg>
            </CustomLink>
            <CustomLink to="/spiral">
            <svg className='square' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                <rect width="20"
                height="20"
                x="0"
                y="0"
                 />
            </svg>

            </CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }){
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedpath.pathname, end: true})
    //Check the above for end:true if there are nested routes
    return (
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props}>{children}</Link>
        </li>
    )
}