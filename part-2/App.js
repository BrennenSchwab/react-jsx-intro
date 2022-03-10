function App() {
    return (
      <div>
        <Tweet
          name="me"
          username="me"
          date={new Date().toDateString()}
          message="This is me"
        />
        <Tweet
          name="Myself"
          username="egg123"
          date={new Date().toDateString()}
          message="eggs"
        />
        <Tweet
          name="Brennen Schwab"
          username="BrennenS"
          date={new Date().toDateString()}
          message="And I"
        />
      </div>
    );
  }