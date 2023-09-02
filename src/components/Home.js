import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'



const Home = () => {
    return (
        <div className='Home_div'>
            <ul className='Home_ul'>
                <Link to={'/form'} className='Home_link'><li className='Home_li1'>FORM</li></Link>
                <Link to={'/table'} className='Home_link'><li className='Home_li2'>TABLE</li></Link>

            </ul>

        </div>
    )
}

export default Home
