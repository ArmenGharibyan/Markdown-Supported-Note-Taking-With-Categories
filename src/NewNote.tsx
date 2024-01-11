import { NoteData, Tag } from "./App"
import NewForm from "./NoteForm"

type NewNotePorps ={
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const NewNote = ({onSubmit, onAddTag, availableTags}: NewNotePorps) => {
  return (
    <>
      <h1>New Note</h1>
      <NewForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}

export default NewNote
