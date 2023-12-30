'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-slate-800',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
<TabsPrimitive.Trigger
  className={cn(
    'inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
    'text-slate-900 bg-white hover:bg-sky-400',
    'dark:text-gray-200 dark:bg-slate-800 dark:hover:bg-sky-300',
    'data-[state=active]:bg-indigo-600 data-[state=active]:text-white',
    'dark:data-[state=active]:bg-indigo-300 dark:data-[state=active]:text-slate-800',
    className
  )}
  {...props}
  ref={ref}
/>


))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
<TabsPrimitive.Content
  className={cn(
    'mt-2 rounded-md p-6 transition-colors',
    'bg-slate-50 border border-slate-300',
    'dark:bg-slate-700 dark:border-slate-600',
    className
  )}
  {...props}
  ref={ref}
/>

))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }