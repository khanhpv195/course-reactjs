import React from "react";

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Khanh" }
  }
  componentWillMount() {
    this.setState({ name: "Tuan" })
  }
  render() {
    return <h1>Hello {this.state.name}</h1>;
  }

  componentDidMount() {

  }
  componentDidUpdate() {

  }
}
export default Social;
