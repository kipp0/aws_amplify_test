import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Function } from '@babel/types';
import {API, graphqlOperation} from 'aws-amplify';
import { TableTripDeliveryFilterInput } from '../../Types/API';
import { createTripDelivery, deleteTripDelivery } from '../mutations';
import { getTripDelivery } from '../queries';
import { onCreateTripDelivery, onDeleteTripDelivery } from '../subscriptions';

function TripAPI(): void {}

export function mutations(): void {}
export function queries(): void {}

export function deleteTrip(id: string, handleTripDeliveryListChange: Function): void {
    API.graphql(graphqlOperation(deleteTripDelivery, {input: id}))
}
export function createTrip<T>(handleTripDeliveryListChange: () => void): void {
    const result = API.graphql(graphqlOperation(createTripDelivery)) as Promise<GraphQLResult<T>>

    result.then((res) => {
        handleTripDeliveryListChange()
    })
}
export function getTripList(filter: TableTripDeliveryFilterInput): void {
    const result = API.graphql(graphqlOperation(getTripDelivery, {filter})) as Promise<GraphQLResult<T>>
    result.then((res) => {
        // handleTripDeliveryListChange()
    })
}
export function subscribe(): void {
    API.graphql(graphqlOperation(onCreateTripDelivery))
}
export function unSubscribe(): void {
    API.graphql(graphqlOperation(onDeleteTripDelivery))
}

// mutations.create = createTrip
// mutations.delete = deleteTrip
TripAPI.mutations = mutations
TripAPI.queries = queries
TripAPI.subscribe = subscribe
TripAPI.unSubscribe = unSubscribe

export default TripAPI