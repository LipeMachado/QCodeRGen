"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function QRCodeGenerator() {
  return (
    <>
      <div className='relative z-10 mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full '>
        <Card className='flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl'>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-center text-[#037fff]'>QR Code Generator</CardTitle>
          </CardHeader>
          <CardContent className='flex-1'>
            <div className='h-full flex flex-col md:flex-row gap-8'>
            </div>            
          </CardContent>
        </Card>
      </div>
    </>
  )
}
