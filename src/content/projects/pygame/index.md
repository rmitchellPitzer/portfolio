---
title: "PyGame Tutorial"
description: "Tutorial for beginners in CS to learn how to program using Pygame."
date: "May 2 2023"
# demoURL: "https://colab.research.google.com/drive/1tZP2uqyYI5lit-_YY7LQ0prynJ2eMNuG"
repoURL: "https://colab.research.google.com/drive/1tZP2uqyYI5lit-_YY7LQ0prynJ2eMNuG"
---

![Our game circle game!](/pyGame1.jpg)
<span>
<p class="text-sm text-center">Our game circle game!</p>
</span>

During the spring 2023 semester I had the opportunity to participate in a pilot course taught by Professor Xanda called Computing Together. It was a class centered on skills all software developers should know, such as Git, various Python libraries, VIM, and working as a team in a scrum environment. The final project would be a tutorial to teach others a skill in a Python notebook. My team decided on making a tutorial for PyGame! By the end of the tutorial the user should be able to play a game similar to Agar.io, [Circle Game](https://experiments.withgoogle.com/circle-game).

## 👾 Making The Game

There were several issues that needed to be ironed out. One problem we ran into early on was that Google Colab servers do not have video out. [There is a solution](https://stackoverflow.com/questions/57043905/how-can-we-use-pygame-on-google-colab), but it requires using OpenCV to spoof a display, take many screen captures, and display it in a cell at 5 frames per second. Also it does not allow for user input, so we switched to using Jupyter Notebook.

We could now get video output, but closing the game would cause Jupyter Notebook to crash. To fix this we saved the code in an array of strings then used the OS library to write the script to disk and calling that script inside the notebook.

We also had problems using a library someone else had written. This library wasn't a typical library and was instead a Python class of many objects. We used the requests library to fetch the library, save it to disk, then import that inside the scripts written to disk.

The end result is a game you can play now by [downloading the notebook here](https://colab.research.google.com/drive/1tZP2uqyYI5lit-_YY7LQ0prynJ2eMNuG#scrollTo=bNWo_0aXWqvt)! Thank you so much!