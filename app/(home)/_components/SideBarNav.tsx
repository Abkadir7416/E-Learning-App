"use client";
import { Layout, Mail, Search, Shield } from "lucide-react";
import Image from "next/image";
import path from "path";
import React, { useState } from "react";

const SideBarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Mail,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Shield,
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b z-50">
        <Image
          // className='bg-cyan-200'
          alt="logo"
          src={"/logo.png"}
          width={170}
          height={50}
        />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center 
            p-4 px-6 text-gray-500 
            hover:bg-gray-100 cursor-pointer 
            ${activeIndex==index?'bg-purple-50 text-purple-800':null}
            `}
            onClick={()=>setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarNav;

// import { Layout, Mail, Search, Shield } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// type MenuItem = {
//   id: number;
//   name: string;
//   icon: React.ElementType; // React component type
//   path: string;
// };

// const SideBarNav = () => {
//   const menuList: MenuItem[] = [
//     {
//       id: 1,
//       name: "Browse",
//       icon: Search,
//       path: "/browse",
//     },
//     {
//       id: 2,
//       name: "Dashboard",
//       icon: Layout,
//       path: "/dashboard",
//     },
//     {
//       id: 3,
//       name: "Upgrade",
//       icon: Mail,
//       path: "/upgrade",
//     },
//     {
//       id: 4,
//       name: "Newsletter",
//       icon: Shield,
//       path: "/newsletter",
//     },
//   ];

//   return (
//     <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
//       <div className="p-5 border-b z-50">
//         <Image
//           alt="logo"
//           src={"/logo.png"}
//           width={170}
//           height={50}
//         />
//       </div>
//       <div className="flex flex-col">
//         {menuList.map((item) => (
//           <div key={item.id} className="flex gap-2 items-center p-2 hover:bg-gray-100">
//             {/* Render the icon dynamically */}
//             <item.icon className="text-gray-600 " />
//             <h2 className="text-gray-800 text-sm">{item.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideBarNav;
