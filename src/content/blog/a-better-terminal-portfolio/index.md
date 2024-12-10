---
title: "A Better Terminal Portfolio"
description: "And why I love Warp Terminal."
date: "December 9 2024"
demoURL: "https://ryderis.online/"
repoURL: "https://github.com/rmitchellPitzer/terminal"
---
![My Shell Portfolio's Homepage.](/shell1.webp)
<span>
<p class="text-sm text-center">My Shell Portfolio's Homepage.</p>
</span>

I think most Computer Science majors can relate to the experience of opening a terminal or shell program and getting started with learning how to program. This first experience may have been using PowerShell, terminal or bash, and it could have been during school, growing up or much later in life. I remember learning Python in 2017 during a high school CS course, and configuring environment variables so I could run IPython commands in Powershell. I think there’s something very cool about terminal programs, and it can feel very personal to each individual programmer.

Sometime after learning React and TypeScript for my interaction design course I started working on portfolio websites for myself. I would make the designs in Figma, but I was quickly becoming burnt out. I realized I wasn’t designing websites I would want to use, but websites to gain attention from recruiters or interviewers. 

![Some Early Portfolio Designs in Figma.](/shell2.jpg)
<span>
<p class="text-sm text-center">Some Early Portfolio Designs in Figma.</p>
</span>

I eventually learned about terminal portfolios, and fell in love! These are websites that mimic the functionality of a terminal accessing the operating system’s shell, but with commands focused on displaying experience and projects. If you want to see some incredible terminal portfolios, feel free to visit [Mira Flutty's Website](https://miraflutty.neocities.org/), [Francesco's Hacknet Inspired Terminal](https://fruff0.neocities.org/terminal) or for a more SWE focused website, [Prithvi's Terminal Website](https://cosmicwanderer7.github.io/Terminal-Portfolio/theme0.html).

I knew I wanted a similar design but I also wanted to put my own spin on it. There are so many amazing templates available online to clone and put content into, but I also wanted mine to be unique. Thus I set out to deisgn and build a terminal portfolio website while also practicing UI/UX design more to create a portfolio that reflects myself. 

I first started by finding websites to gain inspiration from that I thought were brilliant. Behance and Dribble are amazing for this, but I find myself using them less because they tend to prioritize trends in UI/UX design. The current trends in web development seem to follow [Cyberminimalism](https://antifandom.com/aesthetics/wiki/Cyberminimalism), [Nu-brutalism](https://cari.institute/aesthetics/nu-brutalism), or [Corporate Memphis](https://cari.institute/aesthetics/corporate-memphis). These are perfectly valid design styles that can serve different purposes, but for my website I tried to avoid these design trends.

![Dimden's Website.](/shell3.jpg)
<span>
<p class="text-sm text-center">Dimden's Website on Neocities.</p>
</span>

I've found [Neocities](https://neocities.org/) to be a great resource for finding unique websites. Using their directory you can find countless websites that you rarely see elsewhere on the internet today. Some of my favorites include [Dimden](https://dimden.dev/), [Cinni](https://cinni.net/), and [Melankorin](https://melankorin.net/home/). While these websites serve as a source for inspiration and studying design principles, they also can host important resources. Melankorin.net has a [library of resources](https://melankorin.net/links/library/), with categories that cover colour, inspiration, reference, typography, css, graphics, javascript, and more. 
I started with a color palette I found [Catppuccin](https://catppuccin.com/). This is a pastel color palette with 3 dark variants and a light mode variant. The dark variants offer varying vibrancies and contrast, and I ended up using the Mocha variant for it's vibrant accent colors.
I also knew there were similar terminal portfolios that already existed, so I ended up using a fork of  [Sat Naing's Open Source Terminal Portfolio](https://terminal.satnaing.dev/). I felt a terminal made using React, Styled Components, and React's Context would be the perfect start in developing my website. 


![Melakorin's Library.](/shell4.jpg)
<span>
<p class="text-sm text-center">Melakorin's Library.</p>
</span>

I wanted to get a minimum viable product deployed as fast as possible *(also so I could include this on my resume in job applications)*, so these were my criteria for deployment:

- Typing animations when sent commands are rendered.
- Common commands found on terminal portfolio websites like about, work, projects, contact, etc.
- Autocomplete and suggestions for inputs,
- Multiple tabs present which can operate as independent terminals,
- Mimics a terminal in design.

And here’s everything that went wrong!

### ✍️ Design 

For the user interface I took inspiration from Warp terminal. I've loved using Warp across many projects for it's AI features, inline editing, shared sessions, performance, nested tabs, autocomplete, and plenty of other quality of life features. I can not recommend it enough. From Warp I took inspiration from its nested tabs, autocomplete, placement of the gui and buttons, and code blocks. 

This went well, with the caveat of implementing the close/minimize/full screen buttons native to most terminals in operating system applications. [Full screen is supported by most browsers](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen), but to support closing the current browser window [the current window has to be opened using the window api.](https://developer.mozilla.org/en-US/docs/Web/API/Window/close). A workaround could be to create a proxy that opens the window for the user visiting the website, but that feels very hacky, and there's [evidence it no longer works in modern browsers](https://stackoverflow.com/questions/19761241/window-close-and-self-close-do-not-close-the-window-in-chrome/19768082#19768082). Then there's minimizing the window, which has no api to support it. 

As a work around, I set the close button to redirect to this website, and will eventually set the minimize button to dim the tab's window, play a small animation, and undim on user activity. 

![Figma Prototype of Minimize Functionality.](/shell5.webp)
<span>
<p class="text-sm text-center">Figma Prototype of Minimize Functionality.</p>
</span>

As with most web dev projects, problems specific to Safari came up. Currently the terminal looks great on chromium based browsers, but on Safari there is unexpected behavior resulting from the use of the user input floating to the top of the page. I believe this is due to the use of relative and absolute divs not updating and not knowing what their parent div is, and is known behavior in Safari. I believe I have a solution for this, but I also want to finish this blog post :). This will impact Safari users on Macos and IOS users for the time being.

![Input Floating Towards the Top of the Page on Safari.](/shell6.webp)
<span>
<p class="text-sm text-center">Input Floating Towards the Top of the Page on Safari on Overflow.</p>
</span>

I knew I wanted to keep track of each tab’s input, suggestions, and pointer in command history, and I knew I wanted the commands to display as a muted suggestion behind the user's input. I added state information to keep track of the selected tab, the input present in each tab, and a list of suggestions/pointers in the possible suggestions. This state information was then passed to the input using React Context. Anytime the user typed a key in the terminal input, the array of suggested commands was updated, containing a list of possible commands that could start with the user's input. If the previously suggested command is present in this array, the pointer for the suggested command will point to this command still. This way, a user's suggested commands aren't resetting/switching to new commands while typing. 
A listener was added to listen for keyboard events, with tab cycling through multiple suggested commands, and right arrow setting the user's input to the current suggestion. Anytime the input decreased in size/was deleted, the suggestion would be reset and inactive. Overall the autocomplete functionality works surprisingly well, but required a great deal of troubleshooting and storing information in the state.

![A Video of a User Cycling Through Suggestions and Autocomplete.](/shell7.webp)
<span>
<p class="text-sm text-center">Cycling Through Suggestions and Autocomplete.</p>
</span>


### 💬 The Typing Animation 

The typing effect, while seemingly trivial, was the most difficult part of this project. I knew I wanted an animation where characters are output character by character, and there are various Javascript libraries like [React-Typed](https://react-type-animation.netlify.app/), but I also wanted to support various inline HTML elements like spans, links, images, buttons, line breaks, and I wanted to style them properly. I briefly experiemented with [Remarkable](https://jonschlinkert.github.io/remarkable/demo/), a markdown library for React, but without writing a markdown parser the typing animation would type out something like: 

<p class="font-style: italic w-[90%] mx-auto">![A Video of a User Cycling Through Suggestions and Autocomplete.](https://rydermitchell.com/shell7.webp</p>

Before adding the last character `)` and rendering an image. Even then there were issues with styling the elements to fit with the design of the rest of the website.

To solve this I created a parser to parse raw string into a list of objects, matched using regular expressions. The user passes in input in the form of raw string following custom syntax I wrote. From here, two state variables could keep track of which part to render and what character to render. For instance, if one part is plain text then characters can be rendered character by character. Once it finishes rendering each character, the state is updated and the next part is rendered. If the current part is an image or a page break it could be rendered immediately without the typing animation. Each element was added every 15ms using SetInterval.

The next problem with this solution was rendering in react and state changes. Due to the use of context passing state information from the parent terminal component to the children components, whenever the global state updated all previously rendered commands would re-render. This meant whenever the user updated the input or pressed a key, all previously input commands would start their typing animation again. This was solved by properly memoizing the commands, preventing re-renders, and keeping an array of currently rendering command ids in the state and updating it when a command finishes typing.

![A Video of a User Inputting the Listening Command, Switching Tabs, and Having The Command Re-Render.](/shell8.webp)
<span>
<p class="text-sm text-center">Unnecessary Requests Being Made to the Last.FM API</p>
</span>

I ended up refactoring much of the forked project to implement multiple tabs/terminals. That said, there are still problems with this. One command being used is listening, which will make a get request to lastfm to display my last listened to song on spotify. While this renders properly, when switching tabs this get request is made again as the component re-renders when returning to the tab. This results in unnecessary api calls and incorrect behaviors on past commands. This can be fixed by storing this information properly in the state and updating it as such.

### 🎉 Results and Work Left! 

Right now the project is roughly half completed. It is hosted on Github Pages and can be viewed at [ryderis.online](https://ryderis.online/). The Github repo can be viewed [here](https://github.com/rmitchellPitzer/terminal). While much of the website is complete, the website still isn't fully functional. Below are some tasks i will complete before posting online and sharing this in webdev communities:
- Implement CSS breakpoints for mobile views,
- Fix Safari specific bugs and errors,
- Add additional attributes in the global state to reduce the number of get requests and re-renders being made,
- Store relevant information in local storage like which tabs have been visited and config options,
- Add audio for typing sounds, sound effects, and music using howler.js,
- Implement configuration options for typing speed, animation, music, and typing sounds, 
- Add more commands and functionality,
- Add typing animations to links and command suggestions, rendering character by character consistent with plain text,
- Add parser support for emojis so during the typing animation emojis render properly.
- Add support for svgs and video in terminal outputs,
- Implement minimize button functionality,
- Add proper testing using Jest.

Overall i’m pretty happy with this website! There's a lot of work left to complete, and I'm excited to finish this! Also this is my first blog post on this website, so thank you so much for reading through this!! 
