import React from 'react';
import ReactDOM from 'react-dom';

// creating react class component

class App extends React.Component {
  state = {
    answer: 42
  };

  asyncFucn = () => {
    return Promise.resolve(44);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFucn()
    });
  }

  render() {
    return <h2>Hello Class Component -- {this.state.answer}</h2>;
  }
}

// export default componentName;

ReactDOM.render(<App />, document.getElementById('root'));
