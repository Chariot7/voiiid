import {Link, useMatch, useResolvedPath } from 'react-router-dom';


export default function navbar(){

    return <nav className= 'nav' >
        <Link to='/' className='site-title'>VOiiiD</Link>
        <ul>
            <CustomLink to="/paint">Paint</CustomLink>
            <CustomLink to="/about">Death</CustomLink>
            <CustomLink to="/spiral">Spiral</CustomLink>
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