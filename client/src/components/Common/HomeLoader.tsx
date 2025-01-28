import React from 'react'
import classes from './home-loader.module.css'

function HomeLoader() {
  return (
    <div className={classes.container}>
      <div className={classes.spinnerContainer}>
        <div className={classes.spinner}></div>
        <div className={classes.loader}>
          <p>Loading</p>
          <div className={classes.words}>
            <span className={classes.word}>account</span>
            <span className={classes.word}>jobs</span>
            <span className={classes.word}>dashboard</span>
            <span className={classes.word}>companies</span>
            <span className={classes.word}>everything</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoader