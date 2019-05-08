// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 
var apiai=require('apiai');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {

   var app1 = apiai("43a3623db4f54a8db91c25e2023805cc");
    	var request = app1.textRequest(session.message.text, {
          sessionId: "c8be547d-c34d-4135-cbc7-9d299c615454"
      });
     
       
      request.on('response', function(response) {
        console.log(response.result.fulfillment.speech);
         session.send(response.result.fulfillment.speech);

      });
       
      request.on('error', function(error) {
          console.log(error);
      });
      request.end();
});
