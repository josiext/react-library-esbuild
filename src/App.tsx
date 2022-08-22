import React, { useState } from "react";
import { Box, Input } from "lib";

const App = () => {
  const [sectionSelected, setSectionSelected] = useState("");

  return (
    <div>
      <header>
        <h1>Lemont System </h1>
      </header>

      <ul>
        <li>
          <button onClick={() => setSectionSelected("box")}>Box</button>
        </li>
        <li>
          <button onClick={() => setSectionSelected("button")}>Button</button>
        </li>
        <li>
          <button onClick={() => setSectionSelected("input")}>Input</button>
        </li>
      </ul>
      <hr />
      <br />

      {sectionSelected === "box" && (
        <div>
          <h2>Box</h2>

          <Box bg="gray" color="black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sit, quia soluta aperiam atque, iure enim velit harum iusto vero
            neque repellat cupiditate facere dolorum est. Expedita adipisci
            possimus excepturi!
          </Box>

          <div>
            <code>
              {`<Box bg="red" color="yellow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sit, quia soluta aperiam atque, iure enim velit harum iusto vero
            neque repellat cupiditate facere dolorum est. Expedita adipisci
            possimus excepturi!
          </Box>`}
            </code>
          </div>
        </div>
      )}

      {sectionSelected === "button" && (
        <div>
          <h2>Button</h2>

          <div>
            <code>{`<Button label="My button" />`}</code>
          </div>
        </div>
      )}

      {sectionSelected === "input" && (
        <div>
          <h2>Input</h2>
          <Input label="My Input" />

          <div>
            <code>{`  <Input label="My Input" />`}</code>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
