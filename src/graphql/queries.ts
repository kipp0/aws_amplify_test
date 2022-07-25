/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTripDelivery = /* GraphQL */ `
  query GetTripDelivery($id: ID!) {
    getTripDelivery(id: $id) {
      id
      trip_id
      delivery_id
      location
      city
      qty_delivered
    }
  }
`;
export const listTripDeliveries = /* GraphQL */ `
  query ListTripDeliveries(
    $filter: TableTripDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        trip_id
        delivery_id
        location
        city
        qty_delivered
      }
      nextToken
    }
  }
`;
