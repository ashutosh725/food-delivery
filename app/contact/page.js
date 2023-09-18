"use client"
import { FaPhoneAlt, } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';
export default function ContactPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const  submitHandler= async (e)=>{
        e.preventDefault();
        if(name===""){
            alert("Name is required")
        }else if(email===""){
            alert("email is required")
        }else if(message===""){
            alert("massage is required")
        }else{
           
            alert("Massage Successfully Sended")
        }
    }
        

       
   

return(
<div className="flex w-full h-full mt-2 justify-center items-center">
    <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden ">
        <div className="flex flex-col space-y-8 justify-between">
            <div>
                <h1 className="font-bold text-4xl tracking-wide"> Contact Us</h1>
                <p className="pt-2 text-cyan-100 text-sm ">Lorem, ispum dolor sit amet consectetur adipisicing elit. Enim alias ipsum dignissimos</p>
            </div>
            <div className='flex flex-col space-y-6'>
                <div className='inline-flex space-x-3 items-center'><FaPhoneAlt className='text-xl text-teal-300'/>
                    <span className="">+91 8769206069</span>
                </div>
                <div className='inline-flex space-x-3 items-center'><FiMail className='text-xl text-teal-300'/>
                    <span className="">ashutosharma50@gmail.com</span>
                </div>
                <div className='inline-flex space-x-3 items-center'><MdLocationOn className='text-xl text-teal-300'/>
                    <span className="">11, Bassi, Jaipur, Raj.</span>
                </div>
            </div>
            <div className='flex space-x-4 text-lg'>
           <a href='#' className=' hover:text-gray-100 hover:bg-teal-500 duration-300 hover:p-2 cursor-pointer inline-flex items-center hover:rounded-full'><FaFacebookF/></a>
           <a href='#' className=' hover:text-gray-100 hover:bg-teal-500 duration-300 hover:p-2 cursor-pointer inline-flex items-center hover:rounded-full'><FaTwitter/></a>
           <a href='#' className=' hover:text-gray-100 hover:bg-teal-500 duration-300 hover:p-2 cursor-pointer inline-flex items-center hover:rounded-full'><FaLinkedinIn/></a>
           <a href='#' className=' hover:text-gray-100 hover:bg-teal-500 duration-300 hover:p-2 cursor-pointer inline-flex items-center hover:rounded-full'><FaInstagram/></a>
            </div>
        </div>
        <div className='relative'>
            <div className='absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div>
            <div className='absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16'></div>
        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 overflow-hidden'>
            <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
                <div>
                    <label className='text-sm'>Your name</label>
                
                    <input type='text' placeholder='Your name' value={name} onChange={(e)=>setName(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                    <label className='text-sm'>Email Address</label>
                
                    <input type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                    <label className='text-sm'>Message</label>
                
                    <textarea placeholder='Message' rows='4' value={message} onChange={(e)=>setMessage(e.target.value)}  className='ring-1  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                </div>
                <button type='submit' className='inline-block self-end bg-cyan-700 text-white fonr-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
            </form>
        </div>
        </div>
    </div>
</div>
)
}
