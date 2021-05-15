import React from "react";

const Filter = ({updateinput,updaterate}) => {
  
  return (
    <div>
      <div className>
        
        <form>
          <input type="text"  placeholder="with title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}>OR</span>
          <select className="with rate" defaultValue={0} onChange={(e)=>updaterate(e.target.value)}>
          <option value ={0} >Search with rate</option>
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </form>
        
      </div>
    </div>
  );
};

export default Filter;