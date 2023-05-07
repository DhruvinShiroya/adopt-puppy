import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {hasError : false,redirect :false}
  
  static getDerivedStateFromError() {
  return {hasError : true}
  }

  componentDidCatch(error ,info){
  console.error(error,info);
  }

  componentDidUpdate() {
    if(this.state.hasError){
      setTimeout( () => this.setState({redirect : true}),2000)
    }
  }

  render(){
    if (this.state.redirect){
      return <Navigate to={"/"} />
    }else if(this.state.hasError){
      return (
        <h2>
        There was an error. Jk. {" "}
        <Link to={"/"}> click here </Link> to go back to homepage . owr wait five seconds to auto redirect to homepage
        </h2>
      )
    }else{
      return ( this.props.children )
    }
  }
}


export default ErrorBoundary;
