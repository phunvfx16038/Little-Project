import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from ".";
import { contactProp, dataInput, eventDetailProp, paymentProp } from "../propType";

export const db=getFirestore(app)
export const eventCollection = collection(db,'events')
export const ticketCollection = collection(db,'tickets')
export const paymentCollection = collection(db,'payments')
export const contactCollection = collection(db,'contacts')
//add events to firebase
export const addEvents = async (events:eventDetailProp) =>{
    const newEvent = await addDoc(eventCollection,{...events})
}

// add tickets to firebase
export const addTicketsToFireBase = async (tickets:dataInput) =>{
    const newTickets = await addDoc(ticketCollection,{...tickets})
}

// add payments to firebase
export const addPaymentsToFireBase = async (payments:paymentProp) =>{
    const newPayments = await addDoc(paymentCollection,{...payments})
}

// add contacts to firebase
export const addContactsToFireBase = async (contacts:contactProp) =>{
    const newPContacts = await addDoc(contactCollection,{...contacts})
}