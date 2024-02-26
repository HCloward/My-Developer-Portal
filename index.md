# Hello World


1. In your project root, add a new page called _function-test.md_ with the following content:

    {% markdoc-example %}
    ```markdoc
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
    {% /markdoc-example %}

2. Run the project: `npx @redocly/realm develop`. 

3. Open the **Preview URL** and navigate to /function-test. 

4. Verify the content inside the `{% if %}` tag renders on the page. 








1. In your project root, add a new page called _function-test.md_ with the following content:

    {% markdoc-example %}
    ```
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
    {% /markdoc-example %}

2. Run the project: `npx @redocly/realm develop`. 

3. Open the **Preview URL** and navigate to /function-test. 

4. Verify the content inside the `{% if %}` tag renders on the page. 
