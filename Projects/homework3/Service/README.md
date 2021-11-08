# CS 262 Monopoly Webservice

This is the data service application for the 
[CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project),
 which is deployed here:
          
- <https://cs262-monopoly-service.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

- <https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory
and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database server,
user and password are stored as Heroku configuration variables rather than in this 
(public) repo.

We implement this sample service as a separate repo to simplify Heroku integration;
it&rsquo;s easier to auto-deploy a separate repo to Heroku. For your team project&rsquo;s 
data service, configure your Heroku app to auto-deploy from the master/main branch 
of your service repo. See the instructions for how to do this under the 
&ldquo;Deploy&rdquo; tab in your Heroku application&rsquo;s dashboard.
 