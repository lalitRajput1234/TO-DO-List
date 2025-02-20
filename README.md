<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

This is a simple React-based Todo application that allows users to add, edit, delete, and mark tasks as completed. It also persists tasks using local storage.

#Features

1.Add new todos

2.Edit existing todos

3.Delete todos

4.Mark todos as completed (with a strikethrough effect)

5.Persist todos in local storage

#Technologies Used

1.React (Functional Components, Hooks)

2.Local Storage for persistence

3.UUID for unique task identifiers

4.Tailwind CSS for styling

#Components and Functionality

1.App.js

2.State Management:

3.todo: Stores the current input value.

todos: Stores the list of todos.

4.Effects:

useEffect to load and save todos from/to local storage.

5.Functions:

handleAdd: Adds a new todo to the list.

handleEdit: Edits an existing todo.

handleDelete: Deletes a todo.

handleCheckbox: Toggles the completion status of a todo.

handlechange: Updates the input value for the todo.

6.NAvbar.js

A navigation bar component ( inside ./components/NAvbar).

#Usage

Install dependencies using npm install.

Start the development server using npm start.

Add, edit, delete, and mark todos as completed.

Notes

Todos are stored in local storage, so they persist even after page refresh.

The "Save" button is disabled if the input length is less than 4 characters.

Checked todos will have a strikethrough effect.

This app provides a minimal and efficient way to manage daily tasks using React Hooks and Local Storage.

#Challenges I faced during made this todo are:-
1. suppose when i add some items in the list and then i reload the page the whole list became empty to overcome this i used local storage by the use of local storage the data is saved locally and then  i reload the page list is  not became empty.
2. CRUD operations are not applied easily in the list so i used UUID(universely uniqely identifier) which provide unique and stable keys due to which performance are became better and also debugging became easier.

   

