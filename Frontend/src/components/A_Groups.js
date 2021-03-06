import React, { Component } from 'react'
import axios from 'axios';
import group from '../../public/group.png';

export default class Groups extends Component {
  constructor(props){
    super(props);

    this.state={
      groups:[]
    };
  }

  componentDidMount(){
    this.retriveGroups();
  }

retriveGroups(){
  axios.get("http://localhost:8000/groups").then(res=>{
    if(res.data.success){
      this.setState({
        groups:res.data.existingGroups
      });
      console.log(this.state.groups)
    }
  });
}




filterData(groups,searchKey){
  const result = groups.filter((group) =>
  group.GName.toLowerCase().includes(searchKey)||
  group.Leader.toLowerCase().includes(searchKey)
  )

  this.setState({groups:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/groups").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingGroups,searchKey)
    }
  });
}



  render() {
    return (
      
      <div>
<div>
          

            </div>
  
        <div className='container'>
          <br/>
        
          <div style={{height:'140px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}><img src={group} class="mx-auto" alt="" width="150" height="100"/>&nbsp;Registered Groups</h2>
                   <br/>
          </div>

        
        <br/>
            <br/>
          {/* {this.state.travelors.map(travelors=>(
            <div>
                <p>{travelors.Name}</p>
                <p>{travelors.NIC}</p>
                <p>{travelors.Phone}</p>
                <p>{travelors.Email}</p>
                <p>{travelors.type}</p>
                <p>{travelors.date}</p>
              </div>
          ))} */}
          <br/>
           <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search for groups by name"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Name of the group</th>
          <th scope='col'>Student 1</th>
          <th scope='col'>Student 2</th>
          <th scope='col'>Student 3</th>
          <th scope='col'>Student 4</th>
          <th scope='col'>Group Leader</th>
          

          </tr>

          </thead>
          <tbody>

          {this.state.groups.map((groups,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>{groups.GName}</td>
              <td>{groups.student1}</td>
              <td>{groups.student2}</td>
              <td>{groups.student3}</td>
              <td>{groups.student4}</td>
              <td>{groups.Leader}</td>
              <td>
             

              </td>


            </tr>
          ))}

          </tbody>

          

      </table>
      </div>

      
      </div>
    )
  }
}
