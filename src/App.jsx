import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Heart, Mail, Music2, Sparkles, X } from 'lucide-react';
import { finalLetter, letters } from './data/letters.js';

const openedStorageKey = 'open-when-opened-letters-v1';

function getOpenedLetters() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(openedStorageKey) ?? '[]');
    return Array.isArray(saved) ? saved.filter((id) => letters.some((letter) => letter.id === id)) : [];
  } catch {
    return [];
  }
}

function PhotoPlaceholder({ media, large = false }) {
  return (
    <figure className={`photo-frame${large ? ' photo-frame--large' : ''}`}>
      <div className={`photo-scene photo-scene--${media?.scene ?? 'sunny'}${media?.src ? ' photo-scene--with-image' : ''}`} role="img" aria-label={media?.alt ?? 'Replaceable photo placeholder'}>
        {media?.src ? <img src={media.src} alt="" loading="lazy" /> : <>
          <span className="photo-scene__sun" />
          <span className="photo-scene__hill photo-scene__hill--back" />
          <span className="photo-scene__hill photo-scene__hill--front" />
          <span className="photo-scene__placeholder">your photo here</span>
        </>}
      </div>
      <figcaption>{media?.caption ?? 'a memory goes here'}</figcaption>
    </figure>
  );
}

function Envelope({ letter, opened, onOpen }) {
  return (
    <button className={`envelope envelope--${letter.tone}`} onClick={onOpen} aria-label={`${letter.title}${opened ? ', opened' : ''}`}>
      <span className="envelope__number">{letter.number}</span>
      <span className="envelope__title">{letter.title}</span>
      <span className="envelope__mood">{letter.mood}</span>
      <span className="envelope__seal" aria-hidden="true"><Heart size={15} strokeWidth={1.8} /></span>
      {opened && <span className="envelope__opened"><Check size={12} /> opened</span>}
    </button>
  );
}

