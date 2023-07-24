import React, {useCallback, useState} from "react";

export default {
    title: 'useCallback',
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Js", "CSS", "HTML"])


    const addBook = useCallback(() => {
        const newBooks = [...books, "Angular"];
        setBooks(newBooks)
    }, [books])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}
        <Books books={books} addBook={addBook}/>
    </>
};

const BooksSecret = (props: { books: Array<string>, addBook: () => void}) => {
    console.log("BooksSecret")

    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)