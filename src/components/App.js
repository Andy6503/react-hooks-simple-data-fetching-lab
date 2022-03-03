import react, {useEffect, useState} from "react";

function App(){
    const [dogs, setDogs] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((data) => {
            setDogs(data.message)
        });
    }, []);

    if (!dogs) return <p>Loading dog pictures...</p>;

    return <img src={dogs} alt="Random Dog" />

}

export default App;