import { lazy } from "react";

export const Todolist = lazy(()=> import(`../pages/todolist/todolist`))
export const Typeturist = lazy(()=> import(`../pages/typeturist/typeturist`))
export const Marshrut = lazy(()=> import(`../pages/marshrut/marshrut`))
export const Events = lazy(()=> import(`../pages/EVENTS/events`))
export const Information = lazy(()=> import(`../pages/INFORMATION/information`))
export const Contacts = lazy(()=> import(`../pages/CONTACTS/contacts`))
export const Byid = lazy(()=> import(`../pages/byid/byid`))
export const Tajikistan = lazy(()=> import(`../pages/tajikistan/tajikistan`))