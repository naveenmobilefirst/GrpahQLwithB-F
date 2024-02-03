const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose =require('mongoose')
const cors = require('cors')



// username and password for mlab
// username : naveenmobilefirst
// password : TaBpls9gRThn7INV
mongoose.connect("mongodb+srv://naveenmobilefirst:TaBpls9gRThn7INV@cluster0.sqfv9id.mongodb.net/",{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open',()=>{
    console.log(` connected to database`)
})
const app = express()

// allow cross origin requests
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log(` now listening for requests on port 4000`)
})


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// //import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
