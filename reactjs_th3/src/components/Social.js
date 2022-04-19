import React, { PureComponent } from "react";

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Khanh" };
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.textSocial !== nextProps.textSocial) {
      return true;
    }
    return false;
  }
  componentWillMount() {
    console.log("Render lai");
  }
  render() {
    return <h1>Hello {this.props.textSocial}</h1>;
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ name: "Nam" });
  //   }, 3000);
  // }
  componentDidUpdate() {
    console.log("Da update");
  }
}
export default Social;
