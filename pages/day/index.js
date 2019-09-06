import Link from "next/link";
const axios = require("axios");

axios.get("https://www.reddit.com/r/javascript.json").then(
  // console.log
  );


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
      
          <div>
          {!isLoading ? (
            posts.map(post => {                            
              return (                
                <div >
                  <strong>{post.data.title}</strong>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>        
        );
      }
}
  

export default () => (
  <div>
    <h1>Postegens</h1>
    <App></App>
  </div>
);
