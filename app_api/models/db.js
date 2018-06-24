/**
 * Created by kerwi on 6/2/2018.
 */

var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://samsam/Loc8r';

if (process.env.NODE_ENV === 'production'){
    dbURI = 'mongodb://dbuser:password123@ds153179.mlab.com:53179/heroku_75prnx69';
};

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
    console.log('mongoose connection error ' + err);
});
mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnected');
});


// customization so that windows platform will emit sigint event for Node
var readline = require('readline');
if (process.platform==='win32'){
    var r1 = readline.createInterface({
        input: process.stdin,
        ouptput: process.stdout
    });
    r1.on("SIGINT", function(){
        process.emit("SIGINT");
    });
}


// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};


// for nodemon restarts
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid,'SIGUSR2');
    });
})

// for app termination
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

// for heroku app termination
process.on('SIGTERM', function(){
   gracefulShutdown('Heroku app shutdown', function(){
       process.exit(0);
   });
});


require('./locations');
