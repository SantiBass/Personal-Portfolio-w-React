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
     marginRight: "150px"
   }
 }
   
  return ( 

    <>
    {/* links for the navigation bar */}
    <ul style={styles.list}>
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#about" onClick={()=> pageHandler("About")}
        className={currentPage==="About" ? "nav-link active" :"nav-link"}
        >
          About me

        </a>
      </li>
      
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#projects" onClick={()=> pageHandler("Projects")}
        className={currentPage === "Projects" ? "nav-link active" :"nav-link"}
        >
          Projects

        </a>
      </li>
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#contact" onClick={()=> pageHandler("Contact")}
        className={currentPage === "Projects" ? "nav-link active" :"nav-link"}
        >
          Contact

        </a>
      </li>
      <li style={styles.space} className="nav-item">
        <a style={styles.links}
        href="#resume" onClick={()=> pageHandler("Resume")}
        className={currentPage === "Projects" ? "nav-link active" :"nav-link"}
        >
          Resume

        </a>
      </li>
      
    
    </ul>
    
    {/* <div>Navbar</div> */}
    </>
  
  )
}

export default Navbar