import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { links } from '../../data';
const NavBar = () => {
    const currentLocation = useLocation();
    const [Activate, setActivate] = useState('home')
    const navigate = useNavigate();
    useEffect(() => {
        links.forEach((item) => { if (currentLocation.pathname.includes(item.path)) setActivate(item.id) })
    }, [])

    return (
        <div >
            <ol className='flex flex-col'>
                {
                    links.map((item) =>
                    (<li key={item.id}>
                        <Link to={item.path} className='cursor-pointer font-normal  '
                            onClick={() => {
                                // navigate(item.path);
                                setActivate(item.id)
                            }}>
                            {Activate === item.id ? "------" : item.title}
                        </Link>
                    </li>)
                    )
                }
            </ol>
        </div>
    )
}

export default NavBar