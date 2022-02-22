import React from 'react'
function Navbar({currentPage, pageHandler}) {
  const styles={

    links:{
      color:"black",
      textDecoration:"none"
       },
       list:{
         display:"flex",
         listStyleType:"none"
       },
   space:{
     marginRight: "50px"
   }
 }
   
  return (
    <><ul style={styles.list} className="nav">
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#about" onClick={()=> pageHandler("About")}
        className={currentPage==="About" ? "nav-link active" :"nav-link"}
        >
          About

        </a>
      </li>
      <ul style={styles.list} className="nav">
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#about" onClick={()=> pageHandler("About")}
        className={currentPage==="Projects" ? "nav-link active" :"nav-link"}
        >
          Projects

        </a>
      </li>
      
    </ul>
    </ul>
    
    {/* <div>Navbar</div> */}
    </>
  
  )
}

export default Navbar