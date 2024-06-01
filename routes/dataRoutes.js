const express = require('express')
const dataControllers = require('../controllers/dataControllers')
const router = express.Router()
const { contactValidationRules, validate } = require('../validation/validator')



/**
* @swagger
* components:
*   securitySchemes:
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
*   post:
*    tags:
*      - Add a New Contact
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '201':
*         description: "The contact was successfully created"
*       '400':
*         description: "fail"       
*          
*/

/**
* @swagger
* /data:
*   get:
*    tags:
*     - View Contacts
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
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*/

/**
* @swagger
* /data/{id}:
*   put:
*    tags: [UpdateContact]
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: contact id
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '200':
*         description: "The contact was successfully updated"
*       '400':
*         description: "fail"       
*/

/**
* @swagger
* /data/{id}:
*   delete:
*    tags: [DeleteContact]
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: contact id
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '201':
*         description: "The contact was successfully removed"
*       '400':
*         description: "fail"       
*/

router.post('/data', contactValidationRules(), validate, dataControllers.postData);
router.get('/data', dataControllers.findData);
router.put('/data/:id', contactValidationRules(), validate, dataControllers.updateDataById);
router.delete('/data/:id', dataControllers.deleteDataById);


module.exports= router;