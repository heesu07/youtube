import styles from './search_header.module.css';
import React, {memo, useRef } from 'react';

const Search_header = memo( ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value);
  };
  const goHone = () =>{
    inputRef.current.value = "";
    handleSearch();
  };
  const onClick = () =>{
    handleSearch();
  };
  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  };
    console.log('Header!!!');
      return (
        <header className={styles.header}>
          <div 
            className={styles.logo} 
            onClick={goHone}>
            <img className={styles.img} src="/images/logo.png" alt="logo"/>
            <h1 className={styles.title}>Youtube</h1>
          </div>
          <input 
            ref={inputRef} 
            className={styles.input} 
            type="search" 
            placeholder="Search..." 
            onKeyPress={onKeyPress} />
          <button 
            className={styles.button} 
            type="submit" 
            onClick={onClick}>
            <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
          </button>
        </header>
      );
  }
);

export default Search_header;