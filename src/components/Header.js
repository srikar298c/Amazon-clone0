import React from 'react'
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router"
import {useSelector} from "react-redux"
import{
  ShoppingCartIcon
} from "@heroicons/react/24/outline"
import { selectItems } from '../slices/basketSlice';
function Header() {
  const {session} = useSession();
  if(session){
    return(<span>Loading</span>)
  }
 const router = useRouter();
 const items = useSelector(selectItems)

  return (
    <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <h1 className="text-white text-xs">Sasta</h1>
            <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                onClick={() => router.push("/")}
                src ="https://links.papareact.com/f90"
                width={150}
                height ={40}
                objectFit="contain"
                className ="cursor-pointer"
                />
            </div>
            <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
            <svg  class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            </div>
            <div className="text-white flex iems-center text-xs space-x-6 mx-6 whitespace-nowrap">
              <div onClick={!session ? signIn: signOut} className='cusor-pointer link'>
                {session ? `Hello, ${session.user.name}`:"Sign In"}
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>
            <div className='link' >
              <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& Orders</p>
            </div>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
            <div className='realtive link flex items-center'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg> */}
<ShoppingCartIcon className=' h-8'/>
<p className=' hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
 </div>
 </div>
        </div>

        <div className='flex items-center space-x-3 p-2 pl-6 bg bg-amazon_blue-light text-white text-sm'> 
        <p className="link flex items-center">

        <svg className='h-6 mr-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link"> Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>

        </div>
    </header>


  )
}

export default Header