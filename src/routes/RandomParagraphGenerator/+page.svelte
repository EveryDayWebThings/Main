<!-- src/RandomParagraphGenerator.svelte -->

<head>
    <title>Random Paragraph Generator - Everyday Web Things</title>
    <meta name="description" content="Generate random paragraphs for your writing projects with our online paragraph generator. Enhance your creativity and generate text instantly." />
    <meta name="keywords" content="random paragraph generator, generate text, creative writing, writing tool, text generation" />
  </head>
  
  
  
  <script>
  
  
  
    import { onMount } from 'svelte';
  
    let randomParagraph = '';
    let numberOfParagraphs = 1; // Default number of paragraphs to generate
  
    // Sample paragraphs
    let paragraphs = [
    "The sun dipped below the horizon, casting a warm, golden glow across the tranquil lake.",
    "In the heart of the bustling city, a street musician played a haunting melody on his violin.",
    "As the leaves rustled in the gentle breeze, a feeling of peace settled over the forest.",
    "The old bookstore was filled with the musty scent of ancient books, each one holding a story waiting to be discovered.",
    "A child's laughter echoed through the park, bringing smiles to the faces of those nearby.",
    "The chef meticulously prepared a gourmet meal, each ingredient chosen with care and precision.",
    "High above the city, a red-tailed hawk soared gracefully through the clear blue sky.",
    "The waves crashed against the rocky shore, creating a soothing lullaby for beachgoers.",
    "Deep in the heart of the desert, a solitary cactus stood resilient against the scorching sun.",
    "The aroma of freshly baked bread wafted through the air, drawing hungry customers into the bakery.",
    "A group of friends gathered around a campfire, sharing stories and roasting marshmallows under the starry night sky.",
    "The neon lights of the city illuminated the streets, creating a vibrant and electric atmosphere.",
    "A gentle rain began to fall, bringing relief to the parched earth and a sense of renewal to all who felt it.",
    "The mountaineer reached the summit, taking in the breathtaking view of the world below.",
    "A street artist painted a mural on a brick wall, transforming the urban landscape into a work of art.",
    "In a quiet garden, a butterfly flitted from flower to flower, sipping nectar in the afternoon sun.",
    "The antique clock on the mantle ticked away the hours, a reminder of the passage of time.",
    "A father and son played catch in the park, the sound of laughter carrying on the wind.",
    "The city skyline glowed with the lights of a thousand windows, each one a glimpse into a different life.",
    "A sudden gust of wind sent colorful leaves swirling through the air, announcing the arrival of autumn.",
    "A pianist sat at the grand piano, filling the concert hall with the rich and emotive notes of a classical masterpiece.",
    "A street vendor sold fragrant spices and exotic fruits, creating a sensory explosion for passersby.",
    "The scent of freshly bloomed roses permeated the garden, a testament to the beauty of nature.",
    "A group of children chased fireflies in the warm summer evening, their laughter echoing through the night.",
    "The scientist peered through the microscope, discovering a new and mysterious microorganism.",
    "In a crowded subway, strangers stood shoulder to shoulder, each lost in their own thoughts and journeys.",
    "A gentle stream meandered through the meadow, providing a peaceful haven for wildlife.",
    "The actor stepped onto the stage, the spotlight illuminating their every move as they delivered their lines with passion.",
    "A gentle snowfall blanketed the town, turning it into a winter wonderland of glistening white.",
    "As the sun set over the ocean, a sailboat glided gracefully on the horizon, a symbol of freedom and adventure."
  ];
  
    function generateRandomParagraphs() {
      const randomParagraphs = [];
      for (let i = 0; i < numberOfParagraphs; i++) {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        randomParagraphs.push(paragraphs[randomIndex]);
      }
  
      randomParagraph = randomParagraphs.join('\n\n');
    }
  
    onMount(() => {
      generateRandomParagraphs();
    });
  </script>
  
  <main>
    <div>
      <h1>Random Paragraph Generator</h1>
  
      <label for="numberOfParagraphs">Number of Paragraphs:</label>
      <input type="number" id="numberOfParagraphs" bind:value="{numberOfParagraphs}" min="1">
  
      <button on:click="{generateRandomParagraphs}">Generate Random Paragraphs</button>
  
      {#if randomParagraph}
        <p>Random Paragraphs:</p>
        {@html randomParagraph} <!-- Use {@html} to render HTML tags -->
      {:else}
        <p>No paragraphs generated yet.</p>
      {/if}
    </div>
  </main>
  
  
  <style>
    /* Your CSS styles here */
    :root {
        --background-light: #f7f7f7;
        --background-dark: #333;
        --text-light: #333;
        --text-dark: #f7f7f7;
        --button-light: #0078d4;
        --button-dark: #005ea2;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: var(--background-dark);
            --text: var(--text-dark);
            --button: var(--button-dark);
        }

        input[type="number"],
        button {
            background-color: var(--button);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: darken(var(--button), 10%);
        }
    }

    /* Other styles for the component */
    main {
        text-align: center;
        padding: 90px 20px; /* Added more vertical padding */
}
    

    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    label {
        margin-right: 10px;
    }

    input[type="number"] {
        font-size: 16px;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        width: 60px;
    }

    button {
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    p {
        font-size: 18px;
        margin-bottom: 10px;
        color: var(--text);
    }
</style>