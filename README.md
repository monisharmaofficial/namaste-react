hLet's learn Namaste React 

--> this is the way how we create a h1 tag in core react 
const heading = React.createElement("h1",{id:"heading"},"Hello From Akshay Saini")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

--> this is how we create the h1 tag using sx in react 
const jsxheading = <h1 id="heading>Hello from Akshay saini</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxheading)

so jsx is not html or js inside the react. jsx looks like the html but it is not html and we can write the element without jsx too using the core react but jsx make the developer life easy to write the code in react so that's why we used it.

--> React Element:
Plain object
Cannot accept props
Static
{Title}
JSX returns React Elements


--> React Component
<!-- Function or class
Can accept props
Reusable & dynamic
<Title />
Components return React Elements

i should remember -->
<!-- <h3 /> → HTML element
{Title} → variable holding JSX
<Title /> → React calls a function
Function returns JSX → UI appears --> -->



// header
//   -logo
//   -navitems
//   body
//     -search
//     -cards
//       -card
//       -card
//       -card
//   footer
//   -copyright
//   -links

to find the image url cludanirary go to swigggy website click any image then open image in new tab then try to change the url where he upload the image                                                                                                                                                                                                                                                                                                                                                                                                                                                                           