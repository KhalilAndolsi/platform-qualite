"use client";
import { CheckCircle, Circle, Mail, Phone, User } from "lucide-react";
import React, { useState } from "react";
import { Contact } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

const ContactsList = ({ data }: { data: Contact[] }) => {
  const [contacts, setContacts] = useState<Contact[]>(data);

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ read: true }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du contact");
      }

      // Update local state
      setContacts(
        contacts.map((contact) =>
          contact.id === id ? { ...contact, read: true } : contact
        )
      );
    } catch (err) {
      console.error("Error marking contact as read:", err);
    }
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Liste des messages</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 rounded-lg border-2 ${
              contact.read ? "border-gray-200" : "border-blue-500"
            } shadow-sm`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                <h3 className="font-semibold">{contact.name}</h3>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                {contact.read ? (
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                ) : (
                  <Circle size={16} className="text-blue-500 mr-1" />
                )}
                {formatDistanceToNow(new Date(contact.createdAt), {
                  addSuffix: true,
                  locale: fr,
                })}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-gray-500" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline">
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-gray-500" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-blue-600 hover:underline">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md text-sm mt-2">
              <p className="whitespace-pre-line">{contact.message}</p>
            </div>

            {!contact.read && (
              <div className="mt-4 text-right">
                <button
                  onClick={() => markAsRead(contact.id)}
                  className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
                  Marquer comme lu
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
