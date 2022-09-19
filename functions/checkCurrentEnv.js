exports = function(arg){
  var secret = context.values.get("FRESHDESK_TOKEN");
  var envValue = context.values.get("CURRENT_ENV");
  console.log(`The Secret and Env Value is ${secret} , ${envValue}`);
  console.log("Build pushed from circle ci")
   switch(context.environment.tag) {
    case "": {
      return "There is no current environment"
    }
    case "development": {
      return "The current environment is development"
    }
    case "testing": {
      return "The current environment is testing"
    }
    case "qa": {
      return "The current environment is qa"
    }
    case "production": {
      return "The current environment is production"
    }
   }
  return {arg: arg};
};