import React from "react";

const Nav = () => {
    const newSection = ['Starters', 'Pizzas', 'Desserts', 'Drinks']
    return (
        <ul>
            {newSection.map((section)=> (
                <li>
                    <a href={'#'+ section}>{section}</a>
                </li>
            ))}
        </ul>
        
    )
}
export default Nav;