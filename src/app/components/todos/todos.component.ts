import { Component } from "@angular/core";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
})

export class TodosComponent {
    todoText: string = '';
    updateInputText: string = '';
    updateId: number = 0;
    isModalOpen: boolean = false;

    todos: any = [{ content: 'First Todo', isComplete: false }, {
        content: 'Second Todo',
        isComplete: false,
    }]

    addTodo() {
        this.todos.push({
            content: this.todoText,
            isComplete: false,
        })
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo: any, index: any) => id !== index)
    }

    completeTodo(id: number) {
        this.todos.map((todo: any, index: any) => {
            console.log(todo.isComplete)
            if (index === id) {
                todo.isComplete = !todo.isComplete;
            }
        })
    }

    updateTodo(id: number, todo: any) {
        this.isModalOpen = true;
        this.updateInputText = todo.content;
        this.updateId = id;
    }

    updateModalTodo() {
        this.todos.map((todo: any, id: number) => {
            if (id === this.updateId) {
                todo.content = this.updateInputText;
            }
        })
        this.isModalOpen = false;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}