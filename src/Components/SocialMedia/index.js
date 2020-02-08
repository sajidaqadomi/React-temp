import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';



function SocialMedia() {
   const [social, setSocial] = useState([]);

   useEffect(()=>{
     axios.get('js/data.json').then(res=>{
       
       setSocial(res.data.social)
     })
   },[])
   const socialItem=social.map((item,index)=>{
     return(
       <div className="col-lg-4 social-item" key={index}>
         <i className={`${item.icon} icon`}> </i>
         <h3>{item.title}</h3>
         <p>{item.body}</p>

       </div>
     )
   })
  return (
    <div className="SocialMedia">
      <div className='row no-gutters'>
       {socialItem}
      </div>
         
    </div>
  );
}

export default SocialMedia;
