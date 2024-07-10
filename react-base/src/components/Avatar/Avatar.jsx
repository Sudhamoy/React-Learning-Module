import React from "react";
import "./Avatar.css";

function Avatar(){

  const avatar=[

    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ]


  //Rendering List/Loop Rendering

  const avatarList=avatar.map((element,index)=>
    (
    <div key={element.id}>
      <img src={element.avatar} alt={element.first_name} /><br/>
      <h2>{`${element.first_name} ${element.last_name}`}</h2>
      <p>{element.email}</p>
    </div>
  ) //returning jsx
)

console.log(typeof avatarList)//object type

//map() function is the only way to looping through/over the jsx elements or components.

  return(
    <div className="Avatar">
      {avatarList}
    </div>
    
  )

}

export default Avatar;