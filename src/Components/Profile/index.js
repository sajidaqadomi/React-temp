import React,{useState} from 'react';
import './style.css';



function Profile() {
  const [skills,setSkills]=useState([
    {name:'Bootstrap',percentage:100},
    {name:'CSS3',percentage:70},
    {name:'photoshop',percentage:80}
  ]);
  const skill=skills.map((item,index)=>{
    return(
      <div className="skills-item" key={index}>
              <span>{item.name}</span>
              <div className="progress">
              <div className="progress-bar " role="progressbar"  aria-valuenow="100" style={{width: `${item.percentage}%`}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              </div>

    )

  })
  return (
    <div className="Profile py-md-5 py-sm-3 text-capitalize">
       <div className='container'>
         <div className="row justify-content-between">
           <div className='col-md-4 profile-sec'>
             <h2 className="mb-md-3 profile-titel">my profile</h2>
           <ul className="list-group list-group-flush">
  <li className="list-group-item  align-items-center">
    <span className="d-inline-block w-25">name</span>
    <span className="badge d-inline-block ">sajida qadomi</span>
  </li>
  <li className="list-group-item  align-items-center">
    <span className="d-inline-block w-25">birthday</span>
    <span className="badge d-inline-block ">2/3/1993</span>
  </li>
  <li className="list-group-item align-items-center">
    <span className="d-inline-block w-25">address</span>
    <span className="badge d-inline-block ">nablus</span>
  </li>
  <li className="list-group-item  align-items-center">
    <span className="d-inline-block w-25"> phone</span>
    <span className="badge d-inline-block ">02453681</span>
  </li>
  <li className="list-group-item align-items-center">
    <span className="d-inline-block w-25">email</span>
    <span className="badge d-inline-block text-lowercase">sara@outlook.com</span>
  </li>
  <li className="list-group-item align-items-center">
    <span className="d-inline-block w-25">web site</span>
    <span className="badge d-inline-block text-lowercase ">www.google.com</span>
  </li>
</ul>
           </div>
           <div className="col-md-6 skills-sec">
             <h2 className="mb-3 skills-titel">some skills</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</p>
              {skill}
           </div>
         </div>
       </div>
    </div>
  );
}

export default Profile;
