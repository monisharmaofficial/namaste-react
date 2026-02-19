# Types Of Testing (developers)
-Unit Testing
-Integartion Testing
-End to End Testing (e2e testing)

# Setting Up Testing in our app
-Install React Testing Library

-Install Jest

-Install Babe dependencies while we are using babel along with jest (npm install --save-dev     babel-jest @babel/core @babel/preset-env)

-Configure Babel (carete babel.config.js file) then put this give code inside it
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

-Configure Parcel Config file to disable default babel transpilation (by creating .parcelrc file and paste the code from parcel.com->docs->javascript->babel->default presets)

-next run command npx create-jest select bable, jsdom during process

-install jsDom libaray (only if we are using jest version greater than 28 in this case we have to jest-environment-jsdom separately by command - npm install --save-dev jest-environment-jsdom) 

-install @babel/preset-react library - to make jsx work in test cases then we have to include @babel/preset-react inside our babel config write this -> ["@babel/preset-react",{runtime:"automatic"}],

-Install @testing-library/jest-dom

# if there is a component which takes a props and we want to check is it rendred or not so in that situation whatever we passed in props we make a mocks data for that we will not use the actual data. mocks data is like duplicate or similiar data of the data which comes thruogh the props bcs or testing we can not use the actual data.