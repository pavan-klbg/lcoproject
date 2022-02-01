
import React, { Component } from 'react';
import Heading from '../reuseable/Heading';

import Img from 'gatsby-image';



export default class Coursecart extends Component {
    constructor(props){
    super(props)
    this.state={
        courses:this.props.courses.edges,
mycourses:this.props.courses.edges,
    }
}
  render() {
      console.log(this.state.courses)


    return (
        <section className='py-5'>
          <div className='container'>
            <h1> courses failed to load</h1>
              <Heading/>
              <div className='row'>
                  {this.state.mycourses.map(({node})=>{
                      return(
                          <div
                          key={node.id}
                          className='col-11 col-md-6 d-flex mx-auto'
                          
                          >
                              <Img fixed={node.image.fixed}/>
                          </div>
                      )

                  })
                }
            </div>

          </div>
        </section>
    )
  }
}
