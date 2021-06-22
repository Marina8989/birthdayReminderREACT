import React from 'react'

const List = ({people}) => {
    
    return (
        <div>
            {people.map(person => {
                const {id, image, name, age} = person;
                return (
                    <div key={id} className="person">
                       <img src={image} alt={name}/>
                       <h4>{name}</h4>
                       <p>{age} years</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List
