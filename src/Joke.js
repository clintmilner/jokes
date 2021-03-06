import logo from './logo.svg';

const Joke = ({joke, loading, onClick}) => <div className="joke">
    {loading ? <img width={100} src={logo} className="loading" alt="loading"/> : <p>{joke}</p>}
    <button onClick={onClick}>tell me another one</button>
</div>


export default Joke