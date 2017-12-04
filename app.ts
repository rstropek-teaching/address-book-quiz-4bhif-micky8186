import {createServer, plugins} from 'restify';

import {addContact} from './add-contact';
import {getContacts} from './get-all-contacts';
import {deleteContact} from './delete-contact';

let server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.post('/contacts', addContact);
server.get('/contacts', getContacts);
server.del('/contacts/:id', deleteContact);

server.listen(8080, () => console.log('API is listening'));