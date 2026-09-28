export const letters = [
  {
    id: 'happy',
    number: '01',
    title: "Open when you're happy",
    mood: 'a little celebration',
    tone: 'joy',
    paragraphs: [
      "Look at you, having a good day. I hope you let yourself enjoy every bit of it, without looking for a reason to make it smaller.",
      "Seeing you happy makes me happy too. Thank you for letting me be a little part of the good things. I hope there are many more days like this, and I get to hear about every one.",
    ],
    signature: 'Keep this feeling close, okay?',
    media: {
      scene: 'sunny',
      alt: 'A photo spot for a favorite happy memory',
      caption: 'a little piece of a good day',
    },
    song: {
      href: 'https://www.youtube.com/watch?v=zehfwsvIjGA',
      label: 'Play our song on YouTube',
    },
  },
  {
    id: 'sad',
    number: '02',
    title: "Open when you're sad",
    mood: 'no need to rush through it',
    tone: 'comfort',
    paragraphs: [
      "Hey, I guess today hasn't been the best for you if you've opened this. Just take it easy and don't be too hard on yourself. You don't have to be okay all the time.",
      "I hope things feel a little better soon. And if you ever feel like talking, I'm here. Take care of yourself, okay?",
    ],
    signature: "I'm here. ❤️",
    interaction: {
      label: 'Stay here for a moment',
      replies: ['You do not have to solve today right now. Just stay for a breath. I am still right here.'],
    },
    media: {
      scene: 'soft-sky',
      alt: 'A photo spot for a comforting memory',
      caption: 'something gentle to come back to',
    },
  },
  {
    id: 'miss',
    number: '03',
    title: 'Open when you miss me',
    mood: 'a little closer, from here',
    tone: 'longing',
    paragraphs: [
      'Ahhhh... so you miss me? 😆',
      'If you miss me, just know that I probably miss you too. You don’t always have to say it, but I hope you know I’m thinking about you too.',
      "I know I'm not always there, but I'm never really that far away. ❤️",
    ],
    signature: 'Until next time.',
    interaction: {
      label: 'Remember this?',
      replies: ['A little memory belongs here. Add the place, day, or inside joke you both remember.'],
    },
    media: {
      scene: 'postcard',
      alt: 'A photo spot for a favorite shared memory',
      caption: 'wish you were here (or maybe you were)',
    },
  },
  {
    id: 'sleep',
    number: '04',
    title: "Open when you can't sleep",
    mood: 'for the too-late hours',
    tone: 'night',
    paragraphs: [
      'Still awake? 😭',
      "Don't overthink things too much, okay? Get comfortable, put your phone away for a bit, and let yourself relax. You don't have to figure everything out tonight.",
      'Hopefully by the time you finish reading this, you’ll be a little closer to falling asleep. Goodnight, sleepyhead. 🤍',
    ],
    signature: 'The rest can wait until tomorrow.',
    interaction: {
      label: 'A tiny bedtime reminder',
      replies: ['Unclench your jaw. Let your shoulders drop. Nothing else needs your attention for this one quiet minute.'],
    },
  },
  {
    id: 'overthinking',
    number: '05',
    title: "Open when you're overthinking",
    mood: 'one thought at a time',
    tone: 'grounding',
    paragraphs: [
      "Stop thinking so much for a minute or you'll start balding 😭. I know that's easier said than done, but not everything needs to be figured out right now.",
      "Take a breath and give your mind a little break. Whatever it is, you'll deal with it when you need to. For now, just relax a little, okay? 🤍",
    ],
    signature: 'You can come back to this later.',
    interaction: {
      label: 'Take a breath',
      replies: ['Breathe in slowly.', 'Let it out. Look around and name one thing you can see.', 'One more breath. You are here, and that is enough for right now.'],
    },
  },
  {
    id: 'motivation',
    number: '06',
    title: 'Open when you need motivation',
    mood: 'small steps still count',
    tone: 'encouragement',
    paragraphs: [
      "Hey, just a little reminder that you can do this. You might not feel motivated right now, and that's okay. Just start with one small thing and take it from there.",
      "Don't worry about getting everything right. Just do your best and keep going. I believe in you. ❤️",
    ],
    signature: 'I’m in your corner.',
    interaction: {
      label: 'Give me one more reason',
      replies: ['Because you have made it through days you thought you could not.', 'Because the way you keep showing up matters, even when nobody sees it.', 'Because you deserve to see what happens when you keep going.'],
    },
  },
  {
    id: 'angry',
    number: '07',
    title: "Open when you're angry",
    mood: 'you’re allowed to feel it',
    tone: 'frustration',
    paragraphs: [
      "Hey, I know you're angry right now, and that's okay. You don't have to pretend you're fine.",
      "Take some time to cool down and let it out if you need to. You don't have to figure everything out right away. Just don't forget to breathe, drink some water, and take care of yourself. You'll feel a little better eventually. 🤍",
      "And if you're angry at me, hehe... It's probably because of some dumb thing my dumbass said. I'm very sorry 😭 You're always welcome to smack me to your heart's content. No knives though, please 🙏",
    ],
    signature: 'I’ll give you space. I’m still here.',
    interaction: {
      label: 'Still angry?',
      replies: ["Okay. I'll give you another minute.", 'Fair enough. I’m still here though.'],
    },
  },
  {
    id: 'smile',
    number: '08',
    title: 'Open when you need to smile',
    mood: 'this is a very serious smile request',
    tone: 'playful',
    paragraphs: [
      'Okay, this is your reminder to smile. Yes, right now. 😌',
      "I don't care what you're doing, just try to think of a happy memory.",
      'And if that didn’t work… fine, think back to the time when you said “Asaaaa... close your eyesssss...Now sleep”.',
      'Hope you’re smiling again. ❤️',
    ],
    signature: 'There. I knew it.',
    interaction: {
      label: 'Make me laugh',
      replies: ['Memory #1: add the story that still makes you both laugh.', 'Memory #2: add the screenshot or ridiculous photo that belongs here.'],
    },
    media: {
      scene: 'snapshot',
      alt: 'A photo spot for a funny shared moment',
      caption: 'evidence that we are both a little silly',
    },
  },
  {
    id: 'hug',
    number: '09',
    title: 'Open when you need a hug',
    mood: 'no words required',
    tone: 'hug',
    paragraphs: [
      "If you need a hug right now, first close your eyes, picture me in front of you, then replace my face with Jung Kook's and imagine the hug 😋",
      'No talking, no questions, just a quiet hug until you feel a little better. ❤️',
    ],
    signature: 'Stay for as long as you need.',
    interaction: { type: 'hug', label: 'Hold for a hug' },
    media: {
      scene: 'warmth',
      alt: 'A photo spot for a favorite close-up memory',
      caption: 'saving you a little space right here',
    },
  },
  {
    id: 'feelings',
    number: '10',
    title: 'Open when you want to know how I feel',
    mood: 'the honest version',
    tone: 'heartfelt',
    paragraphs: [
      'So you want to know how I feel 🌚? I’ll keep it here in case you forget again.',
      "I don't always know how to put how I feel into words, but I hope you know that you mean a lot to me.",
      'I genuinely care about you, and having you in my life makes things better. I like talking to you, laughing with you even if most of the time it’s “laughing at me” hahaha, and just knowing that you’re there.',
      "I might not always say it, but you're important to me. More than you probably realize. ❤️",
    ],
    signature: 'That’s how I feel. Always.',
    media: {
      scene: 'favorite',
      alt: 'A photo spot for a meaningful shared memory',
      caption: 'one of my favorite versions of us',
    },
  },
];

export const finalLetter = {
  title: 'One last thing',
  paragraphs: [
    'If you made it all the way through, I hope at least one of these little notes found you at the right time.',
    'You can come back whenever you need a reminder that someone is thinking of you. There will always be a little space for you here.',
  ],
  signature: 'Made with you in mind. ❤️',
};