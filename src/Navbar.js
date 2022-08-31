import {Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function navbar(){

    return <nav className= 'nav' >
        <CustomLink to='/' className='site-title'>VOiiiD</CustomLink>
        <ul>
            <CustomLink to="/about">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 52" width="21" height="18">
                <polygon points="30,0 60,52 0,52" />
            </svg>
            </CustomLink>
            <CustomLink to="/paint">
                <div className="circle">
                </div>
            </CustomLink>
            <CustomLink to="/spiral">
            <div className="square"></div>
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