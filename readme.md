#Express Exercises

##Hello World

Make a hello world Express program that will display "Hello, world!" at the root URL: /

##Tell the year you were born

Make an express program that will display the year you were born when you report your age in a query parameter. When you type in http://localhost:3000/year?age=32 into the address bar of your browser, for example, it will display You were born in 1984.

##Make a page

Make a page to say hello to visitor and tell the year they were born. Unlike the last problem, the will supply their name and their age within route parameters. The URL will look like: /name/Manoush/age/30, and then it should display to the screen: Hello, Manoush! You were born in 1986.

This time, use handlebars to render this page dynamically - you'll need to have a .hbs file inside of a views subdirectory, and you'll use the render() method of the response object.
