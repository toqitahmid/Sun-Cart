import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({href, children}) => {

    const pathname =  usePathname();
    const isActive = pathname === href;
    return (
        <Link className={`${isActive? 'border-b-2 border-b-black' : ''}`} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;