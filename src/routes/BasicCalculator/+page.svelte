<!-- Calculator.svelte -->

<head>
  <title>Basic Calculator - Everyday Web Things</title>
  <meta name="description" content="Perform simple arithmetic calculations with ease using our online basic calculator. Add, subtract, multiply, and divide numbers instantly." />
  <meta name="keywords" content="basic calculator, online calculator, arithmetic calculator, addition, subtraction, multiplication, division" />
</head>


<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let displayValue = "";

  function handleClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
      }
    } else if (buttonValue === "C") {
      displayValue = "";
    } else {
      displayValue += buttonValue;
    }
  }
</script>

<div class="calculator">
  <div class="display">{displayValue}</div>
  <div class="buttons">
    <button on:click={handleClick}>1</button>
    <button on:click={handleClick}>2</button>
    <button on:click={handleClick}>3</button>
    <button on:click={handleClick}>+</button>
    <button on:click={handleClick}>4</button>
    <button on:click={handleClick}>5</button>
    <button on:click={handleClick}>6</button>
    <button on:click={handleClick}>-</button>
    <button on:click={handleClick}>7</button>
    <button on:click={handleClick}>8</button>
    <button on:click={handleClick}>9</button>
    <button on:click={handleClick}>*</button> <!-- Use * for multiplication -->
    <button on:click={handleClick}>0</button>
    <button on:click={handleClick} class="equals">=</button>
    <button on:click={handleClick} class="clear">C</button>
    <button on:click={handleClick}>/</button> <!-- Use / for division -->
  </div>
</div>



<style>
  .calculator {
    width: 300px;
    margin: 20px auto;
    border: 1px solid #1b1b1b;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .display {
    font-size: 24px;
    padding: 10px;
    background-color: #f3f3f3;
    margin-bottom: 10px;
    border-radius: 5px;
    text-align: right;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  .buttons button {
    padding: 15px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .buttons button:hover {
    background-color: #e0e0e0;
  }

  .buttons button.equals {
    grid-column: span 2;
  }

  .buttons button.clear {
    grid-column: span 2;
  }
</style>

