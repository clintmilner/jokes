import './App.css';
import Joke from "./Joke";
import {useEffect, useState} from "react";
import gradients from './gradients.json'


const App = () => {
    const [joke, setJoke] = useState('Tap for a joke');
    const [loading, setLoading] = useState(true);
    const [bg, setBg] = useState(gradients[1])

    const loadJoke = async () => {
    const randNum = Math.floor(Math.random() * gradients?.length) + 1
        setLoading(true)
        setBg(gradients[randNum])
        const URL = 'https://icanhazdadjoke.com/'
        const headers = {
            'Accept': 'application/json'
        }
        const response = await fetch(URL, {headers})
        const data = await response.json()

        setJoke(data?.joke)
        setLoading(false)
    }

    useEffect(() => {
        loadJoke()
    },[])

  return (
    <div className="App" style={{
        backgroundImage: `linear-gradient(60deg, ${bg.colors.toString()})`
    }}>
        <Joke joke={joke} loading={loading} onClick={loadJoke} />
    </div>
  );
}

export default App;
