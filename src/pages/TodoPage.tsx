import React, {useState, useEffect} from 'react'

import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';
import {ITodo} from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodoPage: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])
  
  useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]
    )
  
    const addHandler = (title: string) => {
      const newTodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      // setTodos([newTodo, ...todos])
      setTodos(prev => [newTodo, ...prev])
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      const sireDel = confirm('Are you sure you want to delete the task?')
      if (sireDel) {
        setTodos(prev => prev.filter(todo => todo.id !== id)) 
      }
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>
            <TodoList 
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler} 
            />
        </React.Fragment>
    )
}