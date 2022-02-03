import SearchBar from "material-ui-search-bar";
import * as React from "react";
import axios from 'axios'
import HomePage from "./HomePage";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button} from "@material-ui/core";

const Url = () => {
  const [url,seturl]=useState()
    const handleSearch=()=>{
        
        console.log(url)
        window.location.href="/result/"+url
        // axios.post('http://localhost:5000/user', {
        //     url: "fh",
        //   })
        //   .then(function (response) {
      
        //     <HomePage></HomePage>
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // axios ({
        //   method:'get',
        //   url: `http://127.0.0.1:5000/db?url=${url}`,
        //   headers: {
        //       "Content-Type": "application/json"
        //   }
        // }).then(result => {
        //   console.log(result.data);
        
        // })
        
    }
    return (
        <div style={{  background: "#3a6186",height:"92.7vh"}}>
          <div style={{fontWeight:"bold",color:"white",fontSize:"170%",marginTop:"5%",marginBottom:"8%",marginLeft:"15%",marginRight:"15%"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div>
        <TextField
          id="filled-textarea"
          placeholder="Placeholder"
          style={{width:"80%",backgroundColor:'white',margin:'auto',display:"block",border:"2px solid black",borderRadius:"10px"}}
          // inputProps={{ maxLength: 1000000 }}
      fullWidth
          variant="filled"
          onChange={(e)=>seturl(e.target.value)}
        />
        <Button
            type="submit"
            size="large"
            variant="contained"
            
            style={{margin:'auto',marginLeft:"45%",marginTop:"2%",height:"5%",color:"white",backgroundColor:"green",fontWeight:"bold"}}
            onClick={()=>handleSearch()}

          >
            SUBMIT
          </Button>
        {/* <SearchBar
        onChange={(e)=>seturl(e.target.value)}
        onRequestSearch={(e)=>handleSearch()}
        style={{
          margin:"auto",maxWidth:"80%",
        }}
      />
      {url} */}

      
        </div>
      </div>
    
      );
}
 
export default Url;
