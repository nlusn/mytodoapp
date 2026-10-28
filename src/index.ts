class Todo {
    taskList : Task[];

    constructor(list : Task[]){
        this.taskList = list;
    }

    push(task : Task) : void {
        this.taskList.push(task);
    }

    pop() : void {
        this.taskList.pop();
    }

    list() : Task[] {
        return this.taskList;
    }

    find(id : number) : Task {
        for(let task of this.taskList){
            if(id === task.getId()){
                return task;
            }
        }
        throw new Error("No task found");
    }

    update(id : number, text : string, status : string, dueDate : Date ) {
        for (let task of this.taskList){
            if(id === task.getId()){
                task.setText(text);
                task.setStatus(status);
                task.setDate(dueDate);
            }
        }

        throw new Error("Task couldn't be found");

    }

}


class Task {
    private id : number;
    private text : string;
    private status : boolean;
    private creationDate : Date;
    private dueDate : Date;

    constructor(id : number, text : string, complete : boolean, dueDate : Date){
        this.id = id;
        this.text = text;
        this.status = complete;
        this.creationDate = new Date();
        this.dueDate = dueDate;
    }

    // getters
    getId() : number{
        return this.id;
    }

    getText() : string {
        return this.text; 
    }

    getStatus() : string {
        return this.status ? "Completed" : "Not Completed"; 
    }

    getCreationDate() : Date{
        return this.creationDate;
    }

    getDueDate() : Date {
        return this.dueDate;
    }


    // setters
    setText(text : string){
        this.text = text;
    }

    setStatus(status : string) {
        if(status === "c"){
            this.status = true
        }

        if(status === "n"){
            this.status = false;
        }
    }

    setDate(date : Date){
        this.dueDate = date;
    }



 }

const welcomeMessage = `
    Hello and Welcome to My To-do App
    you have four option functions how you could use this app

    1.) type 'add' to add a task to your to-do list.
    2.) type 'check' to check your tasks. 
    3.) type 'delete' to delete your task.
    4.) type 'update' to update your task.
    5.) type 'set' to set yout task's status to completed.
    6.) type 'quit' to quit the program. 
`;


while(true) {

} 