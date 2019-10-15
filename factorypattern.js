//super class
function Person(type)
{

    this.type=type;
}
//subclasses
function User(type)
{
    Person.call(this,type);
}

function Admin(type)
{
    Person.call(this,type);
}

function ProjectManager(type)
{
    Person.call(this,type);
}

function Nominee(type)
{
    Person.call(this,type);
}

//constructor
function Factory()
{

    this.person;
    this.createInstance=function(type)
    {
        if(type=="user")
          this.person=new User(type)
        if(type=="admin")
            this.person=new Admin(type)
        if(type=="pm")
            this.person=new ProjectManager(type)
        if(type=="nominee")
            this.person=new Nominee(type)

        return this.person;
      }


}

var persons=[];

var factory = new Factory();
persons.push(factory.createInstance("user"));

persons.push(factory.createInstance("admin"));


persons.push(factory.createInstance("pm"));


persons.push(factory.createInstance("nominee"));


persons.forEach(person=>{
    console.log(person);
})
