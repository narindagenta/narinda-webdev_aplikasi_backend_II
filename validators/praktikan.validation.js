const { body } = require('express-validator');
const { validator } = require('./validator');

const getPraktikanByName = [
    body(`nama`).isLength({min:8}),
    validator
]
const getPraktikanByEmailnPhone = [
    body(`email`).isEmail(),
    body(`telepon`).isLength(12),
    validator
]
const patchPraktikanByName = [
    body('nama').isLength({min:8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isInt({min:2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]
const deletePraktikanByEmail = [
    body('email').isEmail(),
    validator
]
const createPraktikan = [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isInt({min: 2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]
const createBulkInsertPraktikan = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['L','P']),
    body('*.angkatan').isInt({min: 2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').notEmpty(),
    validator
]

module.exports = {
    getPraktikanByName,
    getPraktikanByEmailnPhone,
    patchPraktikanByName,
    deletePraktikanByEmail,
    createPraktikan,
    createBulkInsertPraktikan
}