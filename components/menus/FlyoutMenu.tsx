import React from 'react'
import { Fragment, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { IFlyoutMenu, ILink } from '../../types/MenuInterface'
import { classNames } from '../../utils/util'


export default function FlyoutMenu({ name, subMenu }: IFlyoutMenu) {
  const buttonRef = useRef(null)
  const timeoutDuration = 400
  let timeout: ReturnType<typeof setTimeout>

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      })
    )
  }

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open: boolean) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={buttonRef}
            className={classNames(
              open ? 'text-gray-100 bg-gray-600' : 'text-gray-200',
              'group rounded-md inline-flex items-center text-base font-medium focus:outline-none mx-4 px-4 py-2'
            )}
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
          >
            <span>{name}</span>
            <ChevronDownIcon
              className={classNames(open ? 'text-gray-100' : 'text-gray-200', 'ml-2 h-5 w-5')}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}>
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {subMenu.map((item: ILink) => (
                    <a
                      key={item.header}
                      href={item.href}
                      className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p className="text-base font-medium text-gray-900">{item.header}</p>
                      {item?.description && typeof item.description === "string" &&
                        <p className="mt-2 text-sm text-gray-500 pl-3">{item.description}</p>}
                      {item?.description && Array.isArray(item.description) &&
                        <p className="relative grid gap-2">
                          {item.description.map((elem: string) => (
                            <p key={elem} className="mt-2 text-sm text-gray-500 pl-3">{elem}</p>
                          ))
                          }
                        </p>
                      }
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
