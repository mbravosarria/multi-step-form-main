import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { StepsProvider } from '../contexts/steps/step.context'
import { PlansProvider } from '../contexts/plans/plan.context'
import StepContent from '../components/StepContent'

const SideBar = dynamic(() => import('../components/SideBar'))
const BottomBar = dynamic(() => import('../components/BottomBar'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Multi-step form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </Head>
      <StepsProvider>
        <PlansProvider>
          <div className="flex flex-col justify-between md:justify-center items-center h-screen">
            <div className="flex justify-center md:hidden h-[30%] w-full bg-sidebar_mobile bg-cover bg-no-repeat bg-center">
              <SideBar />
            </div>
            <div className="flex absolute top-32 md:top-0 md:relative flex-col md:flex-row h-auto md:h-[70%] w-[90%] md:w-[52.5%] p-2 md:p-5 bg-neutral-white rounded-lg shadow-xl">
              <div className="hidden md:flex w-1/4 p-5 rounded-lg shadow-xl bg-sidebar_desktop bg-cover bg-no-repeat bg-center">
                <SideBar />
              </div>

              <div className="flex md:w-3/4">
                <div className="flex flex-col justify-between w-full mt-2 md:mx-14">
                  <div className="mx-4 h-full">
                    <StepContent />
                  </div>
                  <div className="hidden md:flex w-full py-4">
                    <BottomBar />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden h-[10%] w-full">
              <BottomBar />
            </div>
          </div>
        </PlansProvider>
      </StepsProvider>
    </>
  )
}
