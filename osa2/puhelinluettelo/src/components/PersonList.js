const PersonList = ({onClick, personstoShow}) => {

    return (
        <ul>
        {personstoShow.map(person => <li key={person.name}> {person.name} {person.number} <button onClick={() => onClick(person.id, person.name)} >DELETE</button></li>)}
      </ul>
    )
}
export default PersonList