function LetterDialog({ letter, onClose }) {
  const [replyIndex, setReplyIndex] = useState(-1);
  const [hugging, setHugging] = useState(false);
  const [hugged, setHugged] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function revealReply() {
    const count = letter.interaction?.replies?.length ?? 0;
    setReplyIndex((current) => Math.min(current + 1, count - 1));
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className={`letter-dialog letter-dialog--${letter.tone}${hugging ? ' letter-dialog--hugging' : ''}`} role="dialog" aria-modal="true" aria-labelledby="letter-title">
        <button className="icon-button letter-dialog__close" onClick={onClose} aria-label="Close letter"><X size={20} /></button>
        <div className="letter-dialog__paper">
          <div className="letter-dialog__topline"><span>LETTER {letter.number}</span><span>OPEN WHEN</span></div>
          <p className="letter-dialog__mood">{letter.mood}</p>
          <h2 id="letter-title">{letter.title}</h2>
          <div className="letter-dialog__body">
            {letter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {letter.media && <PhotoPlaceholder media={letter.media} />}
          {letter.interaction && (
            <div className="letter-interaction">
              {letter.interaction.type === 'hug' ? (
                <>
                  <div className={`hug-heart${hugging ? ' hug-heart--active' : ''}`} aria-hidden="true"><Heart fill="currentColor" size={25} /></div>
                  <button
                    className="text-button"
                    onPointerDown={() => setHugging(true)}
                    onPointerUp={() => { if (hugging) { setHugging(false); setHugged(true); } }}
                    onPointerLeave={() => { if (hugging) { setHugging(false); setHugged(true); } }}
                    onKeyDown={(event) => { if (event.key === ' ' || event.key === 'Enter') setHugging(true); }}
                    onKeyUp={(event) => { if (event.key === ' ' || event.key === 'Enter') { setHugging(false); setHugged(true); } }}
                  >{hugging ? 'I’ve got you…' : hugged ? 'Okay. One more.' : letter.interaction.label}</button>
                </>
              ) : (
                <>
                  <button className="text-button" onClick={revealReply}>
                    {replyIndex < 0 ? letter.interaction.label : replyIndex === letter.interaction.replies.length - 1 ? 'Keep this with you' : 'One more little thing'}
                    <ArrowRight size={15} />
                  </button>
                  {replyIndex >= 0 && <p className="letter-interaction__reply" aria-live="polite">{letter.interaction.replies[replyIndex]}</p>}
                </>
              )}
            </div>
          )}
          {letter.song && (
            <a className="song-link" href={letter.song.href} target="_blank" rel="noreferrer">
              <span className="song-link__icon"><Music2 size={17} /></span>
              <span><strong>For this kind of day</strong><small>{letter.song.label}</small></span>
              <ArrowRight size={16} />
            </a>
          )}
          <p className="letter-dialog__signature">{letter.signature}</p>
        </div>
      </section>
    </div>
  );
}

function NoteDialog({ onClose, title, paragraphs, signature }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="letter-dialog note-dialog" role="dialog" aria-modal="true" aria-labelledby="note-title">
        <button className="icon-button letter-dialog__close" onClick={onClose} aria-label="Close note"><X size={20} /></button>
        <div className="letter-dialog__paper">
          <p className="letter-dialog__mood">just between us</p>
          <h2 id="note-title">{title}</h2>
          <div className="letter-dialog__body">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <p className="letter-dialog__signature">{signature}</p>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('welcome');
  const [opened, setOpened] = useState(getOpenedLetters);
  const [activeLetter, setActiveLetter] = useState(null);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(openedStorageKey, JSON.stringify(opened));
  }, [opened]);

  function openLetter(letter) {
    setOpened((current) => current.includes(letter.id) ? current : [...current, letter.id]);
    setActiveLetter(letter);
  }

  const allOpened = opened.length === letters.length;

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={(event) => { event.preventDefault(); setScreen('welcome'); }} aria-label="Open When, back to the beginning">
          <span className="wordmark__seal"><Mail size={16} /></span>
          <span>open when<span className="wordmark__period">.</span></span>
        </a>
        <span className="header-note">a little something, just for you</span>
        {screen === 'room' && <button className="secret-stamp" onClick={() => setActiveNote({ title: 'P.S. A tiny secret', paragraphs: ['If you found this, you notice the little things. I think that is one of my favorite things about you.'], signature: 'Here’s a little extra just because. ✨' })} aria-label="Open a tiny secret note" title="A little hidden note"><Sparkles size={17} /></button>}
      </header>

      {screen === 'welcome' ? (
        <main className="welcome" id="top">
          <section className="welcome-copy">
            <p className="eyebrow"><span className="eyebrow__line" /> A small collection, made for you</p>
            <h1>For every<br />kind of <em>day.</em></h1>
            <p className="welcome-copy__intro">I made something for you. Not because you need it, just because I wanted you to have a little place to come whenever you need it.</p>
            <p className="welcome-copy__aside">Take your time. Open whatever you need.</p>
            <button className="primary-button" onClick={() => setScreen('room')}>Open the letters <ArrowRight size={17} /></button>
            <span className="welcome-copy__footnote">ten little notes · open in any order</span>
          </section>
          <aside className="welcome-art" aria-label="A replaceable photo placeholder in a scrapbook frame">
            <span className="art-doodle art-doodle--star" aria-hidden="true">✳</span>
            <span className="art-note">keep this close</span>
            <div className="hero-polaroid">
              <PhotoPlaceholder large media={{ scene: 'sunny', alt: 'Replace this placeholder with a favorite photograph', caption: 'a little reminder of a good day' }} />
              <span className="hero-polaroid__tape" aria-hidden="true" />
            </div>
            <span className="art-doodle art-doodle--heart" aria-hidden="true">♡</span>
            <span className="postmark">MADE<br />WITH<br />CARE</span>
          </aside>
          <div className="welcome-bottom"><span>OPEN WHEN</span><span>01 — 10</span></div>
        </main>
      ) : (
        <main className="letter-room" id="top">
          <div className="room-intro">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Your little letter room</p>
              <h1>What kind of day<br />is it <em>today?</em></h1>
              <p className="room-intro__copy">Pick whichever envelope feels right. There’s no order to these.</p>
            </div>
            <div className="progress-note" aria-label={`${opened.length} of ${letters.length} letters opened`}>
              <span className="progress-note__count">{String(opened.length).padStart(2, '0')} <i>/ {letters.length}</i></span>
              <span className="progress-note__label">letters opened</span>
              <span className="progress-track"><span style={{ width: `${(opened.length / letters.length) * 100}%` }} /></span>
            </div>
          </div>
          <section className="envelope-grid" aria-label="Choose a letter">
            {letters.map((letter) => <Envelope key={letter.id} letter={letter} opened={opened.includes(letter.id)} onOpen={() => openLetter(letter)} />)}
          </section>
          <section className={`final-note${allOpened ? ' final-note--unlocked' : ''}`}>
            <span className="final-note__mark"><Sparkles size={19} /></span>
            <div><p className="final-note__eyebrow">A note for the very end</p><h2>{allOpened ? 'You opened them all.' : 'There’s one last note waiting.'}</h2><p>{allOpened ? 'Whenever you’re ready, there’s one more thing.' : `It’ll be here when you’ve opened all ten. ${letters.length - opened.length} to go.`}</p></div>
            <button className="final-note__button" disabled={!allOpened} onClick={() => setActiveNote(finalLetter)} aria-label="Open the final note" title={allOpened ? 'Open the final note' : 'Open all ten letters to unlock'}>
              <ArrowRight size={19} />
            </button>
          </section>
          <footer className="room-footer"><span>made with care, for you</span><button onClick={() => setScreen('welcome')}><ArrowLeft size={14} /> back to the beginning</button></footer>
        </main>
      )}

      {screen === 'welcome' && <footer className="welcome-footer"><span>just a little place for you</span><span>take what you need, leave the rest</span></footer>}
      {activeLetter && <LetterDialog key={activeLetter.id} letter={activeLetter} onClose={() => setActiveLetter(null)} />}
      {activeNote && <NoteDialog title={activeNote.title} paragraphs={activeNote.paragraphs} signature={activeNote.signature} onClose={() => setActiveNote(null)} />}
    </div>
  );
}

export default App;