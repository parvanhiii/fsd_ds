import React from "react";

const Cards=({user,img_url,post,likes,comment})=>{
    return(
    <div>
        <h1>User:{user}</h1>
       <img src={img_url}width={100} height={200}/>
       <h2>Post:{post}</h2>
       <h2>Likes:{likes}</h2>
       <h2>Comments:{comments}</h2>
       
    </div>
    )
}

export default Cards;