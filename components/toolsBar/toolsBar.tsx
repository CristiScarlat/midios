import { Select } from 'antd'

const ToolsBar = ({handleChange, midiInputs, midiOutputs}: any) => {

    const { Option } = Select;

    return (
        <div>
            <Select defaultValue="Midi in" style={{ width: 120 }}  onChange={handleChange}>
                {midiInputs?.map((midiInput: any) => (
                    <Option value={midiInput.name}>{midiInput.name}</Option>
                ))}
            </Select>
            <Select defaultValue="Midi out" style={{ width: 120 }}  onChange={handleChange}>
                {midiOutputs?.map((midiOut: any) => (
                    <Option value={midiOut.name}>{midiOut.name}</Option>
                ))}
            </Select>
        </div>
    )
}

export default ToolsBar
