import React from 'react';
import CardProps from './data.json';

export const UserCard: React.FC = () => (
    <div>
        <h3 style={{color: "blue"}}>Name</h3>
        <ul>
            <li>Name : { CardProps.name }</li> 
        </ul>
        <h3 style={{color: "blue"}}>Biography</h3>
        <ul>
            <li>Year : { CardProps.biography.year }</li>
            <li>Interest : { CardProps.biography.interest }</li>
            <li>ToDo : { CardProps.biography.ToDo }</li>
            <li>Phone: { CardProps.contact.phone }</li>
            <li>Email: { CardProps.contact.email }</li> 
        </ul>
        <h3 style={{color: "blue"}}>Contact</h3>
        <ul>
            <li>Phone: { CardProps.contact.phone }</li>
            <li>Email: { CardProps.contact.email }</li> 
        </ul>
    </div>
);