'use client'

import { SendHorizonal } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Define schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse email valide' }),
  phone: z.string().min(10, { message: 'Veuillez saisir un numéro de téléphone valide' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères' })
})

// Type inference from schema
type ContactFormData = z.infer<typeof contactSchema>

const Contactui = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l\'envoi du message')
      }

      setSubmitSuccess(true)
      reset() // Reset form after successful submission
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
      
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      className="space-y-4 col-span-full lg:col-span-7" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-bold my-4">Laissez votre message ici</h1>
      
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Votre message a été envoyé avec succès!
        </div>
      )}
      
      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {submitError}
        </div>
      )}
      
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className={`w-full rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-foreground'} outline-none p-3 text-sm`}
          placeholder="Name"
          type="text"
          id="name"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-foreground'} outline-none p-3 text-sm`}
            placeholder="Email address"
            type="email"
            id="email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input
            className={`w-full rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-foreground'} outline-none p-3 text-sm`}
            placeholder="Phone Number"
            type="tel"
            id="phone"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          className={`w-full rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-foreground'} outline-none p-3 text-sm`}
          placeholder="Message"
          rows={8}
          id="message"
          {...register('message')}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} 
          {!isSubmitting && <SendHorizonal size={18} />}
        </button>
      </div>
    </form>
  )
}

export default Contactui