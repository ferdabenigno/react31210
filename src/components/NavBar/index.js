import React from 'react';
import "./styles.css";


const navItems = [
{
    id:1,
    label: "Home",
},
{   
    id:2,
    label: "Actividades",
},
{
    id:3,
    label: "Eventos",
},
{
    id:4,
    label: "Galeria",
},
{
    id:5,
    label: "Reservas",
},
{
    id:6,
    label: "Contacto",
}

];

const NavBar = () => {
    return(
    
        <div className="nav">
          <h1 className="nav-logo">ComplejoDonBosco</h1>
          <div>
            {navItems.map((item) => (
            <a href="/" className="nav-item" key={item.id}>{item.label}</a>
            ))}
          </div>
          

          
        </div>
      
            
    );

};

export default NavBar;