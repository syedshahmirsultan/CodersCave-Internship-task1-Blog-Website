import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { DropdownMenuDemo } from './DropDownMenu';
const TopLabel = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <div className='bg-gray-900 flex flex-col gap-y-2 md:flex-row lg:justify-between lg:h-16 w-full h-auto text-center pt-2'>
<a href="https://git.io/typing-svg" className="lg:ml-12 ml-4"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&pause=1000&color=4419FF&random=false&width=431&lines=Welcome+To+Shahmir+Blog+Website+!;Signup+to+Write+your+own+Blog+!;Thank+you+for+visiting+Shahmir+Blog+Website+!" alt="Typing SVG" /></a> 
<div className="flex gap-x-4 mb-2 lg:mr-12  items-center text-left ml-8">
     {user ?(
       <DropdownMenuDemo user={user}/>
     ) 
     :(<div className='gap-x-4 flex'> <LoginLink className='w-[75px] h-[30px] text-[16px] text-center text-gray-100 bg-black border border-purple-700 hover:bg-gray-700'>Sign in</LoginLink>
       <RegisterLink className='w-[75px] h-[30px] text-[16px] text-center text-gray-100 bg-black border border-purple-700 hover:bg-gray-700'>Sign up</RegisterLink>
      </div>)} </div>
        </div>
    );
}

export default TopLabel;
