import React, { useEffect, useState } from 'react'
import { navLinks } from '../../../constants'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const currentLocation = useLocation();
    const [Activate, setActivate] = useState('home')
    const navigate = useNavigate();
    useEffect(() => {
        navLinks.forEach((item) => { if (currentLocation.pathname.includes(item.path)) setActivate(item.id) })
    }, [])

    return (
        <div >
            <ol className='flex flex-col'>
                {
                    navLinks.map((item) =>
                    (<li key={item.id}>
                        <div className='_text cursor-pointer'
                            onClick={() => {
                                navigate(item.path);
                                setActivate(item.id)
                            }}>
                            {Activate === item.id ? "------" : item.title}
                        </div>
                    </li>)
                    )
                }
            </ol>
        </div>
    )
}

export default NavBar