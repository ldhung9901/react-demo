import React from 'react'


import { Link } from 'react-router-dom';
import Banner from '../Component/Banner/Banner';
import Hero from '../Component/Hero/Hero';
export default function Error() {
    return (
       <Hero>  <Banner title="404!" subtitle="page note found">
           <Link to='/' className="btn-primary">return home</Link>
           </Banner> </Hero>
    )
}
