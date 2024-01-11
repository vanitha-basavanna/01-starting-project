import "./CoreConcepts.css"

// props provides dynamic content to the component and here we have destrctured the props object to image title etc
 export default function CoreConcept({image, description, title}) {
     console.log('CORE Concept COMPONENT LOADING')
    return (
        <li>
            <img src={image} alt={title}/>
            <h1> {title}</h1>
            <p> {description}</p>
        </li>);
}