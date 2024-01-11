import { NoteData, Tag } from "./App"
import NewForm from "./NoteForm"
import { useNote } from "./NoteLayout"

type EditNotePorps ={
    onSubmit: (id:string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const EditNote = ({onSubmit, onAddTag, availableTags}: EditNotePorps) => {

  const note = useNote()

  return (
    <>
      <h1>Edit Note</h1>
      <NewForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag}
       availableTags={availableTags} title={note.title} markdown={note.markdown} tags={note.tags}/>
    </>
  )
}

export default EditNote
