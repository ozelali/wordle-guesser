import { useState } from 'react';
import './App.css';
import wordList from './wordlist.json';

const initialSearchArray: number[] = [];
const initialCharArray: any[] = [, , , ,];
const initialWordList: any[] = [];

function App() {
  const [searchArray, setSearchArray] = useState(initialSearchArray);
  const [filledCharArray, setFilledCharArray] = useState(initialCharArray);
  const [filteredWords, setFilteredWords] = useState(initialWordList);

  const letterChange = (e: HTMLInputElement, order: number) => {
    let tempWordList = wordList;
    let filledIndexArray: any[] = searchArray;
    let filledCharArrayTemp: any[] = filledCharArray;

    if (e.value) {
      filledCharArrayTemp[order] = e.value.toLocaleLowerCase();
      filledIndexArray[order] = order;
      setFilledCharArray(filledCharArrayTemp);
      setSearchArray(filledIndexArray);
    } else {
      filledCharArrayTemp[order] = undefined;
      filledIndexArray[order] = undefined;
      setSearchArray(filledIndexArray);
      setFilledCharArray(filledCharArrayTemp);
    }

    searchArray.forEach((element) => {
      if (filledCharArrayTemp[element]) {
        tempWordList = tempWordList.filter(
          (item) => item.kelime.charAt(element) === filledCharArrayTemp[element]
        );
      }
    });

    if (searchArray.filter((item) => item !== undefined).length > 0) {
      setFilteredWords(tempWordList);
    } else {
      setFilteredWords([]);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="title">WORDLE TR</div>
      </header>

      <div className="letter">
        <input
          type="text"
          name="letter1"
          onChange={(e) => letterChange(e.target as HTMLInputElement, 0)}
          maxLength={1}
        />
        <input
          type="text"
          name="letter2"
          onChange={(e) => letterChange(e.target as HTMLInputElement, 1)}
          maxLength={1}
        />
        <input
          type="text"
          name="letter3"
          onChange={(e) => letterChange(e.target as HTMLInputElement, 2)}
          maxLength={1}
        />
        <input
          type="text"
          name="letter4"
          onChange={(e) => letterChange(e.target as HTMLInputElement, 3)}
          maxLength={1}
        />
        <input
          type="text"
          name="letter5"
          onChange={(e) => letterChange(e.target as HTMLInputElement, 4)}
          maxLength={1}
        />
      </div>
      <div style={{ marginTop: '25px', display: 'list-item' }}>
        {filteredWords.map((item) => {
          return (
            <div key={item.kelime} style={{ marginTop: '5px' }}>
              <span>{item.kelime}</span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
