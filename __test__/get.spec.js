const app = require('../serverToTest/servertest')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)




describe('Test Handlers', () => {
    test('responds to /books', async () => {
          
        const res = await request.get('/books');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /books/id', async () => {
        const res = await request.get('/books/63eaf768d6d2c0c84aff82cc');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /dictionary', async () => {
        const res = await request.get('/dictionary');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /dictionary/id', async () => {
        const res = await request.get('/dictionary/63eaf78ad6d2c0c84aff82ce');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /magazines', async () => {
        const res = await request.get('/magazines');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /magazines/id', async () => {
        const res = await request.get('/magazines/63eaf77ed6d2c0c84aff82cd');
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /cash-register', async () => {
        const res = await request.get('/cashregister');
        
        expect(res.statusCode).toBe(200)
    })
})
