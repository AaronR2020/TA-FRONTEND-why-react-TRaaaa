import data from './data';

function App() {
  return (
    <>
      <Header />;
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h4> Logo</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <img
      className="hero"
      src="https://images.pexels.com/photos/7334364/pexels-photo-7334364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt=""
    />
  );
}

function Articles() {
  return (
    <>
      <h3> Article</h3>
      <div className="main">
        {data.map((elm) => (
          <Article {...elm} />
        ))}
      </div>
    </>
  );
}
function Article(props) {
  return (
    <div className="rootElm">
      <h6>{props.author} </h6>
      <h4> {props.title}</h4>
      <p>{props.desciption}</p>
      <img src={props.urlToImage} alt="" width="180" />
      <p>{props.publishedAt}</p>
      <button>
        <a href={props.url}> visit website</a>
      </button>
      <p>{props.content.slice(0, 100)}</p>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <h4> Logo</h4>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}
export default App;