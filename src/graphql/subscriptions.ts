/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTripDelivery = /* GraphQL */ `
  subscription OnCreateTripDelivery(
    $id: ID
    $trip_id: ID
    $delivery_id: ID
    $location: String
    $city: String
  ) {
    onCreateTripDelivery(
      id: $id
      trip_id: $trip_id
      delivery_id: $delivery_id
      location: $location
      city: $city
    ) {
      id
      trip_id
      delivery_id
      location
      city
      qty_delivered
    }
  }
`;
export const onUpdateTripDelivery = /* GraphQL */ `
  subscription OnUpdateTripDelivery(
    $id: ID
    $trip_id: ID
    $delivery_id: ID
    $location: String
    $city: String
  ) {
    onUpdateTripDelivery(
      id: $id
      trip_id: $trip_id
      delivery_id: $delivery_id
      location: $location
      city: $city
    ) {
      id
      trip_id
      delivery_id
      location
      city
      qty_delivered
    }
  }
`;
export const onDeleteTripDelivery = /* GraphQL */ `
  subscription OnDeleteTripDelivery(
    $id: ID
    $trip_id: ID
    $delivery_id: ID
    $location: String
    $city: String
  ) {
    onDeleteTripDelivery(
      id: $id
      trip_id: $trip_id
      delivery_id: $delivery_id
      location: $location
      city: $city
    ) {
      id
      trip_id
      delivery_id
      location
      city
      qty_delivered
    }
  }
`;
