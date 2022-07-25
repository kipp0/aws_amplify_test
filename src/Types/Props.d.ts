import { func } from "prop-types";

export type ModalProps = {
    setShouldShowModal: func,
    setItems: func,
    items: items,
    onclick: (e: any) => Promise<GraphQLResult<any> | Observable<object>> | undefined
}

export type RowProps = {
    delivery: TripDelivery,
    onclick: (e: any) => void
}

export type ButtonProps ={
    onclick: (e: any) => void
}
export type SearchBarPropType = {
    onKeyUp: (e: KeyboardEvent<HTMLImageElement>) => void
}