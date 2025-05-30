import { Switch } from "@headlessui/react";

function SwitchInput({ enabled, setEnabled }) {
    return (
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-primary' : 'bg-gray-300'}
  relative inline-flex h-10 w-20 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span
            aria-hidden={true}
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
    pointer-events-none inline-block h-9 w-10 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
    </Switch>
    )
}



export default SwitchInput;