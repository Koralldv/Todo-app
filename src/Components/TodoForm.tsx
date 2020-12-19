import React, { useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && ref.current!.value) {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return(
        <div className="input-field mt2">
            <h1>Good luck, bro 😉</h1>
            <input 
                // value={title}
                // onChange={changeHandler}
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text" 
                id="title" 
                placeholder="Enter task" />
            <label htmlFor="title" className="active mt2"></label>
        </div>
    )
}