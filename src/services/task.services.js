

const uri = 'http://localhost:4000/';



async function getTasks(){

    try {
        const res = await fetch(`${uri}api/tasks`);
    
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
    
        const resTasks = await res.json();

        const tasks = resTasks.tasks;

        return tasks;
    
      } catch (error) {
        throw new Error(error);
    }

    
    

}


export{
    getTasks
}