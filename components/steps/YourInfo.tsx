import React, { ChangeEventHandler, useState } from 'react'
import dynamic from 'next/dynamic'

const AppInput = dynamic(() => import('../ui/AppInput'))

function YourInfo() {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [phone, setPhone] = useState<string | undefined>(undefined)
  const [emailError, setEmailError] = useState<string | undefined>(undefined)
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined)

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    email
      ? String(email).match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? setEmailError(undefined)
        : setEmailError('Wrong email address.')
      : undefined
  }

  const validatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
    phone
      ? String(phone).match(/^\d+$/)
        ? setPhoneError(undefined)
        : setPhoneError('Wrong phone number.')
      : undefined
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2 text-2xl font-bold text-primary-marine_blue">
          Personal info
        </h1>
        <p className="mb-6 text-neutral-cool_gray">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col space-y-4">
          <AppInput
            id="name"
            label="Name"
            placeholder="e.g. Stephen King"
            error={undefined}
            onChange={() => console.log('change')}
          />
          <AppInput
            id="email"
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            error={emailError}
            onChange={validateEmail}
          />
          <AppInput
            id="phone"
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            error={phoneError}
            onChange={validatePhone}
          />
        </div>
      </div>
    </>
  )
}

export default YourInfo
