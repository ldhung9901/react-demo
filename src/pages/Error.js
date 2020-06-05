import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import { Link } from 'react-router-dom';
export default function Error() {
    return (
       <Hero>  <Banner title="404!" subtitle="page note found">
           <Link to='/' className="btn-primary">return home</Link>
           </Banner> </Hero>
    )
}
