import React, {
  ChangeEventHandler,
  EventHandler,
  MouseEventHandler,
} from 'react'

type Props = {
  label: string
  placeholder: string
  error?: string
  onChange: ChangeEventHandler
}

function AppInput({ label, placeholder, error, onChange }: Props) {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between mb-1">
          <label className="text-sm text-primary-marine_blue" htmlFor={label}>
            {label}
          </label>
          {error && (
            <p className="text-sm text-primary-strawberry_red">{error}</p>
          )}
        </div>
        <input
          className={`text-sm border p-2 w-full rounded-lg border-neutral-cool_gray hover:shadow-md hover:cursor-pointer focus:shadow-md shadow-neutral-cool_gray ${
            error && 'border-primary-strawberry_red'
          }`}
          type="text"
          name={label}
          id={label}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default AppInput
