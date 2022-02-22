import React,{useState} from 'react'
// import Navbar from '../navbar/Navbar'
import About from './components/about/About'
// import Contact from '../contact/contact'
function Header() {
 const [mainPage, chagePageHandler] = useState("About");
   const inUsepage = () =>{

    switch(mainPage){
        case "About":
            return <About/>;
    }


   }
 return (
    <div>Header</div>
  )
}

export default Header