const express = require('express')
const dataControllers = require('../controllers/dataControllers')
const router = express.Router()

/**
* @swagger
* components:
*   schemas:
*      Contacts:
*          type: object
*          required:
*            - firstname
*            - lastname
*            - email
*            - idnumber
*          properties:
*            firstname:
*               type: string
*            lastname:
*               type: string
*            email:
*               type: string
*            idnumber:
*               type: integer   
*/


/**
* @swagger
* /data:
*   get:
*    tags:
*     - Contacts
*    responses:
*       '200':
*         description: "success"
*       '400':
*         description: "fail"
*         content:
*           "application/json":
*               schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    _id:
*                      type: string
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*/


router.post('/data', dataControllers.postData);
router.get('/data', dataControllers.findData);


module.exports= router;