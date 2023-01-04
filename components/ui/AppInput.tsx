import React, {
  ChangeEventHandler,
  EventHandler,
  MouseEventHandler,
} from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
  error?: string
  onChange: ChangeEventHandler
}

function AppInput({ id, label, placeholder, error, onChange }: Props) {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between mb-1">
          <label className="text-sm text-primary-marine_blue" htmlFor={id}>
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
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default AppInput
