import React from 'react';
import CartWidget from '../components/CardWidget';
import "../components/NavBar style/styles.css";




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
        <CartWidget />        
        </div>
        
        

    );
};

export default NavBar;