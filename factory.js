var inst=function(){
    this.name=""
    this.set=function(name)
    {
        this.name=name;
    }

    this.get=function(){
        return this.name
    }

   

}

var inst1 = new inst()

inst1.set("Ramesh")
console.log(inst1.get())