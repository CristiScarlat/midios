import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { initMidi, listMidiPorts } from '../utils/midi'
import { Ctx } from '../context/context'
import ToolsBar from '../components/toolsBar/toolsBar'

interface midiIO {
    type: 'input' | 'output'
    id: string
    manufacturer: string
    name: string
    version: string
}

const Home: NextPage = () => {
    const [midiInputs, setMidiInputs] = useState<midiIO[] | undefined>()
    const [midiOutputs, setMidiOutputs] = useState<midiIO[] | undefined>()
    //@ts-ignore
    const { authUser } = React.useContext(Ctx)

    useEffect(() => {
        initMidi().then(() => {
            const midiAccess = listMidiPorts()
            const inputs: midiIO[] = []
            const outputs: midiIO[] = []
            for (const entry of midiAccess.inputs) {
                const input = entry[1]
                inputs.push({
                    type: input.type,
                    id: input.id,
                    manufacturer: input.manufacturer,
                    name: input.name,
                    version: input.version,
                })
            }

            for (const entry of midiAccess.outputs) {
                const output = entry[1]
                outputs.push({
                    type: output.type,
                    id: output.id,
                    manufacturer: output.manufacturer,
                    name: output.name,
                    version: output.version,
                })
            }
            setMidiInputs(inputs)
            setMidiOutputs(outputs)
        })
    }, [])

    console.log(midiInputs, midiOutputs)

    return <div>
      <ToolsBar midiInputs={midiInputs} midiOutputs={midiOutputs}/>
    </div>
}

export default Home
