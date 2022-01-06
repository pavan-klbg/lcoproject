import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoblock({heading}) {
    return (
        <section className='my-4 py-4 bg-theme'>
            <div className='container'>
                <Heading title={heading}/>
                <div className='row'>
                    <div className='col-8 mx-auto'>
                        <p className='lead text-white mb-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Corporis magnam beatae quidem ratione facere odio. 
                             Esse quas, aspernatur atque, nihil quis accusantium labore rem mollitia dolor nam 
                             officia cum voluptates magnam ex consectetur asperiores aliquam omnis numquam
                              molestias molestiae accusamus necessitatibus eum? 
                            Est in veniam cupiditate modi accusantium vel sint?
                            Assumenda esse voluptas alias? Excepturi soluta sit delectus voluptate,
                              temporibus impedit at consequuntur dolorem voluptatibus blanditiis similique, 
                              esse possimus nemo non saepe amet recusandae inventore officia magnam atque?
                               Maiores aspernatur rem voluptates perferendis aperiam quibusdam voluptatum necessitatibus!
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                               Voluptatem ipsum earum blanditiis maiores, accusamus totam voluptatum praesentium, 
                               ex in facilis voluptas omnis dolores, accusantium dicta laborum laboriosam perspiciatis dolorem fugiat laudantium tenetur? Rerum veniam dolores esse neque fugit,
                                pariatur repellendus minus, tenetur quaerat numquam ratione ad laudantium reiciendis! Aliquam inventore aspernatur maxime dicta maiores magnam reiciendis,
                                mollitia harum illo. Nostrum.
                        </p>

                    </div>
                    <div className='col-4'>
                    <div className="card" > 
                    <img src="https://images.pexels.com/photos/7108590/pexels-photo-7108590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    className="card-img-top" alt="image here"/>
                    <div className="card-body bg-dark">
                        <h5 className="card-title text-white">Click photos</h5>
                        <p className="card-text text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Placeat odit velit libero iure aut.
                             Repudiandae eos odit dolore recusandae ea?Lorem ipsum dolor sit amet, 
                             consectetur adipisicing elit. Temporibus corporis voluptatum accusamus accusantium?
                             
                            </p>
                            
                        <Link to="/" className="btn btn-primary  ">{heading}</Link>
                    
                        </div>
                        </div>

                    </div>

                </div>

            </div>
            
        </section>
    )
}
