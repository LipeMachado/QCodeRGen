"use client"

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { Link, Mail } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function QRCodeGenerator() {

  const [url, setUrl] = useState<string>();
  const [color, setColor] = useState("#FFFFFF");
  const [bgColor, setBgColor] = useState("#057FFF");
  const [logo, setLogo] = useState(null);
  const [logoFile, setLogoFile] = useState<File | null>();
  const [qrType, setQrType] = useState("link");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className='relative z-10 mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full '>
        <Card className='flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl'>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-center text-[#037fff]'>QR Code Generator</CardTitle>
          </CardHeader>
          <CardContent className='flex-1'>
            <div className='h-full flex flex-col md:flex-row gap-8'>
              <div className='flex-1 space-y-6'>
                <Tabs 
                  defaultValue='link'
                  className='space-y-6'
                  onValueChange={(val)=> setQrType(val)}
                >
                  <TabsList className='h-10 w-full grid grid-cols-2 bg-[#057FFF] text-lg'>
                    <TabsTrigger value='link' className='text-white font-bold'>
                      <Link className='w-4 h-4 mr-2' />
                      Link
                    </TabsTrigger>
                    <TabsTrigger value='email' className='text-white font-bold'>
                      <Mail className='w-4 h-4 mr-2' />
                      Email
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value='link'>
                    <div className='space-y-6'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='url'
                          className='font-semibold text-[#]'
                        >
                          URL
                        </Label>
                        <Input
                          id='url'
                          type='text'
                          value={url}
                          placeholder='https://example.com'
                          onChange={(e) => setUrl(e.target.value)}
                          className='w-full border-2 border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className='relative flex-1 bg-[#037FFF] rounded-lg flex flex-col justify-center space-y-6'></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
