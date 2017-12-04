import {NO_CONTENT} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {contacts} from './data';

export function deleteContact(req: Request, res: Response, next: Next): void {
  const id:number = parseInt(req.params.id);
  if (id) {
    const customerIndex = contacts.findIndex(c => c.id == id);
    if (customerIndex !== (-1)) {
      contacts.splice(customerIndex, 1);
      res.send(NO_CONTENT);
      next();
    } else {
      next(new NotFoundError('Person not found'));
    }
  } else {
    next(new BadRequestError('Invalid ID supplied'));
  }
}