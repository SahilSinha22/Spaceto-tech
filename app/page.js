
import React from 'react'
import Intro from "@/component/Intro";
import TechStack from '@/component/TechStack';
import Certi from '@/component/Certi';
import Indus from '@/component/Indus';
import Partner from '@/component/partner';
import Chooseus from '@/component/chooseus';
import Banner from '@/component/banner';
import Jouney from '@/component/jouney';
import Experties from '@/component/experties';

const page = () => {
  return (
    < div className=' '>
    <Intro/>
    
<TechStack/>


<Certi/>

<Indus/>
<Partner/>
<Chooseus/>
<Banner/>

<Jouney/>
<Experties/>
    </div>
     
  )
}

export default page