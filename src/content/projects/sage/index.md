---
title: "Sage"
description: "Desktop application to notify users of new marketplace posts."
date: "April 22 2023"
demoURL: "https://github.com/rmitchellPitzer/Sage/releases/tag/releases"
repoURL: "https://github.com/rmitchellPitzer/Sage"
---

![My desktop app Sage!](/sage1.jpg)
<span>
<p class="text-sm text-center">My desktop app Sage!</p>
</span>

Sage was made in a desperate attempt to buy keycaps on Reddit's mechmarket marketplace. Someone would post a sale for the keycaps I wanted while I was studying and by the time I saw the post someone else would have bought them. To fix this I created a desktop application using Tauri, with a frontend made in React. I used Tauri's built in functions to send desktop notifications when a new post is made!

## 🪻 Creating Sage

I had experience creaing desktop applications using Electron.JS. Electron.JS has some problems that come from using Node.JS as a backend, but it is a really unique way to create desktop applications using Javascript. It's why companies like Discord, Microsoft, and Spotify have used Electron.JS in the past. 

Tauri fixes many of the problems Electron.JS has like security concerns, large bundle sizes, and uses Rust instead of Node.JS for it's backend. It also cross compiles to Linux, Windows, MacOS, with plans for Android and ios compilation. 

I used Tauri to fetch URL information from Reddit, save state information like color themes and tracking status to local storage, and to send notifications to the desktop environment. 

If you'd like to try it feel free to visit the [project's repository here!](https://github.com/rmitchellPitzer/Sage) Thank you so much!