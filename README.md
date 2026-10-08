# PitchIn

Research project page for **PitchIn: Natural-Language Singing Coaching from Unstructured Community Feedback**.

**Website:** https://hayeonbang.github.io/PitchIn/

This repository contains the static project page, overview figure, and three audio examples with stored model responses. It does not contain model weights or inference services.

## Preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/. Edit `content.js` for examples and demo configuration, and `styles.css` for the page design.

The live [Gradio demo](https://huggingface.co/spaces/Hayeonbang/PitchIn) runs on Hugging Face Spaces. `demo.embedUrl` configures its HTTPS endpoint. GitHub Pages serves this repository from the root of the `main` branch.
