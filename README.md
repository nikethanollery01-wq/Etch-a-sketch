# Etch-a-sketch
Etch-a-Sketch is a project in the Foundations section of The Odin Project.

Challenges

Generating divs dynamically for each grid element was confusing at first.
    
    I tried using a template element and cloning it. But referencing the cloned element didn’t directly point to the child because of the Document Fragment. This added an extra step.

    A simpler approach was using createElement to build and append divs. This reduced complexity and made things easier.


Hover effect 

    I tried different event listeners, starting with mousemove, but it didn’t work well. I finally used mouseover, which worked as expected.

Clearing the grid on custom input 

    I first used innerHTML to clear the container. Later, I switched to textContent = "", which is safer and simpler.