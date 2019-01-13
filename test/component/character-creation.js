process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const characterSchema = require('../../static/server/models/characters');
const mockCharacter = require('../_mocks/create-character-mock');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../static/server/server');
const mongoDBUrl =
  "mongodb+srv://HernanRossi:UMlYnuMQWVomlFYW@pathfinderarena-gmjjh.mongodb.net/test";
const uuid = require('uuid');
const { ObjectID } = require("mongodb");
chai.should();
chai.use(chaiHttp);

let newCharacter;
let app;

describe('Character', () => {
    beforeEach( async () => {
        app = chai.request(server);
        return mongoose.createConnection(mongoDBUrl);
        
    })
    afterEach(()=>{
        app.close();
    })
    describe('Get Characters: ', () => {
        it('Get characters should response status 200 and return array', async () => {
            const response = await app.get('/api/characters');
            const jsonRes = JSON.parse(response.res.text);
            response.status.should.equal(200);
            jsonRes.characters.should.be.a('array');
        })
    })
    describe('Get Character:', () => {
        it('Get character/id should responsd status 422 with invalid id format', async () => {
            const charId = uuid.v4();
            const response = await app.get(`/api/characters/${charId}`);
            response.status.should.equal(422);
        })
        it('Get character/id should response status 404 when character not found', async () => {
            const charId = new ObjectID();
            const response = await app.get(`/api/characters/${charId}`);
            response.status.should.equal(404);
        })
    })
    
})