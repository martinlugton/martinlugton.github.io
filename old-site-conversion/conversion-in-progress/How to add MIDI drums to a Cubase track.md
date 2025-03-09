---
title: "How to add MIDI drums to a Cubase track"
date: 2013-04-12T09:15:00+00:00
permalink: /how-to-add-midi-drums-to-a-cubase-track
redirect_from:
  - /how-to-add-midi-drums-to-a-cubase-track/
---

# How to add MIDI drums to a Cubase track

* A quick guide to adding MIDI drums to a track in Cubase. Works with or without an external MIDI controller.*

Add an Instrument track, and select HALion Sonic SE.

![Add Instrument Track](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/add-instrument-track.png)

Choose a drum kit using the dropdown in the first channel.

![Select Drum Kit 1](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/select-some-sort-of-drum-1.png)

![Select Drum Kit 2](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/select-some-sort-of-drum-2.png)

Close this window.

If you’re using a MIDI controller, make sure that it’s plugged in and that the input is set to your MIDI input, if you’re using one. (e.g. an AKAI LDP8 in my case)

![AKAI LPD8](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/akai-lpd8.jpg)

(If you’re not using a MIDI input you can still record drums, either with the on-screen keyboard or by drawing/writing the notes: create a blank track using the pencil, and then click on it to open up the note editor. But do that after you’ve set up a drum map, to make your life easier.)

Now set a drum map on the left-hand panel – GM Map.

This replaces the generic MIDI piano roll with named parts of the drum kit – much more useful. It also shows which MIDI note they correspond to.

Before setting a drum map:

![Before Drum Map](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/before-drum-map.png)

After:

![After Drum Map](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/after-drum-map.png)

Open the HALion Sonic window up again.

Add the same drum instrument in channel 10 of the HALion Sonic. If you don’t do this you won’t get any sound after adding the drum map. (I have no idea why.)

![Add the Same Instrument to Channel 10](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/add-the-same-instrument-to-channel-10.png)

Now you can either record live through your MIDI input, or you can program some percussion via your mouse.

### Bonus – change which notes your external MIDI device sends to Cubase

The following instructions are for my AKAI LPD8 but are probably quite generic.

Open the LPD8 Editor (a separate programme).

![One Set of MIDI Notes](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/one-set-of-midi-notes.png)

![Second Set of MIDI Notes](How%20to%20add%20MIDI%20drums%20to%20a%20Cubase%20track%20%E2%80%93%20Martin%20Lugton_files/second-set-of-midi-notes.png)

Create a new preset with the notes you’re interested in from the drum map.

Then save it and press ‘Commit – Upload’.

It’ll now be on your LPD8, ready to use in Cubase.