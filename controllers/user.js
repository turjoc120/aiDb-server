import mongoose from 'mongoose';
import user from '../models/user.js';
import { stripe } from '../utils/stripe.js';



// add user 
export const addUser = async (req, res) => {

    try {
        // add user to stripe customer 
        const customer = await stripe.customers.create({
            email: req.body.email
        });

        // add user to db 
        const userDe = await user.create({ ...req.body, customerId: customer.id })

        res.status(200).json({ status: "valid", userDe: { ...req.body, customerId: customer.id }, message: "user added" })
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
}

// all user 
export const getUsers = async (req, res) => {
    try {
        const alluser = await user.find()

        res.status(200).json({ alluser })
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
}

// single user 
export const geUserDetails = async (req, res) => {

    try {
        const userDe = await user.findOne({ "uid": req.headers.uid })
        res.status(200).json(userDe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}