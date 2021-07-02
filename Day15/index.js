// "use strict"; // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
//               //With strict mode, you can not, for example, use undeclared variables.

// const e = React.createElement; // Creates an element

// class LikeButton extends React.Component { //Extending a Component allows us to pass props to a user defined class when a constructor is not present like it is in the App class.

//     constructor(props) {

//         super(props); //So to ensure that the React. Component 's constructor() function gets called, we call super(props) . super(props) is a reference to the parents constructor() function, that's all it is. We have to add super(props) every single time we define a constructor() function inside a class-based component.

//         this.state = { liked: false };
//     }

//     render() {
//         if (this.state.liked) {
//             return "HELLO WORLD!";
//         }

//         return e(

//             "button", //The element we want to render, basically it takes the elements i.e h1,p, and so on
//             { onclick: () => this.setState({ liked: true }) }, //the function or event , it can be empty {} or any function or event can be passed.
//             "Blaze" // inner text , The text we want to display in the element.
//         );
//     }
// }

// const domContainer = document.querySelector("#root");
// ReactDom.render(e(LikeButton) , domContainer);

"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Hello World!";
    }

    return e(
      "button", //  the element we want to render
      { onClick: () => this.setState({ liked: true }) }, // the function or event
      "Click Here" // the inner text
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(LikeButton), domContainer);
