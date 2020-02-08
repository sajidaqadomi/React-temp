import React,{Component} from 'react';
import axios from 'axios';
import './style.css';



class Work extends Component {
  state = {
    works:[]
  }

  componentDidMount(){
    axios.get('js/data.json').then(res=> {
      this.setState({
        works:res.data.works
      })
    })
  }

  render (){
    const {works}=this.state;
    const work=works.map((item,index)=>{
      return(
        <div className='col-lg-3 border border-dark py-5 px-md-4  work-item' key={index}>
          <i className ={`${item.icon_name } d-block mb-sm-2 mb-md-4 work-icon`}></i>
          <h3 className=" work-titel">{item.title} </h3>
          <hr />
          <p className="work-desc mt-sm-2 mt-md-4 ">{item.body}</p>
        
        </div>

      )
    })

    
    return (
      <div className="Work text-capitalize py-md-4 py-sm-2 text-dark">
          <div className="container">
            <h2 className="h1 font-weight-bold  mb-sm-2 mb-md-5 ">my work</h2>
            <div className="row justify-content-between text-center ">
              {work}
  
            </div>
          </div>
      </div>
    );

  }

}

export default Work;
