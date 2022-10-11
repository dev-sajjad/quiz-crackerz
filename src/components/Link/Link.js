import React from 'react';
import { NavLink } from 'react-router-dom';
import active from './Link.css'

const Link = ({route}) => {
    return (
      <div>
        <li className=" hover:bg-gray-400  md:mr-5 py-1.5 px-2 rounded-md w-2/5 mx-auto md:w-auto">
                <NavLink
                    style={({isActive}) => isActive ? active : undefined}
            className="text-white text-lg hover:text-yellow-300 "
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      </div>
    );
};

export default Link;