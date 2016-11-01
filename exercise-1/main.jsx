// Main.jsx file

// Create a simple component
    // In your render function...
        // Set variables `name` and `interest`


        // Return div with two paragraphs


// Render your component in the `main` section

// Main.jsx file

// Create a simple component

var MyComponent = React.createClass({
    render:function(){
        var name = "davin";
        var interest = "music";
        return(
            <div>
                <p>Hello, my name is {name}</p>
                <p>I am interested in {interest}</p>
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />, document.querySelector('main'));


