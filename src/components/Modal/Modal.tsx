import { GraphQLResult } from "@aws-amplify/api-graphql";
import React from "react";
import { ModalProps } from "../../Types/Props";
import './Modal.css'

function Modal({setShouldShowModal, setItems, items, onclick}: ModalProps) {
    
    const handleSubmit = (evt: any) => {
        const createNewTripDeliveryPromise = onclick(evt)

        if (createNewTripDeliveryPromise instanceof Promise<GraphQLResult<any>>) {
            createNewTripDeliveryPromise
            .then((res) => {
               setItems([...items, res.data.createTripDelivery])
            })
            .catch((err) => {console.log(err)})
          }
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add New Trip</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setShouldShowModal(false)}>x</button>
                </div>
                <div className="modal-body">
                    <form id="create-trip-form" action="">
                        <div className="mb-3">
                            <label htmlFor="trip_id" className="form-label">Trip ID</label>
                            <input type="text" className="form-control" id="trip_id" name="trip_id" aria-describedby="trip id" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="delivery_id" className="form-label">Delivery ID</label>
                            <input type="text" className="form-control" id="delivery_id" name="delivery_id" aria-describedby="delivery id" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" name="location" aria-describedby="location" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" aria-describedby="city" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="qty_delivered" className="form-label">QTY Delivered</label>
                            <input type="text" className="form-control" id="qty_delivered" name="qty_delivered" aria-describedby="Qty Delivered" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShouldShowModal(false)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={(evt) => handleSubmit(evt)}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Modal