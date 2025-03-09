---
title: "How to record electric guitar using a Steinberg UR12 and Cubase AI"
permalink: /how-to-record-electric-guitar-using-steinberg-ur12-cubase-ai
date: 2017-12-29T20:48:16+00:00
redirect_from:
  - /how-to-record-electric-guitar-using-steinberg-ur12-cubase-ai/
---

* A quick guide to recording guitar through a Steinberg UR12 in the Cubase AI DAW. I produced this to help other people, and to remind myself in case I ever forget, because the Cubase software is not very intuitive.*

I’ll assume that you’ve plugged and installed in the Steinberg, installed the Cubase AI Software, and opened up Cubase AI.

Go to the ‘Devices’ menu dropdown at the top of the screen, then select ‘VST Connections’.

Go to the ‘Inputs’ tab and create a mono input using “Yamaha Steinberg USB ASIO” and “UR12 Input 2”.

![Cubase AI VST Connections controls - Input tab](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/setting-up-input-audio-bus-steinberg-ur-12-and-cubase.png)

Keep output as default on “Yamaha Steinberg USB ASIO” – i.e. Stereo speakers and Device Ports “UR12 Output L” and “UR12 Output R”.

![Steinberg UR-12 with guitar lead and headphones plugged in](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/Steinberg-UR-12-with-guitar-lead-plugged-in.jpg)

Plug your lead into the “Hi Z” input on the UR 12. (This is “Input 2”. The other one is for microphones.) Plug your headphones into the “Phones” socket on the right. (If you’re using 3.5mm headphones you’ll need a 3.5mm to 6.35mm adapter, as pictured above.)

Turn the Input 2 gain knob up to about 1/4 of the max.

Strum a bit, and you should see the Cubase Monitor show the input levels increase as you strum. If it’s flat-lining like in the below picture, check that you’re plugged in and that you’ve set up the input correctly. Play some low, loud palm-muted chords, and turn up the Input 2 gain until you get a red square appear above the blue input monitor. Click on the red square to make it disappear, and turn down the Input 2 gain a little. Your goal is to have it as high as possible without clipping.

![Cubase AI monitor showing no input](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/monitor-with-no-input.png)

Now left click in the audio panel, and select “Add audio track”

![menu for adding new tracks in Cubase AI](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/add-new-audio-track.png)

A popup with a load of options will appear. Ignore them and add the track.

![Cubase AI add audio track settings](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/add-audio-track-lots-of-settings-to-ignore.png)

Click on the speaker symbol next to this track. This will allow you to hear the input as you play. It’ll turn orange to show that the “Monitor” option is enabled.

![Audio track with Monitor option selected](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/Cubase-click-Monitor-to-hear-your-input.png)

Make sure to turn the ‘Output’ knob on the UR12 up a bit so you can actually hear it. At this point you should be able to play something on your guitar and hear it through your headphones from the UR-12.

If you’d like to add some amplifiers or other effects, go to “Inserts” on the left-hand “Inspector” and choose one. There are loads of free VST amplifiers and effects available.

Now let’s record something. To record audio from a track (e.g. “Audio 01” in the above image) you need to make sure that the record icon for that track is red. Cubase has a concept of an audio track being enabled or not enabled to record, and it just ignores it if it isn’t enabled.

Before you start recording, turn off the orange “Monitor” option. It’s useful for experimenting with a tone, but adds latency when recording so can mess up your timing. Use the “Direct Monitor” button on the front of the UR-12 box to send a dry (non-processed) signal back to you as you play.

To start recording, click on the recording circle near the top of the screen.

### Bonus – fixing audio distortion in Windows 10

There’s a bug with Windows 10 whereby you hear horribly distorted output.
The two most useful threads on the topic ([first](https://www.steinberg.net/forums/viewtopic.php?f=157&t=89056) and [second](https://www.steinberg.net/forums/viewtopic.php?f=157&t=91983)) suggest that it’s been an issue for a couple of years. The fix is downgrading from 1.96 to 1.95 of a key driver. To do this, uninstall “Yamaha Steinberg USB Driver” via Add/Remove Programs (not via Device Manager – it won’t fully get removed if you try this route.), then install [version 1.95](http://www.yamahaproaudio.com/global/en/downloads/firmware_software/yamaha_steinberg_usb_driver/yamaha_steinberg_usb_driver_195_win64.jsp) of the driver.

### Bonus – gain screen space by removing VST Instruments and Media Bay

I don’t know what these do, so I’ve hidden them. To do this, click on the button of three rectangles, just under the “File” menu. Then uncheck “racks”.

![Cubase before removing VST instruments and racks](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/Cubase-before-removing-VST-instruments-and-racks.png)

![Cubase disabling racks and VST instruments panel](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/Cubase-disabling-racks-and-VST-instruments-panel-e1518964190.png)

![Cubase more room to breathe](How%20to%20record%20electric%20guitar%20using%20a%20Steinberg%20UR12%20and%20Cubase%20AI%20%E2%80%93%20Martin%20Lugton_files/Cubase-more-room-to-breathe.png)