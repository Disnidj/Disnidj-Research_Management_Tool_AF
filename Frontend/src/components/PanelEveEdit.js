import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function SupervEveEdit()  {

    const[Groupname, setGroupname] = useState("");
    const[introduction , setintroduction] = useState("");
    const[organization, setorganization] = useState("");
    const[voiceInflection, setvoiceInflection] = useState("");
    const[voiceRate, setvoiceRate] = useState("");
    const[tools, settools] = useState("");
    const[eyeContact, seteyeContact] = useState("");
    const[groupArrange, setgroupArrange] = useState("");
    const[Total, setTotal] = useState("");
  
    
    const id = useParams();
    

  

    const [paneleve] = useState({
        
        Groupname:"",
        introduction:"",
        organization:"",
        voiceInflection:"",
        voiceRate:"",
        tools:"",
        eyeContact:"",
        groupArrange:"",
        Total:""
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("data");
       
        const formData = new FormData();
   
        formData.append("Groupname",Groupname);
        formData.append("introduction",introduction);
        formData.append("organization",organization);
        formData.append("voiceInflection",voiceInflection);
        formData.append("voiceRate",voiceRate); 
        formData.append("tools",tools);
        formData.append("eyeContact",eyeContact);
        formData.append("groupArrange",groupArrange);
        formData.append("Total",Total);
        
        
      
   
        setGroupname("");
        setintroduction("");
        setorganization("");
        setvoiceInflection("");
        setvoiceRate("");
        settools("");
        seteyeContact("");
        setgroupArrange("");
        setTotal("");
        
        
        
        console.log(formData.get('Groupname')); 

      
        paneleve.Groupname=formData.get('Groupname');
        paneleve.introduction=formData.get('introduction');
        paneleve.organization=formData.get('organization');
        paneleve.voiceInflection=formData.get('voiceInflection');
        paneleve.voiceRate=formData.get('voiceRate');
        paneleve.tools=formData.get('tools');
        paneleve.eyeContact=formData.get('eyeContact');
        paneleve.groupArrange=formData.get('groupArrange');
        paneleve.Total=formData.get('Total');
      
            
 
         console.log(paneleve);
      

         console.log(id)
         await axios.put(`http://localhost:8000/stdDetail/update/${id?.id}`,paneleve)
         .then(res=>{
             console.log("return data",res);
            alert("Update Successfull!!");
         })
         .catch(err=>{
             alert("update failed")
             console.log(err);
         });

        }
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/getOneDetail/${id?.id}`)
            .then(res=>{
              console.log("data",res);
              setGroupname(res.data.getOneDetail.Groupname);
              setintroduction(res.data.getOneDetail.introduction);
              setorganization(res.data.getOneDetail.organization);
              setvoiceInflection(res.data.getOneDetail.voiceInflection);
              setvoiceRate(res.data.getOneDetail.voiceRate);
              settools(res.data.getOneDetail.tools);
              seteyeContact(res.data.getOneDetail.eyeContact);
              setgroupArrange(res.data.getOneDetail.groupArrange);
              setTotal(res.data.getOneDetail.Total);
              
                
            
         })
            .catch(err => console.log(err));

           


          
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[]);

    return (
        <div >
        

        <div className="col-md-8 mt-4 mx-auto">
        <h1 style={{backgroundColor:'#000080', color:"white"}}><center>Presentation Evaluation Sheet Edit</center>  </h1>
        <br></br><br></br>

          <button className="btn btn-success" style={{marginLeft:'900px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
            <a href="/panelEveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
          </button>

        <br></br> <br></br> 

        <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>
        
                <div className="form-group">
                <label className="form-label">Group Name</label>
                     <input type="text"
                     className="form-control"
                     name="Groupname"
                     onChange={e => setGroupname(e.target.value)}
                     value={Groupname}
                    
                     />
                 </div>

                 <div className="form-group">
                   <h2>Introduction</h2>
                 <label className="form-label"><li>Aprropriately introduced himself/ herself, the topic to be presented, and clearly 
                   explained objectives of the presentation</li></label>
                     <input type="text"
                     className="form-control"
                     name="introduction"
                     onChange={e => settitle(e.target.value)}
                     value={introduction}  
                     
                   />
                 </div>

                

                 <div className="form-group">
                 <h2>Organization</h2>
                 <label className="form-label"><li> The presentation is organized in a logical manner</li></label>
                     <input type="text"
                     className="form-control"
                     name="organization"
                     onChange={e => setreferences(e.target.value)}
                     value={organization}  
                    />
                 </div>

                 

                 <div className="form-group">
                 <h2>Voice</h2>
                 <label className="form-label"><li> Volume and inflection was effective</li> </label>
                     <input type="text"
                     className="form-control"
                        name="voiceInflection"
                      onChange={e => setMethoDescription(e.target.value)}
                      value={voiceInflection} 
                     
                     />
                 </div>

                 <div className="form-group">
                 <label className="form-label"><li>Rate of speech was appropriate</li></label>
                     <input type="text"
                     className="form-control"
                        name="voiceRate"
                      onChange={e => setappro(e.target.value)}
                      value={voiceRate} 
                     
                     />
                 </div>

                

                 <div className="form-group">
                 <h2>Tools</h2>
                 <label className="form-label"><li> Audiovisual resources, visual aids, and / or handoutd were used appropriatly
                    (not relied upon)</li></label>
                     <input type="text"
                     className="form-control"
                        name="tools"
                      onChange={e => setdataAnalys(e.target.value)}
                      value={tools} 
                     
                     />
                 </div>

                 <div className="form-group">
                 <h2>Audience Contact / Involvement </h2>
                 <label className="form-label"><li> Eye Contact</li></label>
                     <input type="text"
                     className="form-control"
                        name="eyeContact"
                      onChange={e => setconclusionClarity(e.target.value)}
                      value={eyeContact} 
                     
                     />
                 </div>

                 <div className="form-group">
                 <label className="form-label"><li>Arrange inside the group</li> </label>
                     <input type="text"
                     className="form-control"
                        name="groupArrange"
                      onChange={e => setrelevent(e.target.value)}
                      value={groupArrange} 
                     
                     />
                 </div>


                 <div className="form-group">
                 <label className="form-label">Total Mark</label>
                     <input type="text"
                     className="form-control"
                        name="Total"
                      onChange={e => setTotal(e.target.value)}
                      value={Total} 
                     
                     />
                 </div>

                 </form>
                 <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"250px", marginLeft:"370px",backgroundColor:"#0147ab"}} onClick={(e)=>changeOnClick(e)} >
                            <i className="far fa-check-square"></i>
                            &nbsp; Save

                        </button>

                       
        </div>
        </div>

    );
  }
