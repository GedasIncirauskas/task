import React from "react";
import { Header, Content, Form } from "../src/components/index";
import "./variable.scss";

import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="content">
          <section className="content_wrapper">
            <Content />
            <Form />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
