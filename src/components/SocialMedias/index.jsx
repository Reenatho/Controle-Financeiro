import './style.css'
import {BsGithub, BsLinkedin } from 'react-icons/bs'


export default function Menu(){
    return(
        <div className='menu'>
           <a className='social' href='https://github.com/Reenatho'> 
            <BsGithub color='#fff' size={24}/>
           </a>
           <a className='social' href='https://www.linkedin.com/in/renato-antonio-7100981b5/'> 
            <BsLinkedin color='#fff' size={24}/>
           </a>
        </div>
    )
}
