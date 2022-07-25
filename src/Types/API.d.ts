/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTripDeliveryInput = {
  trip_id: string,
  delivery_id: string,
  location?: string | null,
  city?: string | null,
  qty_delivered?: number | null,
};

export type TripDelivery = {
  __typename: "TripDelivery",
  id: string,
  trip_id: string,
  delivery_id: string,
  location?: string | null,
  city?: string | null,
  qty_delivered?: number | null,
};

export type UpdateTripDeliveryInput = {
  id: string,
  trip_id?: string | null,
  delivery_id?: string | null,
  location?: string | null,
  city?: string | null,
  qty_delivered?: number | null,
};

export type DeleteTripDeliveryInput = {
  id: string,
};

export type TableTripDeliveryFilterInput = {
  id?: TableIDFilterInput | null,
  trip_id?: TableIDFilterInput | null,
  delivery_id?: TableIDFilterInput | null,
  location?: TableStringFilterInput | null,
  city?: TableStringFilterInput | null,
  qty_delivered?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TripDeliveryConnection = {
  __typename: "TripDeliveryConnection",
  items?:  Array<TripDelivery | null > | null,
  nextToken?: string | null,
};

export type CreateTripDeliveryMutationVariables = {
  input: CreateTripDeliveryInput,
};

export type CreateTripDeliveryMutation = {
  createTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type UpdateTripDeliveryMutationVariables = {
  input: UpdateTripDeliveryInput,
};

export type UpdateTripDeliveryMutation = {
  updateTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type DeleteTripDeliveryMutationVariables = {
  input: DeleteTripDeliveryInput,
};

export type DeleteTripDeliveryMutation = {
  deleteTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type GetTripDeliveryQueryVariables = {
  id: string,
};

export type GetTripDeliveryQuery = {
  getTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type ListTripDeliveriesQueryVariables = {
  filter?: TableTripDeliveryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};
export type ListTripDeliveriesResult = {
  listTripDeliveries: {
    items?: Array<TripDelivery | null> | null,
    nextToken?: string | null
  }
}
export type ListTripDeliveriesQuery = {
  listTripDeliveries?:  {
    __typename: "TripDeliveryConnection",
    items?:  Array< {
      __typename: "TripDelivery",
      id: string,
      trip_id: string,
      delivery_id: string,
      location?: string | null,
      city?: string | null,
      qty_delivered?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTripDeliverySubscriptionVariables = {
  id?: string | null,
  trip_id?: string | null,
  delivery_id?: string | null,
  location?: string | null,
  city?: string | null,
};

export type OnCreateTripDeliverySubscription = {
  onCreateTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type OnUpdateTripDeliverySubscriptionVariables = {
  id?: string | null,
  trip_id?: string | null,
  delivery_id?: string | null,
  location?: string | null,
  city?: string | null,
};

export type OnUpdateTripDeliverySubscription = {
  onUpdateTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};

export type OnDeleteTripDeliverySubscriptionVariables = {
  id?: string | null,
  trip_id?: string | null,
  delivery_id?: string | null,
  location?: string | null,
  city?: string | null,
};

export type OnDeleteTripDeliverySubscription = {
  onDeleteTripDelivery?:  {
    __typename: "TripDelivery",
    id: string,
    trip_id: string,
    delivery_id: string,
    location?: string | null,
    city?: string | null,
    qty_delivered?: number | null,
  } | null,
};
