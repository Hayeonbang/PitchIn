window.PITCHIN_CONTENT = {
  "authors": [
    {
      "name": "Hayeon Bang",
      "affiliation": "1"
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
      "tab": "Pitch accuracy",
      "title": "Pitch accuracy",
      "audio": "assets/case-01.mp3",
      "pretrained": "Your singing has a rich tone and good pitch. To enhance your performance, focus on breath control to maintain consistent volume throughout the song, and work on articulation for clearer enunciation of words. Additionally, consider practicing with a metronome to improve your tempo accuracy.",
      "pitchin": "Your tone comes across very nice and pleasant to listen to, so the basic sound is working well for you. The part that needs the most attention is pitch: there are moments where the notes drift sharp or flat, which makes some phrases feel less settled than they could. For improvement, focus on ear training and pitch accuracy rather than trying to change your natural tone too much. Use a tuner with a piano app, play single notes, match them, and repeat until you can consistently land in tune. You can also practice slow scales daily and do simple ear exercises like matching pitch from ear to ear before singing full lines again.",
      "note": "PitchIn identifies pitch drift and suggests tuner practice, partially agreeing with experts who noted frequent pitch drops."
    },
    {
      "id": "case-02",
      "tab": "Breath and phrasing",
      "title": "Breath and phrasing",
      "audio": "assets/case-02.mp3",
      "pretrained": "Your voice sounds beautiful! You have a natural talent for singing. To further enhance your skills, consider taking vocal lessons to refine your technique and learn proper breathing techniques. Additionally, practice regularly and listen to a variety of music genres to expand your range and expressiveness.",
      "pitchin": "Your tone is pleasant, but the pitch sounds inconsistent, especially when you go higher. You also seem to run out of air quickly, so the breath support isn’t staying steady enough for the phrases. To improve, spend time on breathing: inhale comfortably, then do gentle lip trills or sustained notes while keeping the airflow even instead of pushing. That should help your higher notes feel less forced and make the pitch more stable.",
      "note": "PitchIn links pitch and breath observations to practice; its explanation of the high notes remains unverified."
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
