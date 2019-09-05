import Link from "next/link";
const axios = require("axios");

axios.get("https://www.reddit.com/r/javascript.json").then(console.log);


class App extends React.Component {
    state = {
      posts: [],
      isLoading: true,
      errors: null
    };

    getPosts() {
        axios
          .get("https://www.reddit.com/r/javascript.json")
          .then(response => {
            this.setState({
              posts: response.data.data.children,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
      componentDidMount() {
        this.getPosts();
      }
    
      render() {
        const { isLoading, posts } = this.state;
        return (
          <React.Fragment>
            <h2>Lista Selecionada</h2>
            <div>
                
              {!isLoading ? (
                posts.map(post => {
                  const { title , subreddit } = post;
                  console.log(post);
                  return (
                   <div>
                      <div>{title}</div>
                      <h2>{subreddit}</h2>
                    </div>
                  );
                })
              ) : (
                <p>Carregando...</p>
              )}
            </div>
          </React.Fragment>
        );
      }
}
  

export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>Aboutsssss</a>
    </Link>
    <App></App>
  </div>
);
