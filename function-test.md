---
temperature: hot
---

# Custom Function Demo Page

## Built-in function
{% if equals($frontmatter.temperature, "hot") %}
  This porridge is too hot. Goldilocks won't eat it.
{% /if %}

---

## Custom Function

{% if isAfterDate("12-31-2023") %}
  It's 2024 - Happy New Year!  
  (using Month-Day-Year format)
{% /if %}

{% if isAfterDate("12-31-2030") %}
  If you can read this... I'm much older.
{% /if %}

{% if isAfterDate("2023-12-31") %}
  Another Happy New Year!  
  (using Year-Month-Day format)
{% /if %}


1. In your project root, add a new file called _function-test.md_ with the following content:

    
      ```markdoc {% process=false title="function-test.md" %}
      ---
      temperature: hot
      ---
      # Custom Function Demo Page
      ## Built-in function
      {% if equals($frontmatter.temperature, "hot") %}
        This porridge is too hot. Goldilocks won't eat it.
      {% /if %}
      ---
      ## Custom Function
      The custom function will go here.
      ```
    

2. Run the project using the following command: `npx @redocly/realm develop`. 

   ```js {% title="js-file.js" %}
   this is js code
   ```

1. Create a new file at _@theme/markdoc/schema.ts_. Your project directory should look like this:

    ``` {% title="Sample project directory" %}
    markdoc-function-tutorial
    ├── @theme
    │   └── markdoc 
    │       └── schema.ts
    ├── function-test.md
    ├── index.md
    ├── package-lock.json
    └── package.json
    ```

2. In _schema.ts_, define the `isAfterDate` function and save.

    ```javascript {% title="schema.ts" %}
    export const functions = {
      isAfterDate: {
        transform(parameters) {
          console.log(parameters);
          return true;
        }
      }
    }
    ```

3. In _function-test.md_, add the new tag under the **Custom Function** section and save.