import React, { useCallback, useMemo, useState } from "react";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <button onClick={changeTitleHandler}>Change List Title</button>
    </div>
  );
}

export default App;
