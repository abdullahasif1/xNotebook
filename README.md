xNotebook

xNotebook is a notes creating web application based on the MERN stack. A user can sign up or login to their account. Users can add notes which will be stored in their account for future use. Users can edit and delete their saved notes. No other user can have access to their notes.

Features used in xNotebook: React router, Context API, Json web-token, Expressjs, Mongoose and MongoDB. Components used in xNotebook are Navigation bar, Alert, Notes Items and Login/Signup. Backend(api) consists of schema models, signup/signin authentication, adding, fetching or updating notes. 

Workflow: When a user signs up, an entry in the database is created with its credentials using the json web token, which adds on an extra security layer in case of security breach. After log in, they can add, edit and delete notes on their account. All the functions and states of the application are managed by the context api. Notes are stored using the schema model(mongoose) in the database(MongoDB) using expressjs.  
