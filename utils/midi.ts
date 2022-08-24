
let midi: any = null;

export const initMidi = () =>
  new Promise((resolve, reject) => {
    if (navigator.requestMIDIAccess) {
      const onMIDISuccess = (midiAccess: WebMidi.MIDIAccess) => {
        if (midi) {
          resolve(midi);
          return;
        }
        midi = midiAccess;
        resolve(midiAccess);
      }
      const onMIDIFailure = (msg: string) => {
        console.log("Failed to get MIDI access - " + msg);
        reject("Failed to get MIDI access - " + msg);
      }
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else reject("Browser does not suport midi");
  });

export const listMidiPorts = () => {
  const inputs = Array.from(midi.inputs);
  const outputs = Array.from(midi.outputs);
  return { inputs, outputs };
};

export const setSelectedMidiPort = (portName: string, cb: () => void) => {
  midi.inputs.forEach((input: WebMidi.MIDIInput) => {
    if (input.name === portName) {
      input.onmidimessage = cb;
    }
  });
};
