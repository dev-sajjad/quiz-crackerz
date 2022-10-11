import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import Link from "../Link/Link";

const Header = () => {
   const [open, setOpen] = useState(false);

   const routes = [
     { id: 1, name: "Home", path: "/home" },
     { id: 2, name: "Topics", path: "/topics" },
     { id: 3, name: "Statistics", path: "/statistics" },
     { id: 4, name: "Blog", path: "/blogs" },
   ];
   return (
     <nav className="flex justify-between sticky top-0 shadow-lg shadow-slate-400 z-50 items-center bg-stone-800 w-full py-4">
       <div
         onClick={() => setOpen(!open)}
         className=" md:hidden ml-6 text-white"
       >
         {open ? (
           <FontAwesomeIcon
             className="h-8 w-8 hover:text-yellow-300"
             icon={faXmark}
           />
         ) : (
           <FontAwesomeIcon
             className="h-8 w-8 text-yellow-300"
             icon={faBars}
           />
         )}
       </div>
       <div className="text-white font-extrabold text-3xl mx-auto md:ml-10 ">
         <h4>
           Code<span className="text-yellow-300">Book</span>
         </h4>
       </div>

       <ul
         className={`md:flex justify-center text-center bg-stone-800 w-full absolute md:static duration-500 ease-in ${
           open ? "top-14" : "top-[-160px]"
         }`}
       >
         {routes.map((route) => (
           <Link key={route.id} route={route}></Link>
         ))}
       </ul>
     </nav>
   );
};

export default Header;
