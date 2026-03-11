import Navlink from "./Navlink";
import React from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const navs = navLinks.map((route)=>
                    <Navlink key={route.id} route={route}></Navlink>
                )


const Navbar = () => {
    
const [open, setOpen] = useState(true);
    return (

        <nav className="flex font-semibold justify-between">
   <span className="flex gap-2" onClick={()=>{
    setOpen(!open)
   }}>
    {open ?  <X />  : <Menu />} 
    
    <h3>Logo</h3>


 
    </span>
            <ul className="md:flex hidden">
                {navs}
            </ul>
            <button>Sign In</button>

                <ul className={`md:hidden bg-amber-700 absolute duration-500  left-0 ${open? "top-8" : "-top-full"}`}>
      {navs}  
    </ul>
        </nav>
    );
};

export default Navbar;