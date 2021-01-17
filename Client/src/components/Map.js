import React from "react";
import {data} from "./DummyDB";
import DropDownElement from "./DropDownElement";

export default function ResultPage(props) {
    let list =  data.map((data) =>{
        return(
            <DropDownElement key={0}name={data.name} city={data.city} sports={data.sports}/>
          )  }       
    )
    return(
       <div>
           {list}
        </div>
        
    );  
}