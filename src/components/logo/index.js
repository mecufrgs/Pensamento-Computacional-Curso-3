import React from 'react'
import Image from '../image'
import LogoIMG from '../../images/component/logo.svg'

const Logo = () => (
    <div className='logo'>
        <div className='image'>
            <Image src={LogoIMG} alt='Pensamento Computacional' />
        </div>
        <div className='underline-box'>
            <div className='underline'/>
        </div>
        <p className="mainText">Aplicações do Pensamento Computacional para os Anos Finais do Ensino Fundamental</p>
    </div>
)

export default Logo