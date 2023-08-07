// Section 67 vid 641 - Arrays In State
// vid 642-643 - Generating Ids with uuid and deleting from arrays the react way

import { useState } from "react"
import { v4 as uuid } from "uuid";

const emojiArray = [
  "😀", "😄", "😁", "😆", "😅",
  "😂", "😊", "😇", "🙂", "🙃",
  "😉", "😋", "😎", "😍", "😘",
  "😗", "😚", "🤩", "🥰", "😻"
];

const randomEmoji = () => {
  const randomInd = Math.floor(Math.random() * emojiArray.length);
  return emojiArray[randomInd];
}


export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
  const addEmoji = () => {
    setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: randomEmoji()}]);
  }
  const deleteEmoji = (id) => {
    // delete the emoji with the specified id
    setEmojis(prevEmojis => {
      return prevEmojis.filter(e => e.id !== id);
    })

  }

  // vid 645 - Updating all elements in an array
  const changeToCat = () => {
    setEmojis(prevEmojis => {
      return prevEmojis.map(e => {
        return { ...e, emoji: "😻"}
      })
    })
  }

  return (
    <div>
      {emojis.map(e => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize : "4rem" }}>
          {e.emoji}
        </span>
      ))}
      <br />
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={changeToCat}>Make Them All Cats</button>
    </div>
  )
}