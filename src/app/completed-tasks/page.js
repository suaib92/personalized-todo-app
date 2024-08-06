// app/completed-tasks/page.js
export default function CompletedTasks() {
    const completedTasks = [
      { text: 'Example completed task 1' },
      { text: 'Example completed task 2' },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index} className="line-through">{task.text}</li>
          ))}
        </ul>
      </div>
    );
  }
  