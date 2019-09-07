const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      posts: [],
      isLoading: true,
      errors: null,
      value:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
  }

    handleChange(event) {        
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('Item recebido do formulário' + this.state.value);
      event.preventDefault();
      this.getPosts();
    }

    getPosts() {
        axios          
          .get(`http://localhost:3000/api/discurssions/${this.state.value}`)          
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
            <form onSubmit={this.handleSubmit}>
              <label>                
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Informe o item de pesquisa'/>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <hr></hr>


          {!isLoading ? (
            posts.map(post => {                            
              return (                
                <div >
                  
                  <strong>{post.data.title}</strong>
                  <p><a href={post.data.url} target="_blank">visualizar postagem</a></p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Carregando..</p>
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
