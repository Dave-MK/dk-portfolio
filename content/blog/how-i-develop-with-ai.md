---
title: "How I Develop with AI"
date: "2026-06-23"
description: "AI hasn't replaced my judgment — it's changed where I spend it. An honest look at how I actually use AI tools in a real front-end development workflow."
tags: ["AI", "Workflow", "Development", "Productivity"]
---

## The Honest Version

Most writing about AI in development falls into one of two camps: breathless hype ("it writes all my code now!") or defensive dismissal ("real developers don't need it"). Neither matches how I actually use it.

The truth is more mundane and more interesting. AI has changed *where* I spend my attention, not *whether* I need attention. The thinking is still mine. The judgment is still mine. What's changed is how much time I spend on the parts that weren't really thinking to begin with.

## What I Use

My main tools are **Claude** for reasoning, drafting, and reviewing code, and **GitHub Copilot** for in-editor autocomplete. They serve different purposes and I treat them differently.

Copilot is ambient. It fills in boilerplate, completes patterns it recognises, and saves me from typing things I already know. I accept about a third of its suggestions. The rest I ignore or actively work against.

Claude is deliberate. I go to it with specific questions, specific problems, or specific documents I want to think through out loud. It's closer to a senior colleague I can ask a dumb question to at 11pm than to a code generator.

## Where It Genuinely Helps

**Boilerplate and scaffolding.** The structural parts of a component — the type definitions, the prop interface, the initial JSX skeleton — are largely mechanical. AI is good at these because they're pattern-completion, not problem-solving. I still review everything, but I'm not starting from a blank file.

**Catching what I'm too close to see.** When I've been staring at a component for an hour, I'll paste it in and ask "what's wrong with this?" or "what would make this break?" The answer is usually something I already knew and wasn't seeing. Having it reflected back is useful.

**Exploring unfamiliar territory.** I used the Resend API for the contact form on this site. I'd never touched it before. Rather than reading through the full documentation cold, I described what I was trying to do and got a working starting point in a few minutes. Then I read the docs to understand what I'd been given. That order — working example first, documentation second — suits the way I learn.

**Prose and copy.** Blog posts, case study descriptions, CV text. I write the first draft, then use AI to tighten it. Or I describe what I want to say and use the output as a scaffold to rewrite from. The final words are mine, but the editing loop is faster.

## Where I Don't Use It

**Design decisions.** What the component should look like, how the layout should feel, what the hierarchy should communicate — AI has opinions on these but they're not useful ones. Design judgment comes from looking at a lot of design, knowing your user, and having taste. You can't prompt your way to that.

**Architecture decisions.** How state should be structured, where data should live, what the component boundary should be — these are the decisions that compound over the life of a project. Getting them wrong early costs more than it saves. I think these through myself.

**Anything I don't understand.** This is the important one. If I paste a block of code I can't read and ask AI to fix it, I might end up with working code I still can't read — and now I have a new dependency I can't debug. I only use AI on code I understand or am actively learning.

## The Workflow in Practice

A realistic session looks something like this:

1. I know what I want to build. I write the component structure myself — the component name, the props, the main logic flow.
2. Copilot fills in the repetitive parts as I type. I accept some, skip others.
3. I hit a specific problem — a TypeScript type I can't get right, a CSS behaviour that's not doing what I expect. I ask Claude, describe the context, get an answer. I read it, understand it, then apply it (usually differently from how it was suggested).
4. When the component is done, I ask for a quick review: "what could go wrong here, what have I missed?" Sometimes nothing useful comes back. Sometimes there's a real edge case I'd overlooked.
5. I write the commit message myself. This sounds trivial but it matters — the discipline of explaining what changed and why forces a clarity check on my own thinking.

## What It Hasn't Changed

The parts of development I find genuinely hard — and genuinely interesting — are unchanged:

- Deciding what to build and why
- Figuring out what a user actually needs versus what they asked for
- Making something feel right, not just work
- Knowing when something is good enough to ship

These are judgment calls. AI can inform them but not make them. And they're still where most of the time goes.

## The Concern I Do Have

The risk I think about is skill atrophy in the places I lean on AI most. If I let Copilot write all my TypeScript types, will I get worse at writing TypeScript types? Probably, slowly, yes.

My mitigation is deliberate: I write certain things from scratch on purpose, even when I don't have to. I read code before I use it. I learn the underlying concept before I let the tool apply it. It's slightly slower. It's worth it.

The goal isn't to use AI as little as possible. It's to stay the person who knows what good looks like — and can tell when the machine got it wrong.
