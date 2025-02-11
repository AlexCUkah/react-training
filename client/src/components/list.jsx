function List({School}) {
    return (<>
     <h1> Hello </h1>  
    <ul>{ 
    School.map((student, index) => (
        <li key= {index}>
            {student.Name} - {student.Age}</li>
    ))}
    </ul>
</>)
} 

export {List}