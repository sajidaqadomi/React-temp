import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';





function Portfolio() {
  const [images,setImages]= useState([]);
  const [activeClass,setActiveClass]=useState(['active','','','','']);
 

  useEffect(() => {
    axios.get("js/data.json").then(res=>{
      setImages(res.data.portfolio);
    })
   
  }, [])

  const image = images.map((item,index)=>{
    return(
      <div className='col-3 portfolio-item text-capitalize' key={index}>
        <img src={item.image} alt={item.image}  />
        <div className="overlay">
          <button className="text-capitalize"> show img</button>
        </div>
      </div>
    )
  })

  return (
    <div className="Portfolio">
        <h2 className="text-capitalize bold text-center">my Portfolio</h2>
        <div className="container">
        <div className="row justify-content-center no-gutters items">
          <div className="col-2 w-100 ">
            <button className={`d-block w-100  ${activeClass[0]}`} data='all' onClick={()=>setActiveClass(['active','','','',''])}>all</button>
          </div>
          <div className="col-2">
            <button className={`d-block w-100  ${activeClass[1]}`} data='html' onClick={()=>setActiveClass(['','active','','',''])}>html</button>
          </div>
          <div className="col-2">
            <button className={`d-block w-100  ${activeClass[2]}`} data='photoshop' onClick={()=>setActiveClass(['','','active','',''])}>photoshop</button>
          </div>
          <div className="col-2">
            <button className={`d-block w-100  ${activeClass[3]}`} data='wordpress' onClick={()=>setActiveClass(['','','','active',''])}>wordpress</button>
          </div>
          <div className="col-2">
            <button className={`d-block w-100  ${activeClass[4]}`} data='mobile' onClick={()=>setActiveClass(['','','','','active'])}>mobile</button>
          </div>
        </div>
        </div>
        
        <div className='row no-gutters '>
           {image}
        </div>
    </div>
  );
}

export default Portfolio;
