# To-Do List Application

This is a simple To-Do List application built using Next.js and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as completed. The tasks are saved in the browser's localStorage, ensuring they persist even after refreshing the page.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using localStorage

## Technologies Used

- Next.js
- React
- Tailwind CSS
- localStorage

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/to-do-list.git
cd to-do-list
```

2. Install the dependencies:

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### Running the Application

To start the development server, run:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage

### Adding a Task

1. Enter the task description in the input field.
2. Click the "Add Task" button.

### Editing a Task

1. Click the "Edit" button next to the task you want to edit.
2. Modify the task description in the input field that appears.
3. Click the "Save" button to save changes.

### Deleting a Task

1. Click the "Delete" button next to the task you want to remove.

### Marking a Task as Completed

1. Click the task description to toggle its completed status.

## Local Storage

Tasks are automatically saved to localStorage whenever they are added, edited, or deleted. This ensures that tasks persist even after refreshing the page or closing the browser.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
