import React, { useEffect, useState } from 'react';
import awsmobile from './aws-exports';
import {Amplify, API, graphqlOperation} from 'aws-amplify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TripDelivery } from './Types/API';
import { listTripDeliveries } from './graphql/queries';
import { createTripDelivery, deleteTripDelivery } from './graphql/mutations'
import Modal from './components/Modal';
import Table from './components/Table';
import SearchBar from './components/Search';
import { GraphQLResult } from '@aws-amplify/api-graphql';


Amplify.configure(awsmobile)

function App() {
  const [items, setItems] = useState<TripDelivery[]>([]);
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);

  useEffect(() => {
    getTripDeliveryData()
  }, [])
  
  const getTripDeliveryData = () => {
    const result = API.graphql(graphqlOperation(listTripDeliveries))
    if (result instanceof Promise) {
      result.then((res) => {
        setItems(res.data.listTripDeliveries.items)
      }).catch((err) => {console.error(err)})
    }
  }
  const triggerModal = () => {
    let temp = shouldShowModal? false : true
    setShouldShowModal(temp)
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1>Submission - Pierre N. Smith</h1>
          <button onClick={triggerModal}>Add Trip</button>
          <div style={{width: '400px', marginTop: '15px'}}><SearchBar onKeyUp={handleEnterPressed<TripDelivery>(setItems)}/></div>
        </header>
        <main>
          <section>
          <Table>
            {
              items.length ? items.map((delivery: TripDelivery) => <Table.Row key={delivery.id} delivery={delivery} onclick={handleDeleteItem(delivery.id, items, setItems)}/>) :
              <tr><td colSpan={7}>No Results Found.</td></tr>
              
            }
          </Table>
          { shouldShowModal && 
          <Modal setShouldShowModal={setShouldShowModal}
                  setItems={setItems} 
                  items={items} 
                  onclick={handleFormSubmit}/>}
          </section>
        </main>
      </div>
  );
}

function handleEnterPressed<T>(setItems: (items:T[])=>void) {
  return (ev: KeyboardEvent) => onkeyUp<T>(ev, setItems)
}
function onkeyUp<T>(ev: any, setItems: (items:T[])=>void) {
  if (ev.key !== 'Enter' || ev.keyCode !== 13) return
  const trip_id: string = ev.target.value
  const result = API.graphql(graphqlOperation(listTripDeliveries, trip_id ? {
    "filter": {
      "trip_id": {
        "eq": trip_id
      }
    }
    
  }: undefined)) as Promise<GraphQLResult<any>>
  
  result.then((res) => {
    if (res.errors) {
      console.error(res.errors[0].message)
      return
    }
    if (res.data) {
      const items = res.data.listTripDeliveries.items as T[]
      console.log(trip_id, items)
      if (res.data.listTripDeliveries.items) {
        setItems(items)
      }
    }
  })
}
function handleDeleteItem<T extends Item>(id: string, items:T[], setItems: (items:T[])=>void) {
  return (ev: any) => deleteItem(ev, id, items, setItems)
}
function deleteItem<T extends Item>(ev: any, id: string, items: T[], setItems: (items:T[])=>void) {
  const result = API.graphql(graphqlOperation(deleteTripDelivery, {input: {id}})) as Promise<GraphQLResult<any>>

  result.then((res) => {
    if (res.errors) console.log(res.errors[0].message)
    setItems(items.filter((i: T) => i.id !== id))
  }).catch((err) => {console.error(err)})
  
}
function handleFormSubmit(ev: any) {
    const form = document.getElementById('create-trip-form')
    if (form instanceof HTMLFormElement) {
      const formData = new FormData(form)
      let createTripData: GraphQLCreateTripData = {}

      for (const [key, value] of formData.entries()) {
        if (key === 'trip_id' || 
            key === 'delivery_id' || 
            key === 'location' || 
            key === 'city') {
          createTripData[key] = value as string
        } else if (key === 'qty_delivered') {
          createTripData[key] = parseInt(value as string)
        }
      }
      return createNewTripDelivery(createTripData)
    }
}
async function createNewTripDelivery(data: GraphQLCreateTripData): Promise<GraphQLResult<any>> {
  return await API.graphql(graphqlOperation(createTripDelivery, { input: data })) as Promise<GraphQLResult<any>>;
}
export default App;
