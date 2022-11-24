import classes from './Counter.module.css';

const Counter = () => {

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
    </main>
  );
};

export default Counter;
