import { useState } from 'react'
import styles from '../styles/footer.module.scss'
import { FaSpotify, FaFacebook, FaPinterest, FaInstagramSquare, FaYoutube, FaTwitter  } from "react-icons/fa";

export interface DropDownItem{
    name:string,
    link:string
}

export interface DropDownSection {
    title:string, 
    items: DropDownItem[]
}

export default function Footer(){

    const [sections,setSections] = useState([false,false,false,false,false,false,false,false])

    const toggleSection = (index: number) => {
        setSections(prevSections => {
          const updatedSections = [...prevSections];
          updatedSections[index] = !updatedSections[index];
          return updatedSections;
        });
      };

    const dropDownSections = [
        {title:"About Us",open:false,
        items:[
            {name:"Our Company",link:"/"},
            {name:"Our Coffee",link:"/"},
            {name:"Stories and News",link:"/"},
            {name:"Starbucks Archive",link:"/"},
            {name:"Investor Relations",link:"/"},
            {name:"Customer Service",link:"/"},
            {name:"Contact Us",link:"/"}
        ]},
        {title:"Careers",open:false,
        items:[
            {name:"Culture and Values",link:"/"},
            {name:"Inclusion, Diversity, and Equity",link:"/"},
            {name:"College Achievement Plan",link:"/"},
            {name:"Alumni Community",link:"/"},
            {name:"U.S. Careers",link:"/"},
            {name:"International Careers",link:"/"}
        ]},
        {title:"Social Impact",open:false,
        items:[
            {name:"People",link:"/"},
            {name:"Planet",link:"/"},
            {name:"Environmental and Social Impact Reporting",link:"/"}
        ]},
        {title:"For Business Partners",open:false,
        items:[
            {name:"Landlord Support Center",link:"/"},
            {name:"Suppliers",link:"/"},
            {name:"Corporate Gift Card Sales",link:"/"},
            {name:"Office and Foodservice Coffee",link:"/"}
        ]},
        {title:"Order and Pick Up",open:false,
        items:[
            {name:"Order on the App",link:"/"},
            {name:"Order on the Web",link:"/"},
            {name:"Delivery",link:"/"},
            {name:"Order and Pick Up Options",link:"/"},
            {name:"Explore and Find Coffee for Home",link:"/"}
        ]}
    ]


    return (
        <footer className={styles.footer}>
            <div className={styles.categories}>
            {
                dropDownSections.map((dropSection,index) => 
                <div className={`${styles.drop_down_section} ${sections[index] && styles.drop_down_section_open}`}>
                    <button className={styles.drop_down_title} 
                    onClick={() => toggleSection(index) }> {dropSection.title} </button>
                    {dropSection.items.map(dropItem => 
                        <button className={styles.drop_down_item}> {dropItem.name} </button>)
                        }
                </div>)
            }
            </div>
           
           <div className={styles.socials}>
            <button><FaSpotify size={28}/></button>
            
            <button><FaFacebook size={28}/></button>
            
            <button><FaPinterest  size={28}/></button>
            
            <button><FaInstagramSquare size={28}/></button>

            <button><FaYoutube size={28}/></button>

            <button><FaTwitter size={28}/></button>
            
           </div>

           <div>
            <div>Privacy Notice</div>
            <div>Terms of Use</div>
            <div>Do Not Share My Personal Information</div>
            <div>CA Supply Chain Act</div>
            <div>Accessibility</div>
            <div>Cookie Preferences</div>
           </div>
           <div>© 2024 Starbucks Coffee Company. All rights reserved.</div>
        </footer>
    )
}