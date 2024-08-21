---
title: "Pollen Identification Project"
description: "Tool to automate identification and classificaiton of pollen species"
date: "May 2 2022"
# demoURL: "https://astro-sphere-demo.vercel.app"
repoURL: "https://github.com/rmitchellPitzer/Pollen-Identification-Project"
---

![A pollen grain after processing using OpenCV!](/pollen1.jpg)
<span>
<p class="text-sm text-center">A pollen grain after processing using OpenCV!</p>
</span>

My Pollen Identification Project was a final project for my Computer Vision class at Harvey Mudd College. It's a Jupyter Notebook made using Python, PyTorch, and OpenCV.

The task I received was to create a notebook to output a model that could help researchers identify pollen grains. The pollen grains would be collected outside bee hives at the Redford Conservancy. The pollen grains would then be stained by researchers, photographed under a microscope, and identified. My notebook would then take these images and train a convolutional neural network to classify these pollen grains. Researchers could also add new pollen grains so their model could be updated later. Collection/staining/photographing pollen grains can be tedious, so I used OpenCV's blob detection tool to first automatically identify pollen grains in images, crop them, and augment the data to train the model on. 

## 🌻 View The Notebook!
![Results when using the notebook!](/pollen2.jpg)
<span>
<p class="text-sm text-center">Results when using the notebook!</p>
</span>

Unfortunatley the project requires the original dataset of flower images to run, but if you'd like you can still view [the repo here](https://github.com/rmitchellPitzer/Pollen-Identification-Project)!

Thank you so much!
