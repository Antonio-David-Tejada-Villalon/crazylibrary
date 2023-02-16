const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);


// describe('Test Handlers', () => {

//     beforeAll(async () => {
//         await mongoose.connect(process.env.MONGO_URI);
//     });

//     test('responds to /books', async () => {
          
//         const res = await request.get('/books');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /books/id', async () => {
//         const res = await request.get('/books/63e46be95bc79be34f083407');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /dictionary', async () => {
//         const res = await request.get('/dictionary');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /dictionary/id', async () => {
//         const res = await request.get('/dictionary/63eaf78ad6d2c0c84aff82ce');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /magazines', async () => {
//         const res = await request.get('/magazines');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /magazines/id', async () => {
//         const res = await request.get('/magazines/63eaf77ed6d2c0c84aff82cd');
        
//         expect(res.statusCode).toBe(200)
//     })

//     test('responds to /cash-register', async () => {
//         const res = await request.get('/cash-register');
        
//         expect(res.statusCode).toBe(200)
//     })

//     afterAll(async () => {
//         await mongoose.disconnect();
//     });
// })

//Nicolas code


const accessToken = "appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjc2NTI2NzA5LCJ1YXQiOjE2NzY1MjY3MTAsImV4cCI6MTY3NjYxMzExMH0..Q8mR5vemyFLM_4SH.XZCdxhD0b_f6QR2dbatZFKk3a7Fkg4jXtDhBcBcwuNuXRokfBm5EMJlcKpA42LJDK71Fd79gwW6fF3k-AUhvjFLyQZUJMJCw26rQbtFea7gvQisfXaKGIXcynchy4fedkpdGI1SqF40eB6gUAUIZmXKavHQflG2IvO-XMCTwCg46peMJ43E0qcAOlOsvUzpWpjIkqep-V35PfOIv-lcUJ2NYhISs1rZKVcqB7Afa8iYu1Joka7ClZ9-1i3p0pzt014ninlFp4kwQHBiwu79c6_pXLsBMG8sLnoIM1g_9BoVPGPyQrJPPBFO-DPBY5KIQprwd8FSQ6HBzEJrO-1sK3LbCOBW3ul2nGRsiClllM10_LpgZjoZIoDLcM4kn7HjGOUQY15y-eh9-imDDnVCwkutfgykVMclNl7ZGm-GzRpT1aR37DaeoBVHwDtMr359EBfrxN9r_MktI6GZ8K3f7UxtjekVKrfePBGlkSzjhXk2DEYBY12uGy0BIHPs5wR3yF7pyXeajXI3ywfcrmyoEVMDYqPdC5h8991qxywtbx6Qevf_7JuO3DGpXxwj8b41nTtdelicjZWI1F6mn_Z9NwuyIfH5W2f5NO9bZX3ePofZnhsfXMEVdkdJ_n_6hGrGwwtl_vDC1AvlrezPH477t0mVkGNf7_j8YJncwpsjhoMESsHH_LLS1B34LiPMHdNTK5YYZOc8sJqtzmQ4WYcbdP3_wZLvh1I6-hIcJuTzua7ISSxKIlJ_nPmnkwkCCXpP752wtoEJ_Ev8bYhi_IgXoP207Se43jk9srkFRKqQp2JpNr88lx5jXavWnJG-zTJv5KpuiLgOK-HbMqJSPFMQqxN0K35unKiwlfr3P4l_3O8QvUKZ4MepFx_uWuavyBIAz5IFigEFJc9vgREqbcNbVZZe_RbHXH2wAaZLdMYCQ68x2alBiVUqjjSwIIHk5cAxp0-LiiWbIMTVObDpogB9Zd9T0_NxlGauwV2FURSF3b0Wl9Q5uJkEGYioQ7YdAZYhCtdErWQpGrtuYZHrdf8IqRPKpWwfFMQu0q0C3AkB2CCINtwls4CLqnwfLrcKaOBS5l_cQFrXKSD9iBddcaXAMQzI15bKFDkS_HUnYzzxrjOp3iCj6e--MQh4xgsTsBiNaXl0QR2v1T52_HACD_5vyIa1b6XT7xs8hAtU4A0xErdGMOlj-zoSyKIwQbYGQui2OR3_P6cVsvQCXt7a4XbJWW8Oe9jNLdS8Xn-eu7Rqb5tXO6X-r_T8oecYc-yBczoA5v0ysZTG1p9HhkOGD54lFgO1rD0Nyhc01nPPu4wB1UTBdy26ylYDHR35ed6Q9j9y_rwegIwQ4wNnEp4DTGA7TCN2tR0MOlpFHM97DWVMQEAi1ooHo1r98QrNLb_GlTpxg9qJiNJ6u0wB-AxcPfTprBEM7VcQxFoeykEfasA9jEIbwqo-GYjdBWphe7fvy-5czqFkk2gIdvRG7fPBYV7F9Sui1vx3aWMMUXhWhmUmniYcb_P4SyHVXS2-P36k4B3YGuZdlWGEOFiGsD2FZuBhEIcvHDtwWjKhRayLsBfjYnezk5tu2aGb9jDqdHa7ucjW37JUZ8_E7hGoOb3b-t6vIUnMViHOEI1nUq7vfbi3fP-gCfObpOJld7J5lv7scl-dczTAtmxlS.ufEq0jthWgfeEZY1M0DDEQ";

describe('Test Handlers', () => {

    beforeAll(async () => {
                await mongoose.connect(process.env.MONGO_URI);
             });


    test('responds to /books', async () => {
          
        const res = await request.get('/books').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /books/id', async () => {
        const res = await request.get('/books/63eaf768d6d2c0c84aff82cc').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /dictionary', async () => {
        const res = await request.get('/dictionary').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /dictionary/id', async () => {
        const res = await request.get('/dictionary/63eaf78ad6d2c0c84aff82ce').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /magazines', async () => {
        const res = await request.get('/magazines').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /magazines/id', async () => {
        const res = await request.get('/magazines/63eaf77ed6d2c0c84aff82cd').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    test('responds to /cash-register', async () => {
        const res = await request.get('/cash-register').set('Cookie', `${accessToken}`);
        
        expect(res.statusCode).toBe(200)
    })

    afterAll(async () => {
                 await mongoose.disconnect();
             });
})
