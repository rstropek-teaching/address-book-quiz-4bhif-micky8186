import {CREATED} from 'http-status-codes';
import {Request, Response, Next} from 'restify';
import {BadRequestError} from 'restify-errors';
import {contacts, IContact} from './data';

export function addContact(req:Request, res:Response, next:Next):void{
    if(!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email || !parseInt(req.body.id)){
        next(new BadRequestError('Invalid input (e.g. required field missing or empty)'));
    }else{
        const newContact:IContact = {
            id:req.body.id,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email
        };
        contacts.push(newContact);
        res.send(CREATED, newContact);
    }
}