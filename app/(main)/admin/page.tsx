import React from 'react'
import ContactsList from '@/components/contacts-list'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session: any = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect("/not-found")
  }

  const unreadContacts = await prisma.contact.findMany({
    where: {
      read: false
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  
  const readContacts = await prisma.contact.findMany({
    where: {
      read: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  
  const contacts = [...unreadContacts, ...readContacts]
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Gestion des messages</h1>
    <ContactsList data={contacts}/>
  </div>
  )
}