"use client"

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Plus, Trash } from 'lucide-react'

// Define the contact type
interface EmergencyContact {
  name: string
  phone: string
}

export function EmergencyContacts() {
  const { tString } = useLanguage()
  const [contacts, setContacts] = useState<EmergencyContact[]>([])
  const [newContact, setNewContact] = useState<EmergencyContact>({ name: '', phone: '' })
  
  useEffect(() => {
    const savedContacts = localStorage.getItem('emergencyContacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])
  
  const saveContact = () => {
    if (newContact.name && newContact.phone) {
      const updatedContacts = [...contacts, newContact]
      setContacts(updatedContacts)
      localStorage.setItem('emergencyContacts', JSON.stringify(updatedContacts))
      setNewContact({ name: '', phone: '' })
    }
  }
  
  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index)
    setContacts(updatedContacts)
    localStorage.setItem('emergencyContacts', JSON.stringify(updatedContacts))
  }
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{tString("emergencyContacts")}</h2>
      
      <div className="flex gap-2">
        <Input 
          placeholder={tString("name")}
          value={newContact.name}
          onChange={(e) => setNewContact({...newContact, name: e.target.value})}
        />
        <Input 
          placeholder={tString("phone")}
          value={newContact.phone}
          onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
        />
        <Button onClick={saveContact} aria-label={tString("addContact")}>
          <Plus className="w-4 h-4 mr-2" />
          {tString("addContact")}
        </Button>
      </div>
      
      <div className="space-y-2">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
              <div>
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.phone}</div>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${contact.phone}`}>
                  <Button size="sm" variant="ghost" aria-label={tString("callEmergency")}>
                    <Phone className="w-4 h-4" />
                  </Button>
                </a>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => deleteContact(index)}
                  aria-label={tString("deleteContact")}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-500">{tString("noContactsYet")}</p>
            <p className="text-sm text-gray-400 mt-1">{tString("addYourFirstContact")}</p>
          </div>
        )}
      </div>
    </div>
  )
} 