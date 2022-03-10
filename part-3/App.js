function App() {
    return (
      <div>
        <Person
          name="Brennen"
          age={26}
          hobbies={["sports", "stuff", "other stuff"]}
        />
        <Person 
        name="Wesley Snipes" 
        age={60} 
        hobbies={["acting", "hats", "style"]} 
        />
        <Person
          name="Snoop Lion"
          age={17}
          hobbies={["football", "rap", "dogs"]}
        />
      </div>
    );
  }