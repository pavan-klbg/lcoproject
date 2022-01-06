import React from 'react'
import {Link } from 'gatsby'
import Heading from './Heading'
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className='container'>
                <Heading title={heading}/>
                <div className='row'>
                    <div className=' col-10 sm-8 mx-auto  text-center'>
                        <p className='lead text-white mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Perferendis, voluptas quaerat! Dolores aspernatur molestiae quidem minima excepturi,
                            maiores possimus rerum temporibus beatae asperiores aliquam qui blanditiis 
                            cupiditate doloremque quod exercitationem corporis suscipit vero nulla cumque 
                            autem corrupti ipsum a.
                            Illum commodi sit minima, officia voluptas vitae dolorem,
                            nemo suscipit aperiam praesentium consequatur recusandae 
                            deleniti optio laboriosam, delectus incidunt nesciunt porro!
                        </p>
                        <Link to="/about"> 

                        <button className="btn btn-warning btn-lg">
                            {heading}
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
            
        </section>
    )
}
