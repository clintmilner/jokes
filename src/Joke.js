import {useEffect, useState} from 'react'
import logo from './logo.svg';

const Joke = () => {
    const [joke, setJoke] = useState('Tap for a joke');
    const [loading, setLoading] = useState(true);

    const loadJoke = async () => {
        setLoading(true)
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
    }, [])


    return <div className="joke">
        {loading ? <img width={100} src={logo} className="loading" alt="loading"/> : <p>{joke}</p>}
        <button onClick={loadJoke}>tell me another one</button>
    </div>
}

export default Joke