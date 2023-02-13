import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import '../App.css'

const CustomLink = ({ to, children, ...props }) => {
    const resolved = useResolvedPath(to);
    const isActive = useMatch({ path: resolved.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
};

export default CustomLink;