import React from 'react'
import "../Styles/Section3.scss"
import image1 from "../images/1 (1).svg";
import image2 from "../images/2 (1).svg";
import image3 from "../images/3 (1).svg";
import image4 from "../images/4.svg";
import image5 from "../images/5.svg";
import image6 from "../images/6.svg";
import {motion} from 'framer-motion'

const Section3 = () => {
    return (
        <section class="aist-recognition">
            <h1>Recognized By</h1>
            <motion.div initial={{y:"100%"}} whileInView={{y:0}} transition={{stiffness:100,type:"just"}} class="recognize-images">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
            </motion.div>
        </section>
    )
}

export default Section3
