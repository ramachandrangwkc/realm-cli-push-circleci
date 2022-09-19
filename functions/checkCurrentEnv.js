exports = function(arg){
  console.log(`The Env Value is ${JSON.stringify( context.environment.values)}}`);
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