
import React, { useState } from "react";
import {AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import image from '../img/fr.jpg';


export default function Nav(){
    const links = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Skills', link: '/'},
        {name: 'Contact me', link: '/'},
      ];
      let [open ,setOpen] = useState(false);
    return(
        <div className="shadow-md  w-full top-0 left-0 ">
            <div className="md:flex item-center justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-1xl text-white cursor-pointer flex items-center ">
                    <img src={image}   alt="fr" className="w-6 h-6 rounded-full "/>
                    <div >Hasni Firas</div>
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-10 top-3 cursor-pointer md:hidden">
                   {open ? <AiOutlineClose/> : <AiOutlineMenu/> } 
                </div>
                
                <ul className={`md:flex md:items-center  md:pb-0 pb-9 md:static  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all md:z-auto z-[-1] duration-500 ease-in${!open ? "top-20 absolute":""}`}>
                    {
                       links.map((link)=>
                       ( 
                         <li key ={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                            <a href={link.link} className = "text-white hover:text-slate-700  duration-500 ">{link.name}</a>
                         </li>
                       ))
                    } 
                </ul>
            </div>
        </div>
    )
}