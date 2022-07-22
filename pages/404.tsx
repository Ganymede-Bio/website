import React from 'react'
import ErrorPage from 'next/error'
import Header from './headers/Header'
import FooterSection from './section/FooterSection'

export default function Home() {
  return (
    <>
      <Header />
      <ErrorPage statusCode={404} />
      <FooterSection />
    </>
  )
}