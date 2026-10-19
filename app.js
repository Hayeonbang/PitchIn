'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const content = window.PITCHIN_CONTENT;
  if (!content?.examples?.length) {
    $('example-panel').textContent = 'The audio examples could not be loaded. Please reload the page.';
    return;
  }
  const element = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  for (const person of content.authors) {
    const author = element('span', 'author');
    let name = document.createTextNode(person.name);
    if (person.url) {
      name = element('a', '', person.name);
      name.href = person.url;
    }
    author.append(name, element('sup', '', person.affiliation));
    $('authors').append(author);
  }
  $('authors').append(element('p', '', content.affiliations));
  $('case-question').textContent = content.demo.question;
  const demoURL = new URL(content.demo.url);
  if (demoURL.protocol === 'https:') $('demo-link').href = demoURL.href;
  $('citation').textContent = content.citation.bibtex;

  let activeIndex = 0;
  function showExample(index, focus = false) {
    activeIndex = index;
    const example = content.examples[index];
    const audio = $('case-audio');
    audio.pause();
    $('audio-error').hidden = true;
    audio.src = example.audio;
    audio.load();
    audio.setAttribute('aria-label', `${example.title} — singing recording`);
    $('case-title').textContent = example.title;
    $('pretrained-response').textContent = example.pretrained;
    $('pitchin-response').textContent = example.pitchin;
    $('pretrained-response').scrollTop = 0;
    $('pitchin-response').scrollTop = 0;
    $('case-note').textContent = example.note;
    $('example-panel').setAttribute('aria-labelledby', `example-tab-${index}`);
    document.querySelectorAll('[role="tab"]').forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    if (focus) $(`example-tab-${index}`).focus();
  }
  content.examples.forEach((example, index) => {
    const tab = element('button', '', example.tab);
    tab.type = 'button';
    tab.id = `example-tab-${index}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', 'example-panel');
    tab.addEventListener('click', () => showExample(index));
    $('example-tabs').append(tab);
  });
  $('example-tabs').addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (activeIndex + 1) % content.examples.length;
    else if (event.key === 'ArrowLeft') next = (activeIndex + content.examples.length - 1) % content.examples.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = content.examples.length - 1;
    else return;
    event.preventDefault();
    showExample(next, true);
  });
  $('case-audio').addEventListener('error', () => { $('audio-error').hidden = false; });
  showExample(0);

  const frame = $('gradio-demo');
  const status = $('embed-status');
  if (content.demo.embedUrl) {
    const embedURL = new URL(content.demo.embedUrl);
    if (embedURL.protocol === 'https:') {
      frame.src = embedURL.href;
      window.addEventListener('message', event => {
        if (event.source !== frame.contentWindow || event.origin !== embedURL.origin) return;
        if (event.data?.type === 'pitchin-embed-height' && Number.isFinite(event.data.height)) {
          frame.style.height = `${Math.min(2600, Math.max(400, event.data.height))}px`;
          status.hidden = true;
        }
      });
      frame.addEventListener('load', () => { status.hidden = true; });
    }
  } else {
    frame.remove();
    status.textContent = 'The live demo is being prepared for public access.';
    status.classList.add('demo-pending');
    document.querySelector('.demo-fallback').hidden = true;
  }

  let copyReset;
  $('copy-citation').addEventListener('click', async () => {
    const button = $('copy-citation');
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(content.citation.bibtex);
      else {
        const area = element('textarea');
        area.value = content.citation.bibtex;
        area.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        button.focus();
        if (!ok) throw new Error('Clipboard unavailable');
      }
      button.textContent = 'Copied';
      $('citation-copy-status').textContent = 'Copied to clipboard.';
      clearTimeout(copyReset);
      copyReset = setTimeout(() => {
        button.textContent = 'Copy';
        $('citation-copy-status').textContent = '';
      }, 2500);
    } catch {
      $('citation-copy-status').textContent = 'Select the citation text to copy it manually.';
    }
  });
})();
