const express = require('express')
const router = express.Router()

const passport = require('../libs/passport')

const { addApplication, getApplication, updateApplication, uploadPhotoApplication, uploadDocumentApplication, removeApplicationPhoto} = require('../controllers/auth.controller')
const { applicationIsNotConfirmed } = require('../middlewares/business_checker.middleware') 
const { multerApplicationsDocuments, multerApplicationsPhotos } = require('../middlewares/multer.middleware')
const { keyIsPhotoResource, keyPhotoIsSameUser, keyIsDocumentResource, keyDocumentIsSameUser } = require('../middlewares/s3-resource-validator.middleware')

router.route('/')
    .post(passport.authenticate('jwt', { session: false} ), addApplication)
    
    
router.route('/application')
    .get(passport.authenticate('jwt', { session: false} ), getApplication)
    .put(passport.authenticate('jwt', { session: false} ), applicationIsNotConfirmed, updateApplication)
    




module.exports = router
