"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";




function MobileNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="md:hidden space-x-2 ">
    
    

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger>
         
           <img src="/Frame 30.png" alt="menuIcon" className="w-8 h-8"/>
         
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] text-white bg-[#0C0C0C]">
          <SheetHeader>
            <SheetTitle className="text-white font-[Work_Sans] text-[16px] not-italic font-medium leading-[24px] ">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-2 mt-6">
            <Button
              variant="ghost"
              className="flex items-center text-white gap-3 justify-start"
              asChild
            >
              <a href="/TheStory">
               
                The story
              </a>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3  text-white justify-start"
              asChild
            >
              <a href="#projects">
               
                Projects
              </a>
            </Button>
            <Button
              variant="ghost"
              className="flex text-white items-center gap-3 justify-start"
              asChild
            >
              <a href="https://drive.google.com/file/d/1Q73-NYX79qFhRdmvtgwPXKwZAL8DJRhd/view?usp=drive_link">
               
                Resume
              </a>
            </Button>
            <Button  className="flex items-center gap-2 px-6 bg-[#0072FF] rounded-lg " asChild>
            <a href="#contact">
            
              <span className="  text-white font-[Work_Sans] text-[18px] not-italic font-medium leading-[24px] ">Let’s build</span>
            </a>
          </Button>
         
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
