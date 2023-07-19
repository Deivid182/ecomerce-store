"use client"
import { Color, Size } from '@/types'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '@/components/ui/button'
import { Plus, X } from 'lucide-react'
import IconButton from '@/components/ui/icon-button'
import Filter from './filter'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {

  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button 
        onClick={onOpen}
        className='flex items-center gapx-x-2 lg:hidden' >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}      
      >
        {/* background */}
        <div className='inset-0 fixed bg-black/50' />
        <div className='fixed inset-0 z-50 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* close btn */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={20} />} onClick={onClose} />
            </div>

            <div className='p-4'>
              <Filter 
                data={colors}
                name='Colors'
                valueKey='colorId'
              />
              <Filter 
                data={sizes}
                name='Sizes'
                valueKey='sizeId'
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters
