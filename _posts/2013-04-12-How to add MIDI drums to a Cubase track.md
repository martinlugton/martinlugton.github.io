---
title: "How to add MIDI drums to a Cubase track"
date: 2013-04-12T09:15:00+00:00
permalink: /how-to-add-midi-drums-to-a-cubase-track
redirect_from:
  - /how-to-add-midi-drums-to-a-cubase-track/
---

*A quick guide to adding MIDI drums to a track in Cubase. Works with or without an external MIDI controller.*

Add an Instrument track, and select HALion Sonic SE.

![Add Instrument Track](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/add-instrument-track.png?raw=true)

Choose a drum kit using the dropdown in the first channel.

![Select Drum Kit 1](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/select-some-sort-of-drum-1.png?raw=true)

![Select Drum Kit 2](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/select-some-sort-of-drum-2.png?raw=true)

Close this window.

If you’re using a MIDI controller, make sure that it’s plugged in and that the input is set to your MIDI input, if you’re using one. (e.g. an AKAI LDP8 in my case)

![AKAI LPD8](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/akai-lpd8.jpg?raw=true)

(If you’re not using a MIDI input you can still record drums, either with the on-screen keyboard or by drawing/writing the notes: create a blank track using the pencil, and then click on it to open up the note editor. But do that after you’ve set up a drum map, to make your life easier.)

Now set a drum map on the left-hand panel – GM Map.

This replaces the generic MIDI piano roll with named parts of the drum kit – much more useful. It also shows which MIDI note they correspond to.

Before setting a drum map:

![Before Drum Map](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/before-drum-map.png?raw=true)

After:

![After Drum Map](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/after-drum-map.png?raw=true)

Open the HALion Sonic window up again.

Add the same drum instrument in channel 10 of the HALion Sonic. If you don’t do this you won’t get any sound after adding the drum map. (I have no idea why.)

![Add the Same Instrument to Channel 10](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/add-the-same-instrument-to-channel-10.png?raw=true)

Now you can either record live through your MIDI input, or you can program some percussion via your mouse.

### Bonus – change which notes your external MIDI device sends to Cubase

The following instructions are for my AKAI LPD8 but are probably quite generic.

Open the LPD8 Editor (a separate programme).

![One Set of MIDI Notes](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/one-set-of-midi-notes.png?raw=true)

![Second Set of MIDI Notes](https://github.com/martinlugton/martinlugton.github.io/blob/main/images/second-set-of-midi-notes.png?raw=true)

Create a new preset with the notes you’re interested in from the drum map.

Then save it and press ‘Commit – Upload’.

It’ll now be on your LPD8, ready to use in Cubase.