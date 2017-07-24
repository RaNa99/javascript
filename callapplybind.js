console.log("Example call, apply, bind")

var name={
    firstName:"Ramesh",
    SecondName:"Narasappa"
}


function sayHello(greeting){
    
  
        console.log(greeting+" "+this.firstName+" "+this.SecondName);
    
    
}


sayHello.call(name, "Hey");
sayHello.apply(name,["hello","Hi","Hey"])

var sayGreet=sayHello.bind(name)
sayGreet("Hello")
sayGreet("Hi")




