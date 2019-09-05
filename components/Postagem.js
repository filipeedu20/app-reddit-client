class Postagem extends React.Component {
    state = {
      posts: [],
      isLoading: true,
      errors: null
    };
  
    getPosts() {
      axios
        .get("http://localhost:3000/api/discurssions/java")
        .then(response => {
          this.setState({
            posts: response.data.posts,
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
          <>
          <h1>Ola</h1>
        {/* <React.Fragment>
          <h2>Random Post</h2>
          <div>
            {!isLoading ? (
              posts.map(post => {
                const { _id, title, content } = post;
                return (
                  <div key={_id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment> */}
        </>
      );
    }
  }
  