import NotesList from "./components/NotesList";
import { NotesProvider } from "./providers/Notes";

function App() {
  return (
    <NotesProvider>
      <div className="container m-auto">
        <h1>Notes</h1>
        <NotesList />
      </div>
    </NotesProvider>
  );
}

export default App;
