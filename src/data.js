import { v4 as uuidv4 } from 'uuid'

const data = [
    {
        id: uuidv4(),
        title: ' 📃 To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn Golang'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '🎯 Archieved',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn C++ and Python'
            },
            {
                id: uuidv4(),
                title: 'Learn Angular'
            }
        ]
    },
]
console.log(data);

export default data