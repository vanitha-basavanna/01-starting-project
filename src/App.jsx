import {useState} from "react"
import Header from "./components/Header/Header"
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import CoreConcept from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/Tabbutton";


function App() {
    // first element gives the actual data and the 2nd one gives the function which overrides the topic/variable
    const [selectedTopic, setSelectedTopic] = useState();

    function handleOnSelect(selectButton) {
        setSelectedTopic(selectButton);
        console.log(selectedTopic);
    }

    console.log('APP COMPONENT LOADING')

    let tabContent = <p> please click on the components</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>);
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title}{...concept}>{concept.title}</CoreConcept>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleOnSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleOnSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleOnSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleOnSelect("state")}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
