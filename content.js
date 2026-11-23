window.PITCHIN_CONTENT = {
  "authors": [
    {
      "name": "Hayeon Bang",
      "affiliation": "1",
      "url": "https://hayeonbang.github.io/"
    },
    {
      "name": "Hounsu Kim",
      "affiliation": "1"
    },
    {
      "name": "Joonyong Park",
      "affiliation": "2"
    },
    {
      "name": "Jung-Jae Yu",
      "affiliation": "3"
    },
    {
      "name": "Juhan Nam",
      "affiliation": "1"
    }
  ],
  "affiliations": "¹ KAIST, Korea   ·   ² The University of Tokyo, Japan   ·   ³ ETRI, Korea",
  "demo": {
    "url": "https://huggingface.co/spaces/Hayeonbang/PitchIn",
    "question": "How does my singing sound overall, and how can I improve?",
    "embedUrl": "https://hayeonbang-pitchin.hf.space/?__theme=light"
  },
  "examples": [
    {
      "id": "case-01",
      "tab": "Breath and vowels",
      "title": "Breath and vowels",
      "audio": "assets/case-01.mp3",
      "pretrained": "Your singing sounds good! You have a nice voice, but you should try to sing with more emotion and feeling. Also, you could work on your breath control to make your voice sound even better. Keep practicing and you'll get there!",
      "pitchin": "Your voice has a lovely quality, but it sounds like you’re not using enough breath support, so the tone doesn’t have much strength behind it yet. The biggest thing to work on is breath: keep your stomach pulled in while you sing instead of letting the air collapse out from the back. That will help the sound feel more stable and less held back. Also pay attention to vowel shapes—some of them seem a bit closed or narrow, which can make the tone feel smaller than it needs to be. Practice singing the same phrase with a more open, released vowel shape, then compare that to the original way you were singing. Keep the words clear, but let the vowel space open up more. For practice, try lip trills on easy phrases first. Aim for an even, steady stream of air all the way through the phrase without collapsing inward. Then sing the same phrase normally while keeping that same steady airflow feeling.",
      "note": "PitchIn points to weak breath support and closed vowels, matching one expert who ranked breath first and asked for vowel practice. Neither model mentions the unstable pitch and rhythm the experts also noted."
    },
    {
      "id": "case-02",
      "tab": "Breath over pitch",
      "title": "Breath over pitch",
      "audio": "assets/case-02.mp3",
      "pretrained": "Your singing sounds very clear and expressive, with good control over your voice. You have a wide range of notes and good intonation. However, there is room for improvement in terms of dynamics and breath control. Try to work on controlling your breath better during the high notes and adding more variation in your dynamics to make your performance more engaging. Overall, you have great potential as a singer and with some practice, you can achieve even greater success.",
      "pitchin": "Your pitch is generally in tune, so the notes are landing where they should for the most part. The area that needs the most attention is breath support: it sounds like you’re not getting enough air underneath the phrases, which makes the delivery feel less supported and less confident. Work on taking low, relaxed breaths before each phrase instead of grabbing quick little “bites” of air. Try “in for 4, hiss for 8–12” comfortably, then sing the same line at a soft volume first and repeat it at normal volume while keeping the airflow steady. Also practice holding notes longer with a steady tone rather than letting them fade early or rush through. That will help the pitch stay steadier and make your voice feel more reliable.",
      "note": "Both experts judged pitch as acceptable and ranked breath first, noting that single notes are not sustained. PitchIn makes the same call; the pretrained model praises intonation and potential with general advice."
    },
    {
      "id": "case-03",
      "tab": "Failure case",
      "title": "Failure case",
      "audio": "assets/case-03.mp3",
      "pretrained": "Your singing sounds clear but lacks emotion. To improve, focus on expressing the lyrics more deeply and using your voice effectively to convey the song's mood.",
      "pitchin": "Your tone comes across clear and pleasant, and you have good control of your breath. The area that needs the most attention is pitch: some notes drift sharp or flat, so the melody doesn’t always lock in cleanly. To improve, spend time on ear training and pitch accuracy exercises before worrying too much about style choices. Sing simple scales with a piano reference, then do slow 5-note scales with a tuner so you can hear when you go sharp or flat and correct immediately. Also practice sustaining a comfortable note with a tuner to build steadier pitch centering. Once those basics feel consistent, your clearer tone will come through more naturally.",
      "note": "PitchIn praises breath control, while the expert reference describes breath leakage and pitch flattening."
    }
  ],
  "citation": {
    "bibtex": "@unpublished{bang2026pitchin,\n  title = {PitchIn: Natural-Language Singing\n    Coaching from Unstructured Community\n    Feedback},\n  author = {Bang, Hayeon and Kim, Hounsu and\n    Park, Joonyong and Yu, Jung-Jae and\n    Nam, Juhan},\n  year = {2026},\n  note = {Manuscript}\n}"
  }
};
