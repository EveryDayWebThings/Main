<!-- src/QrCodeGenerator.svelte -->


<head>
  <title>QR Code Generator - Everyday Web Things</title>
  <meta name="description" content="Generate QR codes for websites, links, contact information, and more with our online QR code generator. Simplify information sharing and mobile interactions." />
  <meta name="keywords" content="QR code generator, generate QR codes, QR code creator, information sharing, mobile interactions" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  import { onMount } from 'svelte';

  let inputValue = '';
  let qrCodeUrl = '';

  function generateQRCode() {
    qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}&size=150x150`;
  }

  onMount(generateQRCode);
</script>

<style>




    /* Add your CSS styles here */

    :root {
  --bg-color-light: #f7f7f7; /* Light mode background color */
  --text-color-light: #333; /* Light mode text color */
  --accent-color-light: #3498db; /* Light mode accent color */
  
  --bg-color-dark: #222; /* Dark mode background color */
  --text-color-dark: #ddd; /* Dark mode text color */
  --accent-color-dark: #1976d2; /* Dark mode accent color */
}

/* Default to light mode */
body {
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--bg-color-dark);
    color: var(--text-color-dark);
  }
}




  div {
    text-align: center;
    padding: 90px 20px; /* Added more vertical padding */
    margin: 20px;
  }

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  input {
    font-size: 18px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
  }


</style>

<div>
  <h2>QR Code Generator</h2>
  <input type="text" bind:value={inputValue} placeholder="Enter text or URL" />
  <button on:click={generateQRCode}>Generate QR Code</button>

  {#if qrCodeUrl}
    <img src={qrCodeUrl} alt="QR Code" />
  {/if}
</div>
