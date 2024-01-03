var obj1 = {
    name:"person1",age:25
    }
    var obj2 = {
        age:25, name:"person2"
    }
    function compareObjects(obj1 ,obj2)
    {
      return JSON.stringify (obj1)==JSON.stringify(obj2);
    }
    console.log(compareObjects(obj1,obj2));